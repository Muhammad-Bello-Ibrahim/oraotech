import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-gradient-hero px-4 py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-border bg-card p-10 text-center shadow-card">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you are looking for may have moved or no longer exists. Use the button below to return to the homepage.
        </p>
        <Button className="mt-6" onClick={() => (window.location.href = '/')}>
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
