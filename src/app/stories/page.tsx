import StoriesPage from '../../Components/stories/StoriesPage';
import Navigation from '@/Components/layouts/navigation';

export const metadata = {
  title: 'Success Stories - Ananse AI',
  description: 'Inspiring stories of African tech professionals, cultural wisdom, and success narratives from the diaspora',
};

export default function Stories() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navigation />
      <StoriesPage />
    </div>
  );
}
