import { useTask } from '@/contexts/TaskContext';
import { TaskCard } from './TaskCard';
import { TaskFilters } from './TaskFilters';
import { EmptyState } from './EmptyState';
import { useSortedTasks } from '@/hooks/useSortedTasks';

export function TaskList() {
  const { tasks, filter, searchQuery, selectedTags } = useTask();
  const filteredTasks = useSortedTasks(tasks, filter, searchQuery, selectedTags);

  return (
    <div className="space-y-6">
      <TaskFilters />
      
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <EmptyState />
        ) : (
          filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}