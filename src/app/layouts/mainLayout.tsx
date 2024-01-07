import React, { ReactNode } from 'react';
import NavBar from '../components/navbar/navbar';

interface MainLayoutProps {
    children: ReactNode
}


const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main>
            <NavBar />
            <section className='pt-36 px-100' >{children}</section>
        </main>
    );
};

export default MainLayout;
