import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function MasterAdmin() {
    return (
        <>
            <AdminHeader />
            <div className="my100h">
            <Outlet />  {/* calls child component / slaves component  */}
            </div>
            <AdminFooter />
            <ToastContainer />
        </>
    );
}