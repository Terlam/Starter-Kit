import Navigation from "@/Components/layouts/navigation";

export const metadata = {
  title: 'Login - Ananse AI',
  description: 'Access your Ananse AI mentorship dashboard',
};

const LoginPage = () => {
    return(
        <div className="min-h-screen bg-[#0D1117]">
            <Navigation />
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-md mx-auto text-center">
                    <div className="text-6xl mb-6">🕷️</div>
                    <h1 className="text-3xl font-bold text-white mb-4">Welcome Back</h1>
                    <p className="text-gray-400 mb-8">
                        Continue your mentorship journey with Ananse AI
                    </p>
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-[#FFD700]/20">
                        <p className="text-gray-300 text-sm">
                            This is a demo version. In a full implementation, you would be able to log in to access your personalized dashboard and mentorship progress.
                        </p>
                    </div>
                    <div className="mt-6 space-y-3">
                        <a 
                            href="/AImodel" 
                            className="block bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-6 py-3 rounded-lg transition-colors"
                        >
                            Access Ananse AI Mentor
                        </a>
                        <a 
                            href="/dashboard" 
                            className="block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                        >
                            View Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;