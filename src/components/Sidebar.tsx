import React from 'react';
import { Home, Info, FileText, AlertTriangle } from 'lucide-react';
import { NavigationSection } from '../types';

interface SidebarProps {
  activeSection: NavigationSection;
  setActiveSection: (section: NavigationSection) => void;
}

const navigationItems = [
  { id: 'home' as NavigationSection, label: 'Home', icon: Home },
  { id: 'about' as NavigationSection, label: 'About', icon: Info },
  { id: 'instructions' as NavigationSection, label: 'Instructions', icon: FileText },
  { id: 'disclaimer' as NavigationSection, label: 'Disclaimer', icon: AlertTriangle },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-100 min-h-screen">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};