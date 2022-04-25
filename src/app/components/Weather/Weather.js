import React, { useState } from "react";
import openLogo from "../../../assets/images/open-weather.png";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCurrentWeather,
  currentWeather,
  error
} from "../../data/weatherSlice";
import { WeatherContainer, LogoWrapper, LogoImg, WeatherForm, SearchInput, SubmitButton, WeatherSection, NotFound } from "./WeatherStyle";
import WeatherDetails from "./WeatherDetails";
const Weather = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const weatherCurrent = useSelector(currentWeather);
  const weatherError = useSelector(error);
  const [city, setCity] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    dispatch(fetchCurrentWeather({query: city}));
  }
  const onChange = (event) => {
    if (event) {
      setCity(event.target.value);
    }
  }
  return <WeatherContainer>
    <LogoWrapper>
      <LogoImg src={openLogo} alt="open weather"/>
    </LogoWrapper>
      <WeatherForm onSubmit={onSubmit}>
        <SearchInput name="city" onKeyUp={onChange}/>
        <SubmitButton
          type="submit"
          value={formatMessage({
            id: "app.search",
            defaultMessage: "Search"
          })}
          >
        </SubmitButton>
      </WeatherForm>

      { isSubmitted ? <WeatherSection>
        {weatherCurrent ?
          <WeatherDetails 
          city={weatherCurrent.name} 
          windSpeed={weatherCurrent.wind.speed} 
          sunrise={weatherCurrent.sys.sunrise}
          sunset={weatherCurrent.sys.sunset}
          temp={weatherCurrent.main.temp}
          lat={weatherCurrent.coord.lat}
          lon={weatherCurrent.coord.lon}
          weather={weatherCurrent.weather[0]}
        />
          : null
        }
        
        { !weatherCurrent && weatherError ? <NotFound>
          {formatMessage({
            id: "app.cityNotFound",
            defaultMessage: "Not Found"
          })}
        </NotFound> : null }
      </WeatherSection> : null }
  </WeatherContainer>
}

export default Weather;