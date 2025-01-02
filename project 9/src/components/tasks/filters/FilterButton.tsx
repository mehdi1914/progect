import { Button } from '@/components/ui/button';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface FilterButtonProps extends ComponentProps<typeof Button> {
  isActive: boolean;
}

export function FilterButton({ isActive, className, ...props }: FilterButtonProps) {
  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      size="sm"
      className={cn('transition-colors', className)}
      {...props}
    />
  );
}