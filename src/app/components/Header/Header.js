
import React from "react";
const Header = ({  }) => {
  return (
    <div>
     <header class="header-area">
            <div class="container-fluid">
               <div class="row d_flex">
                  <div class=" col-md-3 col-sm-3">
                     <div class="logo">
                        <a href="index.html">Phalanx</a>
                     </div>
                  </div>
                  <div class="col-md-7 col-sm-9">
                     <div class="navbar-area">
                        <nav class="site-navbar">
                           <ul>
                              <li><a class="active" href="index.html">Home</a></li>
                              <li><a href="about.html">About</a></li>
                              <li><a href="services.html">Services</a></li>
                              <li><a href="testimonial.html">Testimonial</a></li>
                              <li><a href="contact.html">Contact Us</a></li>
                           </ul>
                           <button class="nav-toggler">
                           <span></span>
                           </button>
                        </nav>
                     </div>
                  </div>
                  <div class="col-md-2 d_none">
                     <ul class="email text_align_right">
                        <li><a href="Javascript:void(0)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </header>
    </div>
  );
};
export default Header;
