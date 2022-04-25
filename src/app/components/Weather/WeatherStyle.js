import styled, { keyframes } from "styled-components";
const WeatherContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  @media (min-width: 768px) {
    max-width: 30rem;
    width: 30rem;
  }
`;
const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const LogoWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 2rem;
`;
const LogoImg = styled.img`
  width: 90%;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${float} infinite 3s ease-in-out;
  }
`;
const WeatherForm = styled.form`
  display: flex;
`;
const SearchInput = styled.input`
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  height: 1.8rem;
  min-height: 1.8rem;
  margin-right: 0.3rem;
  padding-left: .5rem;
  width: 100%;
  :focus {
    border: 1px solid #EB6E4B;
  }
`;
const SubmitButton = styled.input`
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  height: 2rem;
  min-height: 2rem;
  cursor: pointer;
  min-width: 5rem;
  :active {
    border: 1px solid #EB6E4B;
  }
  :hover {
    background: rgb(239, 245, 245);
  }
`;

const WeatherSection = styled.section`
  margin-top: 1rem;
  border: 2px solid #5E717A;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
const WeatherInfo = styled.div``;
const City = styled.div`
  text-align: center;
  font-weight: 600;
`;
const TodayInfo = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const TodayInfoItem = styled.div`
  width: 33.33%;
  position: relative;
  font-size: 0.8rem;
  @media (min-width: 412px) {
    font-size: 1rem;
  }
`;
const Cloud = styled.div`
  text-align: center;
`;
const CloudDesc = styled.div`
  font-weight: 600;
  text-transform: capitalize;
`;
const CloudIcon = styled.img``;

const Temp = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  position: absolute;
  top: 45%;
  right: 25%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
const WindWrapper = styled.div``;
const WindItem = styled.div`
  margin-bottom: 0.4rem;
`;
const NotFound = styled.div`
  text-align: center;
  font-weight: 500;
`;
const Label = styled.label``;

const ForecastWrapper = styled.section``;

const ForcastList = styled.ul`
  display: flex;
  padding-left: 0;
`;
const ForcastItem = styled.li`
  padding: 0 .5rem;
  width: 20%;
  text-align: center;
`;
const ForecastDay = styled.h4`
  text-transform: uppercase;
`;
const ForecastTemp = styled.div``;
export { WeatherContainer, LogoWrapper, LogoImg, WeatherForm, SearchInput, SubmitButton, 
  WeatherSection, WeatherInfo, TodayInfo, TodayInfoItem, NotFound, City, Cloud, CloudDesc, CloudIcon, Temp, WindWrapper,
  WindItem, Label, ForecastWrapper, ForcastList, ForcastItem, ForecastDay, ForecastTemp
}