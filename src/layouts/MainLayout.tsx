import React from 'react';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden font-sans">
      <TheHeader />

      {/* Main Content Area */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      <TheFooter />
    </div>
  );
}
