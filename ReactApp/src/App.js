import './App.css';
import Home from './Home';
import About from './About';
import Cars from './Car';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CarDetails from './CarDetails';
import Compare from './Compare';

function App()
{
  return (<>

  <Router>
  <nav className="navbar bg-body-tertiary fixed-top" style={{padding: 0, color: "black"}}>
    <div className="container-fluid" style={{padding: "10px 10px 10px 20px", backgroundColor: "white"}}>

        <a className="navbar-brand" href="/">  
            AUTOHUB
        </a>

          <div id="option">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/about' className="nav-link">About</Link>
            <Link to='/cars' className="nav-link">Cars</Link>
            <Link to='/compare' className="nav-link">Compare</Link>
          </div>

        <button id="menuBtn" className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars fa-lg" style={{color: "black"}}></i>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header" style={{padding: "14.5px"}}>
                <h5 className="offcanvas-title ms-auto" id="offcanvasNavbarLabel" style={{color: "black"}}><i className="fa-solid fa-car" style={{color: "black"}}></i>&emsp;AutoHub</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr style={{marginTop: 0}}/>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/about' className="nav-link">About</Link>
                    </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
  </nav>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cars' element={<Cars/>}/>
    <Route path='/cars/:id' element={<CarDetails/>}/>
    <Route path='/compare' element={<Compare/>}/>
  </Routes>

  <div style={{backgroundColor: "#f5f5f5", padding: "20px"}}>
    <div style={{display: "flex", justifyContent: "center", padding: "10px", fontWeight: "500", color: "#414141"}}>
      <Link to='/' className="nav-link">Home</Link>
      <Link to='/about' className="nav-link">About</Link>
      <Link to='/cars' className="nav-link">Cars</Link>
      <Link to='/compare' className="nav-link">Compare</Link>
    </div>
    
    <hr/>

    <div style={{ padding: "40px", textAlign: "center"}}>
      <p>Discover your dream ride on our comprehensive car platform. Explore a vast selection of vehicles, compare prices,<br/>and find the perfect match for your needs. Your journey to the ideal car starts here.</p>

      <div style={{marginTop: "60px"}}>
        <a href="https://www.facebook.com" target="blank"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.google.co.in" target="blank"><i className="fa-brands fa-google"></i></a>
        <a href="https://www.instagram.com/darshkthakkar" target="blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/darshkthakkar/" target="blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/DarshKThakkar" target="blank"><i className="fa-brands fa-github"></i></a>
      </div>
    </div>
  </div >

  <div style={{backgroundColor: "#eaeaea", padding: "20px", textAlign: "center", color: "#414141"}}>
    &copy; 2024 Copyright&emsp;AutoHub.com
  </div>
  </Router>


  </>
  );
}

export default App;