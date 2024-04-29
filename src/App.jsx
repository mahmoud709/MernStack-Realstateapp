import Navbar from './components/common/Navbar/Navbar';
import Home from './pages/HomePage/Home';
function App() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="home">
        <Home />
      </div>
    </>
  )
}

export default App