import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @file SidebarGraphic.tsx
 * @description This component renders the left sidebar for the login page, featuring
 * the company logo and an abstract background graphic. It is designed to be
 * displayed on larger screens and hidden on mobile devices.
 */

interface SidebarGraphicProps {
  /**
   * Optional className to apply to the root element for custom styling.
   */
  className?: string;
}

/**
 * A presentational component for the sidebar graphic panel.
 * It uses absolute positioning to layer the logo on top of a large, decorative SVG.
 * The colors are sourced from the Tailwind CSS configuration.
 */
const SidebarGraphic: React.FC<SidebarGraphicProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        'hidden lg:block bg-card relative overflow-hidden h-screen',
        className
      )}
    >
      {/* Logo positioned at the top-left corner. z-10 ensures it's above the graphic. */}
      <div className="absolute top-12 left-12 z-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          ASCENDION
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          engineering the future.
        </p>
      </div>

      {/* Abstract background graphic container */}
      {/* Positioned absolutely and oversized to create a dynamic, cropped effect. */}
      <div className="absolute -bottom-52 -right-32 w-[55rem] h-[55rem]">
        <svg
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-95"
        >
          {/* Blue curved shape using the 'sidebar' color from tailwind.config.ts */}
          <path
            d="M 800 800 L 800 200 C 500 300, 300 650, 0 800 Z"
            className="fill-sidebar"
          />
          {/* White ribbon shape that overlaps the blue shape */}
          <path
            d="M -50 550 C 250 500, 550 650, 850 600 L 850 750 C 550 850, 250 700, -50 750 Z"
            fill="white"
          />
        </svg>
      </div>
    </aside>
  );
};

export default SidebarGraphic;
