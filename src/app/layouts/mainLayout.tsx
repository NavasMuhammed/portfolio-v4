'use client'
import { ReactNode, useEffect } from 'react';
import NavBar from '../components/navbar/navbar';
import SettingsPanel from '../components/settings/settingsPanel';

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
        <main className='main-layout mb-3'>
            <NavBar />
            <section className='overflow-hidden pt-28 px-4 lg:pt-36 lg:px-100 sm:overflow-visible'>{children}</section>
            <SettingsPanel />
            <div className='cursor fixed rounded-lg top-0 left-0 right-0 bottom-0' ></div>
            <div className='cursor-outer fixed  top-0 left-0 right-0 bottom-0' ></div>

        </main>
    );
};

export default MainLayout;
