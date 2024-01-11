'use client'
import React, { ReactNode, useEffect } from 'react';
import NavBar from '../components/navbar/navbar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursorOut = document.querySelector('.cursor-outer');

        const moveCursor = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            if (cursor && cursorOut) {
                const cursor = document.querySelector('.cursor') as HTMLElement;
                cursor.style.transform = `translate(${x}px, ${y}px)`;
                const cursorOut = document.querySelector('.cursor-outer') as HTMLElement;
                cursorOut.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <main>
            <NavBar />
            <section className='pt-40 px-4 lg:pt-36 lg:px-100 '>{children}</section>
            <div className='cursor fixed rounded-lg top-0 left-0 right-0 bottom-0' ></div>
            <div className='cursor-outer fixed  top-0 left-0 right-0 bottom-0' ></div>
        </main>
    );
};

export default MainLayout;
