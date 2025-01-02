import { useTask } from '@/contexts/TaskContext';
import { SearchInput } from './filters/SearchInput';
import { StatusFilters } from './filters/StatusFilters';
import { TagFilters } from './filters/TagFilters';

export function TaskFilters() {
  const {
    filter,
    searchQuery,
    selectedTags,
    setFilter,
    setSearchQuery,
    setSelectedTags,
  } = useTask();

  return (
    <div className="space-y-4 bg-card p-4 rounded-lg">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <StatusFilters currentFilter={filter} onFilterChange={setFilter} />
      <TagFilters selectedTags={selectedTags} onTagsChange={setSelectedTags} />
    </div>
  );
}