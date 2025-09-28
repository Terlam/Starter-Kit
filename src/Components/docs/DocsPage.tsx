'use client';

import { useState } from 'react';
import { ExternalLink, Code, Palette, Database, Zap, Globe, ChevronDown, ChevronRight } from 'lucide-react';

export default function DocsPage() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started', 'mvp-blocks']));

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            This is a Next.js 15 Starter Kit designed for rapid MVP development and extension. 
            It comes pre-configured with essential tools and components to help you build and launch 
            your product quickly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Start</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Clone the repository</li>
                <li>2. Install dependencies: <code className="bg-gray-800 px-2 py-1 rounded">npm install</code></li>
                <li>3. Set up environment variables</li>
                <li>4. Run development server: <code className="bg-gray-800 px-2 py-1 rounded">npm run dev</code></li>
              </ol>
            </div>
            
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">What&apos;s Included</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Next.js 15 with App Router</li>
                <li>• TypeScript configuration</li>
                <li>• Firebase authentication</li>
                <li>• Google Gemini AI integration</li>
                <li>• Tailwind CSS styling</li>
                <li>• Shadcn/UI components</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mvp-blocks',
      title: 'MVP Blocks Integration',
      icon: <Code className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#2B6CB0]/10 to-[#38A169]/10 p-6 rounded-lg border border-[#2B6CB0]/20">
            <h3 className="text-xl font-semibold text-white mb-3">MVP Blocks Component Library</h3>
            <p className="text-gray-300 mb-4">
              MVPBlocks is an open-source, developer-focused UI component library specifically designed 
              to accelerate the development and launch of Minimum Viable Products (MVPs). It provides 
              a curated collection of pre-built, responsive, and modern UI components.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a
                href="https://blocks.mvp-subha.me/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2B6CB0] hover:bg-[#1e4a72] text-white px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Documentation
              </a>
              <a
                href="https://blocks.mvp-subha.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Globe className="h-4 w-4" />
                Visit Website
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Installation Methods</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-200 mb-1">CLI Installation</h5>
                  <code className="block bg-gray-800 p-2 rounded text-sm text-gray-300">
                    npx mvpblocks add component-name
                  </code>
                </div>
                <div>
                  <h5 className="font-medium text-gray-200 mb-1">Manual Copy-Paste</h5>
                  <p className="text-sm text-gray-400">Visit the website and copy components directly</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-200 mb-1">Open in v0</h5>
                  <p className="text-sm text-gray-400">Edit and customize components visually</p>
                </div>
              </div>
            </div>

            <div className="bg-[#161B22] p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Extensive component library</li>
                <li>• Pre-styled and responsive</li>
                <li>• Seamless animations</li>
                <li>• Multiple integration methods</li>
                <li>• Customizable and extendable</li>
                <li>• Developer-friendly architecture</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#161B22] p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-4">Available Component Categories</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-200 mb-2">Foundation</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <a href="https://blocks.mvp-subha.me/docs/foundation/colors" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Colors & Theming</a></li>
                  <li>• <a href="https://blocks.mvp-subha.me/docs/guide/installation" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Installation Guide</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-200 mb-2">Components</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <a href="https://blocks.mvp-subha.me/docs/components/basic/buttons" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Buttons</a></li>
                  <li>• <a href="https://blocks.mvp-subha.me/docs/cards/" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Cards</a></li>
                  <li>• <a href="https://blocks.mvp-subha.me/docs/forms/" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Forms</a></li>
                  <li>• <a href="https://blocks.mvp-subha.me/docs/dashboards/" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Dashboards</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-200 mb-2">Creative</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <a href="https://blocks.mvp-subha.me/docs/creative/" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Animations</a></li>
                  <li>• <a href="https://blocks.mvp-subha.me/docs/text-animations/" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Text Effects</a></li>
                  <li>• <a href="https://blocks.mvp-subha.me/docs/grids/" target="_blank" rel="noopener noreferrer" className="text-[#2B6CB0] hover:underline">Grids</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'project-structure',
      title: 'Project Structure',
      icon: <Code className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The starter kit is organized to support rapid development and easy extension. 
            Here&apos;s how the project is structured:
          </p>
          
          <div className="bg-[#161B22] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Directory Structure</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="text-gray-400">src/</div>
              <div className="ml-4 text-gray-300">├── app/ <span className="text-gray-500"># Next.js App Router</span></div>
              <div className="ml-8 text-gray-300">├── api/ <span className="text-gray-500"># API routes</span></div>
              <div className="ml-8 text-gray-300">├── dashboard/ <span className="text-gray-500"># Dashboard page</span></div>
              <div className="ml-8 text-gray-300">├── login/ <span className="text-gray-500"># Auth pages</span></div>
              <div className="ml-8 text-gray-300">├── quiz/ <span className="text-gray-500"># Quiz page</span></div>
              <div className="ml-8 text-gray-300">└── docs/ <span className="text-gray-500"># Documentation</span></div>
              <div className="ml-4 text-gray-300">├── Components/ <span className="text-gray-500"># React components</span></div>
              <div className="ml-8 text-gray-300">├── mvp-blocks/ <span className="text-gray-500"># MVP components</span></div>
              <div className="ml-8 text-gray-300">├── ui/ <span className="text-gray-500"># Shadcn/UI components</span></div>
              <div className="ml-8 text-gray-300">├── layouts/ <span className="text-gray-500"># Layout components</span></div>
              <div className="ml-8 text-gray-300">└── quiz/ <span className="text-gray-500"># Quiz components</span></div>
              <div className="ml-4 text-gray-300">└── lib/ <span className="text-gray-500"># Utilities</span></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'styling',
      title: 'Styling & Theming',
      icon: <Palette className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The starter kit uses a consistent dark theme with Tailwind CSS and supports 
            easy customization through CSS variables and MVP Blocks theming.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Color Palette</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#0D1117] border"></div>
                  <span className="text-sm text-gray-300">Background: #0D1117</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#2B6CB0] border"></div>
                  <span className="text-sm text-gray-300">Primary: #2B6CB0</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#38A169] border"></div>
                  <span className="text-sm text-gray-300">Success: #38A169</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#A0AEC0] border"></div>
                  <span className="text-sm text-gray-300">Muted: #A0AEC0</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Customization</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• CSS variables in globals.css</li>
                <li>• Tailwind CSS utilities</li>
                <li>• MVP Blocks theming</li>
                <li>• Responsive design patterns</li>
                <li>• Dark theme support</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-management',
      title: 'Data & APIs',
      icon: <Database className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The starter kit includes Firebase authentication, Google Gemini AI integration, 
            and mock data for development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Authentication</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Firebase Google OAuth</li>
                <li>• Pre-built login/signup components</li>
                <li>• Authentication state management</li>
                <li>• Protected routes support</li>
              </ul>
            </div>
            
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">AI Integration</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Google Gemini AI API</li>
                <li>• Content generation endpoints</li>
                <li>• Pre-configured API routes</li>
                <li>• Error handling included</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#161B22] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Mock Data</h3>
            <p className="text-sm text-gray-300 mb-3">
              The starter kit includes mock data for development and testing. 
              Located in <code className="bg-gray-800 px-2 py-1 rounded">public/data/data.json</code>
            </p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• User data with profiles and stats</li>
              <li>• Post data with categories and tags</li>
              <li>• Dashboard analytics data</li>
              <li>• Quiz questions and answers</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: <Globe className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The starter kit is ready for deployment to various platforms with 
            pre-configured settings and environment variables.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Recommended Platforms</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Vercel</strong> (Recommended)</li>
                <li>• Netlify</li>
                <li>• Railway</li>
                <li>• Docker</li>
              </ul>
            </div>
            
            <div className="bg-[#161B22] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Environment Setup</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Firebase configuration</li>
                <li>• Google Gemini API key</li>
                <li>• Production domain setup</li>
                <li>• Security headers configured</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Documentation</h1>
          <p className="text-lg text-gray-400">
            Learn how to use and extend the Next.js 15 Starter Kit
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 bg-[#161B22] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 text-[#2B6CB0] hover:text-[#1e4a72] transition-colors"
              >
                {section.icon}
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="bg-[#161B22] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                {expandedSections.has(section.id) ? (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {expandedSections.has(section.id) && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#2B6CB0]/10 to-[#38A169]/10 p-6 rounded-lg border border-[#2B6CB0]/20">
            <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-gray-300 mb-4">
              Check out the MVP Blocks documentation for more components and examples.
            </p>
            <a
              href="https://blocks.mvp-subha.me/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2B6CB0] hover:bg-[#1e4a72] text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Visit MVP Blocks Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
