// app/admin/layout.tsx
import React from "react";
import "@/styles/globals.scss"; // Your global styles

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="admin-container">
          <nav className="admin-nav">
            <h1>LandVille Admin</h1>
            <ul>
              <li><a href="/admin/home">Home</a></li>
              <li><a href="/admin/about">About</a></li>
              <li><a href="/admin/services">Services</a></li>
              <li><a href="/admin/blog">Blog</a></li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}