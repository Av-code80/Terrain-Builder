import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <main>{children}</main>
    </html>
  )
}

export default Layout
