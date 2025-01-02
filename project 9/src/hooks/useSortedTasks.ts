import { useMemo } from 'react';
import type { Task } from '@/types';

export function useSortedTasks(
  tasks: Task[],
  filter: 'all' | 'completed' | 'pending',
  searchQuery: string,
  selectedTags: string[]
) {
  return useMemo(() => {
    return tasks
      .filter(task => {
        const matchesFilter =
          filter === 'all' ||
          (filter === 'completed' && task.completed) ||
          (filter === 'pending' && !task.completed);

        const matchesSearch =
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.some(tag => task.tags.includes(tag));

        return matchesFilter && matchesSearch && matchesTags;
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [tasks, filter, searchQuery, selectedTags]);
}