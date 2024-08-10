import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>)
}
