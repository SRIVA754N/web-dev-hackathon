// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dropbox</h3>
            <ul className="space-y-2">
              <li>Desktop app</li>
              <li>Mobile app</li>
              <li>Integrations</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Security</li>
              <li>Early access</li>
              <li>Templates</li>
              <li>Free tools</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>Plus</li>
              <li>Professional</li>
              <li>Business</li>
              <li>Enterprise</li>
              <li>Dash</li>
              <li>Reclaim.ai</li>
              <li>Dropbox Sign</li>
              <li>DocSend</li>
              <li>Plans</li>
              <li>Product updates</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>Send large files</li>
              <li>Send long videos</li>
              <li>Cloud photo storage</li>
              <li>Secure file transfer</li>
              <li>Password manager</li>
              <li>Cloud backup</li>
              <li>Edit PDFs</li>
              <li>Electronic signatures</li>
              <li>Screen recorder</li>
              <li>Convert to PDF</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Help center</li>
              <li>Contact us</li>
              <li>Privacy & terms</li>
              <li>Cookie policy</li>
              <li>Cookies & CCPA preferences</li>
              <li>AI principles</li>
              <li>Sitemap</li>
              <li>Learning resources</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Customer stories</li>
              <li>Resources library</li>
              <li>Developers</li>
              <li>Community forums</li>
              <li>Referrals</li>
              <li>Reseller partners</li>
              <li>Integration partners</li>
              <li>Find a partner</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Jobs</li>
              <li>Investor relations</li>
              <li>ESG</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Replace with your actual social media icons or SVGs */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Replace with your social media icon path */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.5a2 2 0 012 2v1h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-1z"
                />
              </svg>
            </a>
            {/* Add more social media icons here */}
          </div>
          <div className="text-sm text-gray-400">
            {/* Add copyright or other text here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;