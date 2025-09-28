import Navigation from "@/Components/layouts/navigation";

export const metadata = {
  title: 'Sign Up - Ananse AI',
  description: 'Join the Ananse AI community for culturally-aware tech mentorship',
};

const SignupPage = () => {
    return(
        <div className="min-h-screen bg-[#0D1117]">
            <Navigation />
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-md mx-auto text-center">
                    <div className="text-6xl mb-6">🕷️</div>
                    <h1 className="text-3xl font-bold text-white mb-4">Join Ananse AI</h1>
                    <p className="text-gray-400 mb-8">
                        Connect with culturally-aware mentorship and build your tech career while staying rooted in your heritage.
                    </p>
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-[#FFD700]/20">
                        <p className="text-gray-300 text-sm">
                            This is a demo version. In a full implementation, you would be able to sign up and create an account to access personalized mentorship features.
                        </p>
                    </div>
                    <div className="mt-6">
                        <a 
                            href="/AImodel" 
                            className="inline-block bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-6 py-3 rounded-lg transition-colors"
                        >
                            Try Ananse AI Mentor
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignupPage;