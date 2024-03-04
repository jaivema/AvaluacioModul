import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';

export default function Layout () {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}