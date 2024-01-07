import React, { ReactNode } from 'react';
import NavBar from '../components/navbar/navbar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main>
            <NavBar />
            <section>{children}</section>
        </main>
    );
};

export default MainLayout;
