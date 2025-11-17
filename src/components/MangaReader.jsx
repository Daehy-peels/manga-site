// src/components/MangaReader.jsx
import React from 'react';

// A simple mock list of pages for now (you'll replace this with real data later)
const mockPages = [
    'https://via.placeholder.com/800x1200?text=Page+1',
    'https://via.placeholder.com/800x1200?text=Page+2',
    'https://via.placeholder.com/800x1200?text=Page+3',
];

const MangaReader = ({ pages = mockPages }) => {
  return (
    <div className="bg-base-300 min-h-screen">
      {/* Chapter Navigation Bar (DaisyUI classes) */}
      <nav className="navbar bg-neutral text-neutral-content sticky top-0 z-10 shadow-lg p-2 justify-center">
        <h1 className="text-xl font-bold">Manga Chapter Title</h1>
      </nav>

      {/* Manga Pages Display */}
      <main className="flex flex-col items-center py-4">
        {pages.map((imageUrl, index) => (
          <div key={index} className="w-full max-w-4xl py-1">
            <img 
              src={imageUrl} 
              alt={`Manga Page ${index + 1}`} 
              loading="lazy"
              className="w-full h-auto object-contain shadow-xl"
            />
          </div>
        ))}
      </main>

      {/* Simple Footer Navigation */}
      <footer className="w-full flex justify-center py-4 space-x-4 bg-base-200">
        <button className="btn btn-primary">Prev Chapter</button>
        <button className="btn btn-primary">Next Chapter</button>
      </footer>
    </div>
  );
};

export default MangaReader;