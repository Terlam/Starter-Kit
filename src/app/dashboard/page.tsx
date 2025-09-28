import AdminDashboard from "@/Components/mvpblocks"
import Navigation from "@/Components/layouts/navigation"

export const metadata = {
  title: 'Career Dashboard - Ananse AI',
  description: 'Track your career progress, mentorship journey, and skill development with Ananse AI',
};

const dashboardpage = () => {
    return(
        <div className="min-h-screen bg-[#0D1117]">
            <Navigation />
            <AdminDashboard/>
        </div>
    )
}
export default dashboardpage;