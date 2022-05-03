
import React from "react";
import styled from "styled-components";
const StyledFooter = styled.div`
`;
const StyledSocialLink = styled.ul`
   color: red;
   display: flex;
   li {
     width: 50px;
   }
`;

const Footer = ({  }) => {
  return (
    <StyledFooter>
        <footer>
         <div className="footer">
            <div className="copyright">
               <div className="container">
                  <div className="row d_flex">
                     <div className="col-md-8">
                        <p>© 2022 All Rights Reserved. Design by  <a href="https://html.design/"> Free html Templates</a></p>
                     </div>
                     <div className="col-md-4">
                       <StyledSocialLink className="social_icon text_align_center">
                        <li> <a href="Javascript:void(0)"><i className="fa fa-facebook-f"></i></a></li>
                        <li> <a href="Javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                        <li> <a href="Javascript:void(0)"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li> <a href="Javascript:void(0)"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </StyledSocialLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </StyledFooter>
  );
};
export default Footer;
