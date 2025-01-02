import { useAuth } from '@/contexts/AuthContext';
import { TaskProvider } from '@/contexts/TaskContext';
import { ThemeProvider } from '@/providers/theme-provider';
import { AuthForm } from '@/components/auth/AuthForm';
import { Header } from '@/components/layout/Header';
import { TaskForm } from '@/components/tasks/TaskForm';
import { TaskList } from '@/components/tasks/TaskList';

function App() {
  const { user } = useAuth();

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      {!user ? (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <AuthForm />
        </div>
      ) : (
        <TaskProvider>
          <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto space-y-8">
                <TaskForm />
                <TaskList />
              </div>
            </main>
          </div>
        </TaskProvider>
      )}
    </ThemeProvider>
  );
}

export default App;