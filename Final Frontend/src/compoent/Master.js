import Header from "./Header";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

export default function Master() {
    return (
        <>
            <Header />
            <div className="my100h">
            <Outlet />  {/* calls child component / slaves component  */}
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}