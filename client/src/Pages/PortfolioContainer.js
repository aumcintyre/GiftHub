import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
import Header from '../Components/Header';
import Home from './Home';
import Footer from '../Components/Footer';
import CreateExchange from '../Components/CreateExchange';
import JoinExchange from '../Components/JoinExchange';
import ProfilePage from '../Components/ProfilePage';
import Exchange from '../Components/Exchange';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const { loading, data } = useQuery(GET_ME);
    console.log("port container line 21 data:", data)
    const userData = data?.me || []
    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home currentPage={currentPage} handlePageChange={handlePageChange} />;
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
            return <ProfilePage user={userData} />;
        }


    };


    return (
        <>

            <Header currentPage={currentPage} handlePageChange={handlePageChange} />

            <div>
                {renderPage()}
            </div>
            <Footer />
        </>
    );
}