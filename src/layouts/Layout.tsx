import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return <div>
        <Navbar />
        <div className={'min-h-dvh'}>
            <Outlet />
        </div>
        <Footer />
    </div>
}

export default Layout;