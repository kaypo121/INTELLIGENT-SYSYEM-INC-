import { useState } from 'react';
import { Navigation, type Page } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChristmasDecorations } from './components/ChristmasDecorations';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { SolutionsPage } from './components/pages/SolutionsPage';
import { IndustriesPage } from './components/pages/IndustriesPage';
import { TechnologyPage } from './components/pages/TechnologyPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { CareersPage } from './components/pages/CareersPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'solutions':
        return <SolutionsPage onNavigate={setCurrentPage} />;
      case 'industries':
        return <IndustriesPage onNavigate={setCurrentPage} />;
      case 'technology':
        return <TechnologyPage onNavigate={setCurrentPage} />;
      case 'resources':
        return <ResourcesPage onNavigate={setCurrentPage} />;
      case 'careers':
        return <CareersPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ChristmasDecorations />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
