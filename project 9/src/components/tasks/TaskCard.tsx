import { useState } from 'react';
import { useTask } from '@/contexts/TaskContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  CheckCircle2,
  Clock,
  PlayCircle,
  StopCircle,
  Trash2,
  XCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Task } from '@/types';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const [isTracking, setIsTracking] = useState(false);
  const [trackingInterval, setTrackingInterval] = useState<number>();
  const { updateTask, deleteTask } = useTask();

  const toggleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  const toggleTimeTracking = () => {
    if (isTracking) {
      clearInterval(trackingInterval);
      setIsTracking(false);
    } else {
      const interval = window.setInterval(() => {
        updateTask(task.id, {
          timeSpent: task.timeSpent + 1,
          progress: Math.min(100, ((task.timeSpent + 1) / 3600) * 100),
        });
      }, 1000);
      setTrackingInterval(interval);
      setIsTracking(true);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <Card className={cn('group transition-all hover:shadow-md', {
      'opacity-75': task.completed,
    })}>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className={cn('text-lg font-semibold transition-colors', {
              'line-through text-muted-foreground': task.completed,
            })}>
              {task.title}
            </h3>
            <p className="text-sm text-muted-foreground">{task.description}</p>
          </div>
          
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleComplete}
              className={cn('hover:text-primary', {
                'text-primary': task.completed,
              })}
            >
              {task.completed ? (
                <XCircle className="h-5 w-5" />
              ) : (
                <CheckCircle2 className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTimeTracking}
              className={cn('hover:text-primary', {
                'text-destructive hover:text-destructive': isTracking,
              })}
            >
              {isTracking ? (
                <StopCircle className="h-5 w-5" />
              ) : (
                <PlayCircle className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTask(task.id)}
              className="hover:text-destructive"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm tabular-nums">
              {formatTime(task.timeSpent)}
            </span>
          </div>
          
          <div className="flex-1 flex items-center gap-2">
            <Progress value={task.progress} className="flex-1" />
            <span className="text-sm text-muted-foreground tabular-nums w-12">
              {Math.round(task.progress)}%
            </span>
          </div>
        </div>

        {task.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {task.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}