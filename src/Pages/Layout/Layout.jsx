import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Layout = () => {
    return (
        <div className="w-full">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;