import React from "react";
import styled from "styled-components";
import { Weather } from "./app/components/Weather";
import { Loading } from "./app/components/Loading";
import { useSelector } from "react-redux";
import {
  loading,
} from "./app/data/weatherSlice";
const AppContainer = styled.div``;
const WeatherContainer = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const App = () => {

  const weatherLoading = useSelector(loading);
  return (
    <AppContainer>
      <WeatherContainer>
        <Weather />
      </WeatherContainer>

      <Loading on={weatherLoading} />
    </AppContainer>
  );
}

export default App;
