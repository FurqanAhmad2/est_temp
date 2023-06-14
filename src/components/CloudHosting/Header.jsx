import Navbar from '@components/Navbars/CloudNav';
import TopNav from '@components/Navbars/CloudNav/TopNav';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="style-9">
      <TopNav />
      <Navbar />
      <div className="navs-container">
        <div className="hosting-links py-4 text-white text-center">
          <div className="container">
            <div className="links">
              <Link href="#section2" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Domain </Link>
              <Link href="#section3" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Web Hosting </Link>
              <Link href="/page-services-app#section4" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Web developement </Link>
              <Link href="/page-services-app#section5" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Graphic Designings </Link>
              <Link href="/page-services-app" className="hover-darkBlue"> Social Media Marketing </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="info">
                <h6> ABOUT US </h6>
                <h1> ESTIFIX Provides <span>  Web Services </span> </h1>
                <ul>
                  <li>Domain And Hosting </li>
                  <li> Website Design And Development </li>
                  <li> Graphics Designing, SEO, and Social Media Services</li>
                </ul>
                <Link href="#" className="butn border-2 border-white border rounded-3 text-white mt-40">
                  <span> Get Started Now </span>
                </Link>
              </div>
            </div>
           
            <div className="col-lg-7" >
              <div className="img" >
                <img src="/assets/img/header/header9.svg" alt="" />
   
              </div>
             
            </div>
          </div>
          
        </div>
      </div>
    
    </header>
  )
}

export default Header