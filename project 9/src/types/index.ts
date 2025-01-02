export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  userId: string;
  tags: string[];
  timeSpent: number;
  progress: number;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  filter: 'all' | 'completed' | 'pending';
  searchQuery: string;
  selectedTags: string[];
}