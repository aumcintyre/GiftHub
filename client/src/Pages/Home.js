import React, { useState } from 'react';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home resumeInfo={resumeInfo} />;
        }
        if (currentPage === 'About') {
            return <About resumeInfo={resumeInfo} />;
        }
        if (currentPage === 'Projects') {
            return <Projects resumeInfo={resumeInfo} />;
        }
        if (currentPage === 'Contact') {
            return <Contact resumeInfo={resumeInfo} />;
        }
        if (currentPage === 'Resume') {
            return <Resume resumeInfo={resumeInfo} />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer resumeInfo={resumeInfo} />
        </div>
    );
}