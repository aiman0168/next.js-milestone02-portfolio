import React from 'react';

const DownloadResume: React.FC = () => {
  return (
    <div className="mt-6">
      <a
        href="/cv.pdf"
        download
        className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;