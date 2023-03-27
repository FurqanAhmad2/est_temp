import Header from '@components/CloudHosting/Header';import Navbar from '@components/Navbars/CloudNav';


const Generalheader = () => {
  return (
    <header className="style-9">
   
      <Navbar />
      <div className="navs-container">
        <div className="hosting-links py-4 text-white text-center">
          <div className="container">
            <div className="links">
              <a href="#" className="fw-bold pe-3 me-3 border-end border-1 brd-light hover-darkBlue"> Domain </a>
              <a href="#" className="me-4 hover-darkBlue"> Web Hosting </a>
              <a href="#" className="me-4 hover-darkBlue"> Windows Hosting </a>
              <a href="#" className="me-4 hover-darkBlue"> Web developement </a>
              <a href="#" className="me-4 hover-darkBlue"> Graphic Designing </a>
              <a href="#" className="hover-darkBlue"> Social Media Marketing </a>
              
            </div>
          </div>
        </div>
      </div>
   
    </header>
  )
}

export default Generalheader;