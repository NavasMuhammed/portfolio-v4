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
            <section className='pt-36 px-100 max-[600px]:p-10 max-[600px]:w-max max-[600px]:m-auto'>{children}</section>
            <div className='cursor fixed rounded-lg top-0 left-0 right-0 bottom-0' ></div>
            <div className='cursor-outer fixed  top-0 left-0 right-0 bottom-0' ></div>
        </main>
    );
};

export default MainLayout;