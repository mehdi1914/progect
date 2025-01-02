import { Plus } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
        <Plus className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No tasks found</h3>
      <p className="text-muted-foreground">
        Get started by creating your first task above!
      </p>
    </div>
  );
}