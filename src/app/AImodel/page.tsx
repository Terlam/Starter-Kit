import AnanseAI from "@/Components/Gemini/page"
import Navigation from "@/Components/layouts/navigation"

export const metadata = {
  title: 'Ananse AI Mentor - Cultural Wisdom Meets Tech Guidance',
  description: 'Connect with Ananse AI for culturally-aware mentorship that combines technical expertise with African wisdom and cultural context',
};

const page = () => {
    return(
        <div className="min-h-screen bg-[#0D1117]">
            <Navigation />
            <AnanseAI/>
        </div>
    )
}
export default page