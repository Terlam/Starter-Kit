import QuizPage from '../../Components/quiz/QuizPage';
import Navigation from '@/Components/layouts/navigation';

export const metadata = {
  title: 'Tech Skills Assessment - Ananse AI',
  description: 'Test your technical knowledge, cultural intelligence, and career readiness with interactive scenarios',
};

export default function Quiz() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navigation />
      <QuizPage />
    </div>
  );
}
