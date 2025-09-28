'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Badge } from './badge';

interface DashboardDataItem {
  id: number;
  header: string;
  type: string;
  status: string;
  target: string;
  limit: string;
  reviewer: string;
  description: string;
  progress: number;
  category: string;
  priority: string;
}

// 🚀 MVP Blocks Progress Bar - No external dependencies!
const SimpleProgressBar = ({ value, className = "" }: { value: number; className?: string }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div 
      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

const statusColors = {
  'Active': 'bg-green-500',
  'In Progress': 'bg-blue-500',
  'Planning': 'bg-yellow-500',
  'Completed': 'bg-purple-500',
};

const priorityColors = {
  'High': 'bg-red-500',
  'Medium': 'bg-orange-500',
  'Low': 'bg-gray-500',
};

export default function DashboardDataTable() {
  const [data, setData] = useState<DashboardDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
            const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Failed to load dashboard data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error loading dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🕷️</span>
            Career Progress Tracking
          </CardTitle>
          <CardDescription>Loading your mentorship journey...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🕷️</span>
            Career Progress Tracking
          </CardTitle>
          <CardDescription>Error loading data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-red-500 text-center py-8">
            {error}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🕷️</span>
          Career Progress Tracking
        </CardTitle>
        <CardDescription>
          Your mentorship journey and skill development progress with Ananse AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{item.header}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge 
                    className={`text-white ${statusColors[item.status as keyof typeof statusColors] || 'bg-gray-500'}`}
                  >
                    {item.status}
                  </Badge>
                  <Badge 
                    variant="outline"
                    className={`text-xs ${priorityColors[item.priority as keyof typeof priorityColors] || 'bg-gray-500'} text-white`}
                  >
                    {item.priority} Priority
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress: {item.progress}%</span>
                  <span className="text-gray-500">{item.target} / {item.limit} participants</span>
                </div>
                <SimpleProgressBar value={item.progress} className="h-2" />
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Category: {item.category}</span>
                  <span>Led by: {item.reviewer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}