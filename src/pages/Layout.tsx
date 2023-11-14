import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;

