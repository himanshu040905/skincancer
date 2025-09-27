import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileNavigation } from './components/MobileNavigation';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Instructions } from './components/sections/Instructions';
import { Disclaimer } from './components/sections/Disclaimer';
import { NavigationSection } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<NavigationSection>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'instructions':
        return <Instructions />;
      case 'disclaimer':
        return <Disclaimer />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Header */}
      <div className="hidden sm:block">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden sm:block">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8">
          <div className="mt-12 sm:mt-0">
            {renderActiveSection()}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Skin Cancer Classification System. Educational use only.</p>
            <p className="mt-2">
              Always consult with qualified healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;