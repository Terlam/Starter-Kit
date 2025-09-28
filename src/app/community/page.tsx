import CommunityPage from '../../Components/community/CommunityPage';
import Navigation from '@/Components/layouts/navigation';

export const metadata = {
  title: 'Community - Ananse AI',
  description: 'Connect with African tech professionals, find mentors, and build meaningful relationships in the diaspora community',
};

export default function Community() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navigation />
      <CommunityPage />
    </div>
  );
}
