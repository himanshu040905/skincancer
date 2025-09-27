import React from 'react';
import { Home, Info, FileText, AlertTriangle, Menu, X } from 'lucide-react';
import { NavigationSection } from '../types';

interface MobileNavigationProps {
  activeSection: NavigationSection;
  setActiveSection: (section: NavigationSection) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navigationItems = [
  { id: 'home' as NavigationSection, label: 'Home', icon: Home },
  { id: 'about' as NavigationSection, label: 'About', icon: Info },
  { id: 'instructions' as NavigationSection, label: 'Instructions', icon: FileText },
  { id: 'disclaimer' as NavigationSection, label: 'Disclaimer', icon: AlertTriangle },
];

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  activeSection,
  setActiveSection,
  isOpen,
  setIsOpen
}) => {
  const handleItemClick = (section: NavigationSection) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <div className="sm:hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 z-40 w-64 h-full bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-16 p-4">
          <nav>
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700'
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
        </div>
      </div>
    </div>
  );
};