import Navbar from "../components/common/Navbar/Navbar";
import Home from "../pages/HomePage/Home";

export default function MainLayout() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div>
    </>)
}
