import React from 'react';
import NavBar from '@/components/NavBar'

function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <>
          <div className="w-full bg-black">
            <NavBar />
          </div>
          {children}
        </>
    );
};

export default ProjectsLayout;
