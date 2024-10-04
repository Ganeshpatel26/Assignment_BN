import React from 'react';
import './Footer.css'; // Custom styles for any specific styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Collapse } from 'reactstrap'; // Import Collapse from Reactstrap

const Footer = () => {
  const [isOpenPrograms, setIsOpenPrograms] = React.useState(true);
  const [isOpenAbout, setIsOpenAbout] = React.useState(false);
  const [isOpenHealthReads, setIsOpenHealthReads] = React.useState(false);
  const [isOpenPartnership, setIsOpenPartnership] = React.useState(false);
  const [isOpenHelpLegal, setIsOpenHelpLegal] = React.useState(false);

  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Description Section */}
          <div className="col-lg-3 col-md-4 mb-4 text-start">
            <div className="footer-logo">
              <h2 className="text-uppercase">BN</h2>
            </div>
            <p className="small mb-3">
              Lorem ipsum dolor sit amet consectetur. Laoreet amet platea tellus sed urna. Nulla morbi quis sed ultrices justo.
            </p>
            <p className="mb-2">
              <i className="fas fa-phone-alt me-2"></i> +91 37646 78249
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> info@balancenutrition.in
            </p>
            {/* Social Icons */}
            <div className="social-icons mt-3">
              <a href="/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-instagram"></i></a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-linkedin"></i></a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-twitter"></i></a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-facebook"></i></a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-pinterest"></i></a>
            </div>
            {/* Login and Register Links */}
            <div className="mt-3 mb-3">
              <a href="/" className="text-light me-3">Login</a>
              <a href="/" className="text-light">Register</a>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-lg-9 col-md-8 mb-4 text-start">
            <div className="row">
              {/* Programs Links */}
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 
                  className="text-uppercase mb-3 d-flex align-items-center" 
                  onClick={() => setIsOpenPrograms(!isOpenPrograms)} 
                  style={{ cursor: 'pointer' }}
                >
                  Programs
                  <i className={`ms-2 ${isOpenPrograms ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                </h5>
                {/* Show all links on desktop, collapsible on mobile */}
                <Collapse isOpen={isOpenPrograms} className="d-md-none">
                  <ul className="list-unstyled">
                    <li><a href="/">Beat PCOS</a></li>
                    <li><a href="/">Body Transformation</a></li>
                    <li><a href="/">Plateau Breaker</a></li>
                    <li><a href="/">Poshan</a></li>
                    <li><a href="/">Reform Intermittent</a></li>
                    <li><a href="/">ReNeU</a></li>
                    <li><a href="/">Weight Loss-Pro</a></li>
                    <li><a href="/">Weight Loss +</a></li>
                    <li><a href="/">Cleanse Plan</a></li>
                    <li><a href="/">Active</a></li>
                  </ul>
                </Collapse>
                <ul className="list-unstyled d-none d-md-block">
                  <li><a href="/">Beat PCOS</a></li>
                  <li><a href="/">Body Transformation</a></li>
                  <li><a href="/">Plateau Breaker</a></li>
                  <li><a href="/">Poshan</a></li>
                  <li><a href="/">Reform Intermittent</a></li>
                  <li><a href="/">ReNeU</a></li>
                  <li><a href="/">Weight Loss-Pro</a></li>
                  <li><a href="/">Weight Loss +</a></li>
                  <li><a href="/">Cleanse Plan</a></li>
                  <li><a href="/">Active</a></li>
                </ul>
              </div>

              {/* Other Links with icons */}
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 
                  className="text-uppercase mb-3 d-flex align-items-center"
                  onClick={() => setIsOpenAbout(!isOpenAbout)} 
                  style={{ cursor: 'pointer' }}
                >
                  About Balance
                  <i className={`ms-2 ${isOpenAbout ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                </h5>
                <Collapse isOpen={isOpenAbout} className="d-md-none">
                  <ul className="list-unstyled">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Our Journey</a></li>
                    <li><a href="/">Meet Khyati</a></li>
                    <li><a href="/">How We Work</a></li>
                    <li><a href="/">E-Kit</a></li>
                    <li><a href="/">Work With Us</a></li>
                  </ul>
                </Collapse>
                <ul className="list-unstyled d-none d-md-block">
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Our Journey</a></li>
                  <li><a href="/">Meet Khyati</a></li>
                  <li><a href="/">How We Work</a></li>
                  <li><a href="/">E-Kit</a></li>
                  <li><a href="/">Work With Us</a></li>
                </ul>
              </div>

              {/* Health Reads */}
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 
                  className="text-uppercase mb-3 d-flex align-items-center"
                  onClick={() => setIsOpenHealthReads(!isOpenHealthReads)} 
                  style={{ cursor: 'pointer' }}
                >
                  Health Reads
                  <i className={`ms-2 ${isOpenHealthReads ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                </h5>
                <Collapse isOpen={isOpenHealthReads} className="d-md-none">
                  <ul className="list-unstyled">
                    <li><a href="/">Khyati's Article</a></li>
                    <li><a href="/">Superfoods</a></li>
                    <li><a href="/">Women's Health</a></li>
                    <li><a href="/">Diabetes</a></li>
                    <li><a href="/">Clinical reads</a></li>
                    <li><a href="/">Pregnancy and weight loss</a></li>
                  </ul>
                </Collapse>
                <ul className="list-unstyled d-none d-md-block">
                  <li><a href="/">Khyati's Article</a></li>
                  <li><a href="/">Superfoods</a></li>
                  <li><a href="/">Women's Health</a></li>
                  <li><a href="/">Diabetes</a></li>
                  <li><a href="/">Clinical reads</a></li>
                  <li><a href="/">Pregnancy and weight loss</a></li>
                </ul>
              </div>

              {/* Partnership */}
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 
                  className="text-uppercase mb-3 d-flex align-items-center"
                  onClick={() => setIsOpenPartnership(!isOpenPartnership)} 
                  style={{ cursor: 'pointer' }}
                >
                  Partnership
                  <i className={`ms-2 ${isOpenPartnership ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                </h5>
                <Collapse isOpen={isOpenPartnership} className="d-md-none">
                  <ul className="list-unstyled">
                    <li><a href="/">Franchisees</a></li>
                    <li><a href="/">Corporate Wellness</a></li>
                    <li><a href="/">Affiliate Program</a></li>
                  </ul>
                </Collapse>
                <ul className="list-unstyled d-none d-md-block">
                  <li><a href="/">Franchisees</a></li>
                  <li><a href="/">Corporate Wellness</a></li>
                  <li><a href="/">Affiliate Program</a></li>
                </ul>
              </div>

              {/* Help & Legal */}
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 
                  className="text-uppercase mb-3 d-flex align-items-center"
                  onClick={() => setIsOpenHelpLegal(!isOpenHelpLegal)} 
                  style={{ cursor: 'pointer' }}
                >
                  Help & Legal
                  <i className={`ms-2 ${isOpenHelpLegal ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
                </h5>
                <Collapse isOpen={isOpenHelpLegal} className="d-md-none">
                  <ul className="list-unstyled">
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Terms & Privacy Policy</a></li>
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">Disclaimer</a></li>
                    <li><a href="/">User Agreement</a></li>
                  </ul>
                </Collapse>
                <ul className="list-unstyled d-none d-md-block">
                  <li><a href="/">Contact Us</a></li>
                  <li><a href="/">Terms & Privacy Policy</a></li>
                  <li><a href="/">FAQs</a></li>
                  <li><a href="/">Disclaimer</a></li>
                  <li><a href="/">User Agreement</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-start pt-4">
          <p className="small mb-0">© 2014 - 2023. www.balancenutrition.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
