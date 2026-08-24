import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollProgressBar from './ScrollProgressBar';

export default function Layout() {
    return (
        <>
            <ScrollProgressBar />
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-light)' }}>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    );
}
