import styled, {keyframes } from "styled-components";
const bounce = keyframes`
  0%, 39%, 100% { 
    opacity: 0; 
  }
  40% { 
    opacity: 1;
} 
`
const LoadingContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`
const LoadingWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
`;
const LoadingCircleGroup = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
`;

const LoadingCircle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  :before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #181a1d;
    border-radius: 100%;
    -webkit-animation: ${bounce} 1.2s infinite ease-in-out both;
         -o-animation: ${bounce} 1.2s infinite ease-in-out both;
            animation: ${bounce} 1.2s infinite ease-in-out both;
  }
  -webkit-transform: rotate(${props => props.degree}deg);
  -ms-transform: rotate(${props => props.degree}deg);
  -o-transform: rotate(${props => props.degree}deg);
      transform: rotate(${props => props.degree}deg);
  :before {
  -webkit-animation-delay: -${props => props.delay}s;
        animation-delay: -${props => props.delay}s;
  }
`
export { LoadingContainer, LoadingWrap, LoadingCircleGroup, LoadingCircle }