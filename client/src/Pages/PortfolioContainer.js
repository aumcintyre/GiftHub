import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
import Header from '../Components/Header';
import Home from './Home'
import Footer from '../Components/Footer'
import CreateExchange from '../Components/CreateExchange'
import JoinExchange from '../Components/JoinExchange'
import Gallery from '../Components/Gallery';
import ProfilePage from '../Components/ProfilePage';
import Exchange from '../Components/Exchange';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    
    const { loading, data }  = useQuery(GET_ME);
    const userData = data?.me || []
    

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Login') {
            return <LoginForm />;
        }
        if (currentPage === 'signUp') {
            return <SignupForm />;
        }
        if (currentPage === 'createExchange') {
            return <CreateExchange />;
        }
        if (currentPage === 'joinExchange') {
            return <JoinExchange />;
        }
        if (currentPage === 'exchange') {
            return <Exchange />;
        }
        //If you aren't logged in, should you still see this page in the header?
        if (currentPage === 'profilepage') {
             return <ProfilePage user={userData}/>;
        }
       
        // if (currentPage === 'Contact') {
        //     return <Contact resumeInfo={resumeInfo} />;
        // }
        // if (currentPage === 'Resume') {
        //     return <Resume resumeInfo={resumeInfo} />;
        // }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            {/*   <Footer/> */}

            {/* <Footer resumeInfo={resumeInfo} /> */}
        </div>
    );
}