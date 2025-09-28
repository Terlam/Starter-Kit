'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';

interface CommunityMember {
  id: number;
  name: string;
  role: string;
  location: string;
  expertise: string[];
  experience: string;
  lookingFor: string;
  avatar: string;
  isOnline: boolean;
}

const mockMembers: CommunityMember[] = [
  {
    id: 1,
    name: "Aisha Okafor",
    role: "Senior Software Engineer",
    location: "Lagos, Nigeria",
    expertise: ["React", "Node.js", "AWS", "Leadership"],
    experience: "8+ years",
    lookingFor: "Mentorship opportunities",
    avatar: "👩🏾‍💻",
    isOnline: true
  },
  {
    id: 2,
    name: "Kwame Asante",
    role: "Product Manager",
    location: "Accra, Ghana",
    expertise: ["Product Strategy", "User Research", "Agile"],
    experience: "6+ years",
    lookingFor: "Technical mentorship",
    avatar: "👨🏾‍💼",
    isOnline: false
  },
  {
    id: 3,
    name: "Fatima Diallo",
    role: "Data Scientist",
    location: "Dakar, Senegal",
    expertise: ["Python", "Machine Learning", "Statistics"],
    experience: "5+ years",
    lookingFor: "Career guidance",
    avatar: "👩🏾‍🔬",
    isOnline: true
  },
  {
    id: 4,
    name: "Tunde Adebayo",
    role: "DevOps Engineer",
    location: "London, UK",
    expertise: ["Docker", "Kubernetes", "CI/CD", "Cloud"],
    experience: "7+ years",
    lookingFor: "Mentoring others",
    avatar: "👨🏾‍🔧",
    isOnline: true
  },
  {
    id: 5,
    name: "Naledi Mokone",
    role: "UX Designer",
    location: "Johannesburg, South Africa",
    expertise: ["Figma", "User Research", "Design Systems"],
    experience: "4+ years",
    lookingFor: "Technical skills",
    avatar: "👩🏾‍🎨",
    isOnline: false
  },
  {
    id: 6,
    name: "Omar Hassan",
    role: "Startup Founder",
    location: "Nairobi, Kenya",
    expertise: ["Business Strategy", "Fundraising", "Leadership"],
    experience: "10+ years",
    lookingFor: "Technical co-founder",
    avatar: "👨🏾‍🚀",
    isOnline: true
  }
];

export default function CommunityPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { value: 'all', label: 'All Members', icon: '👥' },
    { value: 'mentors', label: 'Mentors', icon: '🎓' },
    { value: 'mentees', label: 'Mentees', icon: '🌱' },
    { value: 'online', label: 'Online Now', icon: '🟢' }
  ];

  const filteredMembers = mockMembers.filter(member => {
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'mentors' && member.lookingFor === 'Mentoring others') ||
      (selectedFilter === 'mentees' && member.lookingFor !== 'Mentoring others') ||
      (selectedFilter === 'online' && member.isOnline);
    
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white flex items-center justify-center gap-2">
            <span className="text-5xl">🕷️</span>
            Community Network
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Connect with African tech professionals, find mentors, and build meaningful relationships 
            that span across the diaspora. Like Ananse&apos;s web, we&apos;re all connected.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by name, role, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600 focus:border-[#FFD700] focus:outline-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <Button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedFilter === filter.value 
                    ? 'bg-[#FFD700] text-black hover:bg-[#FFA500]' 
                    : 'border-gray-600 text-gray-300 hover:border-[#FFD700] hover:text-[#FFD700]'
                }`}
              >
                <span>{filter.icon}</span>
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#FFD700]">{mockMembers.length}</div>
              <div className="text-sm text-gray-400">Total Members</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#FFD700]">{mockMembers.filter(m => m.isOnline).length}</div>
              <div className="text-sm text-gray-400">Online Now</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#FFD700]">{mockMembers.filter(m => m.lookingFor === 'Mentoring others').length}</div>
              <div className="text-sm text-gray-400">Available Mentors</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#FFD700]">6</div>
              <div className="text-sm text-gray-400">Countries</div>
            </CardContent>
          </Card>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map(member => (
            <Card key={member.id} className="bg-gray-800/50 border-gray-600 hover:border-[#FFD700]/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{member.avatar}</div>
                    <div>
                      <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-gray-400">{member.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${member.isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                    <span className="text-xs text-gray-400">
                      {member.isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  📍 {member.location} • ⏰ {member.experience}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Looking for:</h4>
                  <p className="text-sm text-gray-400">{member.lookingFor}</p>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold">
                    Connect
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-[#FFD700] hover:text-[#FFD700]">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🕷️</div>
            <h3 className="text-xl font-semibold text-white mb-2">No members found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search or filters to find community members.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
              }}
              className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🕷️</div>
              <h3 className="text-xl font-bold text-white mb-2">Join the Web</h3>
              <p className="text-gray-400 mb-4">
                Ready to connect with like-minded professionals and grow your network? 
                Join our community and start building meaningful relationships today.
              </p>
              <Button className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold px-6 py-2">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
