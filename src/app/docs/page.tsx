import DocsPage from '@/Components/docs/DocsPage';
import Navigation from '@/Components/layouts/navigation';

export const metadata = {
  title: 'Documentation - Ananse AI',
  description: 'Learn how to use and extend the Ananse AI mentorship platform',
};

export default function Docs() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navigation />
      <DocsPage />
    </div>
  );
}
