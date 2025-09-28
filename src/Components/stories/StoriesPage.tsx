'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';

interface SuccessStory {
  id: number;
  title: string;
  author: string;
  role: string;
  location: string;
  category: string;
  excerpt: string;
  fullStory: string;
  culturalWisdom: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

const mockStories: SuccessStory[] = [
  {
    id: 1,
    title: "From Lagos to Silicon Valley: Building Bridges Through Code",
    author: "Aisha Okafor",
    role: "Senior Software Engineer at Google",
    location: "San Francisco, CA",
    category: "Career Journey",
    excerpt: "How I navigated cultural barriers, built technical expertise, and created opportunities for other African developers in Silicon Valley.",
    fullStory: "Growing up in Lagos, I never imagined I'd be working at one of the world's largest tech companies. My journey began with a computer science degree from the University of Lagos, where I was one of only three women in my graduating class...",
    culturalWisdom: "In our culture, we say 'It takes a village to raise a child.' In tech, it takes a community to build a career. Never underestimate the power of mentorship and giving back.",
    tags: ["Career Growth", "Mentorship", "Cultural Identity", "Leadership"],
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "The Power of Ubuntu in Tech Leadership",
    author: "Thabo Mthembu",
    role: "Engineering Manager at Microsoft",
    location: "Seattle, WA",
    category: "Leadership",
    excerpt: "How the African philosophy of Ubuntu transformed my approach to team management and created a more inclusive engineering culture.",
    fullStory: "When I first became an engineering manager, I brought with me not just my technical skills, but the values I learned growing up in Johannesburg. Ubuntu - 'I am because we are' - became my guiding principle...",
    culturalWisdom: "Ubuntu teaches us that our humanity is tied to the humanity of others. In tech leadership, this means building teams where everyone's success contributes to the whole.",
    tags: ["Leadership", "Team Building", "Cultural Values", "Inclusion"],
    readTime: "6 min read",
    featured: true
  },
  {
    id: 3,
    title: "Building Fintech Solutions for the African Market",
    author: "Ngozi Eze",
    role: "Product Manager at Flutterwave",
    location: "Lagos, Nigeria",
    category: "Entrepreneurship",
    excerpt: "The challenges and opportunities of building financial technology solutions that serve African users and their unique needs.",
    fullStory: "When we started building our fintech platform, we quickly realized that solutions designed for Western markets don't always work in Africa. Mobile money, informal economies, and diverse banking systems required a completely different approach...",
    culturalWisdom: "As we say in Nigeria, 'If you want to go fast, go alone. If you want to go far, go together.' Building for African markets requires deep community understanding.",
    tags: ["Fintech", "African Markets", "Product Development", "Innovation"],
    readTime: "10 min read",
    featured: false
  },
  {
    id: 4,
    title: "Mentoring the Next Generation: Passing the Torch",
    author: "Dr. Kemi Adebayo",
    role: "AI Research Scientist at IBM",
    location: "New York, NY",
    category: "Mentorship",
    excerpt: "How I'm using my position in AI research to mentor young African women in STEM and create pathways for their success.",
    fullStory: "As one of the few Black women in AI research, I feel a deep responsibility to mentor the next generation. Every month, I host virtual sessions with students across Africa, sharing not just technical knowledge, but career guidance...",
    culturalWisdom: "Our ancestors believed in the power of storytelling to teach and inspire. Today, I use my story to show young women what's possible in tech.",
    tags: ["AI/ML", "Mentorship", "Women in Tech", "STEM Education"],
    readTime: "7 min read",
    featured: false
  },
  {
    id: 5,
    title: "Remote Work and Cultural Connection",
    author: "Kwame Asante",
    role: "Full-Stack Developer at Shopify",
    location: "Accra, Ghana",
    category: "Remote Work",
    excerpt: "How remote work allowed me to maintain my cultural connections while building a global career in technology.",
    fullStory: "When the pandemic forced companies to embrace remote work, I saw an opportunity to return to Ghana while continuing my career with a Canadian tech company. This decision transformed not just my work-life balance, but my understanding of cultural identity...",
    culturalWisdom: "Distance doesn't diminish connection. Technology has allowed us to maintain our cultural roots while participating in the global economy.",
    tags: ["Remote Work", "Cultural Identity", "Work-Life Balance", "Global Teams"],
    readTime: "5 min read",
    featured: false
  },
  {
    id: 6,
    title: "The Art of Technical Communication Across Cultures",
    author: "Fatima Diallo",
    role: "Senior Data Scientist at Netflix",
    location: "Los Angeles, CA",
    category: "Communication",
    excerpt: "Learning to communicate complex technical concepts across cultural boundaries and build understanding in diverse teams.",
    fullStory: "Coming from Senegal to work in Silicon Valley, I quickly learned that technical expertise alone isn't enough. The ability to communicate complex ideas across cultural boundaries became my superpower...",
    culturalWisdom: "In Wolof, we say 'Nanga def' - 'How are you doing?' This simple greeting reminds us that understanding context is more important than just delivering information.",
    tags: ["Communication", "Cultural Intelligence", "Data Science", "Team Collaboration"],
    readTime: "6 min read",
    featured: false
  }
];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const categories = [
    { value: 'all', label: 'All Stories', icon: '📚' },
    { value: 'Career Journey', label: 'Career Journey', icon: '🚀' },
    { value: 'Leadership', label: 'Leadership', icon: '👑' },
    { value: 'Entrepreneurship', label: 'Entrepreneurship', icon: '💡' },
    { value: 'Mentorship', label: 'Mentorship', icon: '🎓' },
    { value: 'Remote Work', label: 'Remote Work', icon: '🏠' },
    { value: 'Communication', label: 'Communication', icon: '💬' }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? mockStories 
    : mockStories.filter(story => story.category === selectedCategory);

  const featuredStories = mockStories.filter(story => story.featured);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white flex items-center justify-center gap-2">
            <span className="text-5xl">🕷️</span>
            Success Stories
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover inspiring journeys of African tech professionals, learn from their experiences, 
            and find wisdom that connects culture with innovation.
          </p>
        </div>

        {/* Featured Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>⭐</span>
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredStories.map(story => (
              <Card key={story.id} className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">{story.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        By {story.author} • {story.role}
                      </CardDescription>
                      <div className="text-sm text-gray-400 mt-1">
                        📍 {story.location} • ⏱️ {story.readTime}
                      </div>
                    </div>
                    <Badge className="bg-[#FFD700] text-black">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{story.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => setSelectedStory(story)}
                    className="w-full bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold"
                  >
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">All Stories</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.value 
                    ? 'bg-[#FFD700] text-black hover:bg-[#FFA500]' 
                    : 'border-gray-600 text-gray-300 hover:border-[#FFD700] hover:text-[#FFD700]'
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map(story => (
            <Card key={story.id} className="bg-gray-800/50 border-gray-600 hover:border-[#FFD700]/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-lg mb-2">{story.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  By {story.author} • {story.role}
                </CardDescription>
                <div className="text-sm text-gray-400 mt-1">
                  📍 {story.location} • ⏱️ {story.readTime}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">{story.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {story.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  onClick={() => setSelectedStory(story)}
                  size="sm"
                  className="w-full bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold"
                >
                  Read Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Modal */}
        {selectedStory && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedStory.title}</h2>
                    <p className="text-gray-300">
                      By {selectedStory.author} • {selectedStory.role}
                    </p>
                    <p className="text-sm text-gray-400">
                      📍 {selectedStory.location} • ⏱️ {selectedStory.readTime}
                    </p>
                  </div>
                  <Button 
                    onClick={() => setSelectedStory(null)}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-[#FFD700] hover:text-[#FFD700]"
                  >
                    ✕
                  </Button>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedStory.fullStory}</p>
                  
                  <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6 rounded-lg border border-[#FFD700]/20">
                    <h3 className="text-lg font-bold text-[#FFD700] mb-2 flex items-center gap-2">
                      <span>🕷️</span>
                      Cultural Wisdom
                    </h3>
                    <p className="text-gray-300 italic">&quot;{selectedStory.culturalWisdom}&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🕷️</div>
              <h3 className="text-xl font-bold text-white mb-2">Share Your Story</h3>
              <p className="text-gray-400 mb-4">
                Have an inspiring journey to share? Your story could help others navigate their own paths 
                in tech while staying connected to their cultural roots.
              </p>
              <Button className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-6 py-2">
                Submit Your Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
