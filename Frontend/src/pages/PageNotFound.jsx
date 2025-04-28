import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8 animate-fadeIn">
      <section className="text-center max-w-xl">
        {/* Optional Icon */}
        <div className="mb-6 flex justify-center">
          <svg
            className="w-20 h-20 text-indigo-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <p className="text-sm font-semibold text-indigo-600 tracking-wide">404 error</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/main-dashboard"
            aria-label="Go to home page"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 transition"
          >
            Go Home
          </Link>
          {/* <Link
            to="/contact"
            aria-label="Contact support"
            className="text-sm font-medium text-gray-800 hover:text-indigo-600 transition underline"
          >
            Contact Support →
          </Link> */}
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
