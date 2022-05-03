
import React from "react";
import styled from "styled-components";
const StyledFooter = styled.div`
   display: block;
   margin-top: 90px;
   background: #1d1e1e;
   text-align: center;
   padding-top: 80px;
   padding-bottom: 80px;
`;
const StyledFont = styled.div`
   width: 100%;
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto;
   max-width: 1140px;
`;
const StyledContainer = styled.div`
   display: flex;
    align-items: center;
    flex-wrap: wrap;
   `;
const StyledSocialLink = styled.ul`
   color: red;
   display: flex;
   li {
     width: 50px;
   }
`;
const StyledText = styled.p`
   color: #ffffff
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
                        <StyledText>© 2022 All Rights Reserved. Design by  <a href="https://znylabs.com/">znylabs </a></StyledText>
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
