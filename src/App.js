import React from "react";
import styled from "styled-components";
import { Weather } from "./app/components/Weather";
import { Loading } from "./app/components/Loading";
import { useSelector } from "react-redux";
import {
  loading,
} from "./app/data/weatherSlice";
import { Header } from "./app/components/Header";
import { Footer } from "./app/components/Footer";
const AppContainer = styled.div``;
const WeatherContainer = styled.div`
`;
const App = () => {

  const weatherLoading = useSelector(loading);
  return (
    <AppContainer>
      <WeatherContainer>
        <Header />
      </WeatherContainer>
      <Footer />

      <Loading on={weatherLoading} />
    </AppContainer>
  );
}

export default App;
