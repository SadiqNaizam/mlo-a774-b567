import React from 'react';
import SidebarGraphic from '../components/layout/SidebarGraphic';
import LoginCard from '../components/Login/LoginCard';

/**
 * @file Index.tsx
 * @description The main entry point and root page for the application, displaying the login screen.
 * It uses a responsive two-column layout on larger screens, featuring a branding
 * graphic on the left and the login card on the right. On smaller screens, it
 * displays only the login card.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/*
        The SidebarGraphic component is responsible for the left-side branding.
        It is designed to be hidden on screens smaller than 'lg' (1024px)
        as defined within the component itself.
      */}
      <SidebarGraphic />

      {/*
        The main content area holds the login form. It's always visible.
        On 'lg' screens, it takes up the second column of the grid.
        On smaller screens, it takes up the full width as the only grid item.
      */}
      <main className="flex items-center justify-center bg-background p-6 sm:p-12">
        <div className="w-full max-w-sm">
          {/*
            LoginCard is the organism containing all login-related UI elements.
            This component is assumed to be defined elsewhere and imported.
          */}
          <LoginCard />
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
