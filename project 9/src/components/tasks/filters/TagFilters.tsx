import { FilterButton } from './FilterButton';

const AVAILABLE_TAGS = ['Work', 'Personal', 'Shopping', 'Health', 'Important'] as const;

interface TagFiltersProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export function TagFilters({ selectedTags, onTagsChange }: TagFiltersProps) {
  const toggleTag = (tag: string) => {
    onTagsChange(
      selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag]
    );
  };

  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {AVAILABLE_TAGS.map(tag => (
          <FilterButton
            key={tag}
            isActive={selectedTags.includes(tag)}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </FilterButton>
        ))}
      </div>
    </div>
  );
}