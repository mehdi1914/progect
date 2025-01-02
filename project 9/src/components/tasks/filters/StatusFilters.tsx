import { FilterButton } from './FilterButton';
import type { TaskState } from '@/types';

interface StatusFiltersProps {
  currentFilter: TaskState['filter'];
  onFilterChange: (filter: TaskState['filter']) => void;
}

export function StatusFilters({ currentFilter, onFilterChange }: StatusFiltersProps) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Status</h3>
      <div className="flex flex-wrap gap-2">
        <FilterButton
          isActive={currentFilter === 'all'}
          onClick={() => onFilterChange('all')}
          className="flex-1 sm:flex-none"
        >
          All Tasks
        </FilterButton>
        <FilterButton
          isActive={currentFilter === 'pending'}
          onClick={() => onFilterChange('pending')}
          className="flex-1 sm:flex-none"
        >
          In Progress
        </FilterButton>
        <FilterButton
          isActive={currentFilter === 'completed'}
          onClick={() => onFilterChange('completed')}
          className="flex-1 sm:flex-none"
        >
          Completed
        </FilterButton>
      </div>
    </div>
  );
}