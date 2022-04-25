import React from 'react';
import { WeatherInfo, TodayInfo, TodayInfoItem, City, Label, Cloud, CloudDesc, CloudIcon, Temp, WindWrapper, WindItem } from "./WeatherStyle";
import moment from "moment";
import { useIntl } from "react-intl";
import DailyForecast from "./DailyForecast";
import { useEffect } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherForecast,
  forecastWeather,
} from "../../data/weatherSlice";
import { iconURL } from "./../../utils/utils";

const WeatherDetails = ({ city = '', temp, windSpeed, sunrise, sunset, lat, lon, weather}) => {

  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const forecatData = useSelector(forecastWeather);
  const getTime = (dateNo) => {
    let strHour = ''
    if (dateNo) {
      const date = new Date(dateNo * 1000);
      strHour = moment(date).format('LT');
    }
    return strHour;
  }
  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchWeatherForecast({lat, lon}));
    }
  }, [lat, lon])
  return <WeatherInfo>
    <City>{city}</City>
    <TodayInfo>
      <TodayInfoItem>
        <Cloud>
          <CloudIcon src={`${iconURL}${weather.icon}.png`}/>
          <CloudDesc>{weather.description}</CloudDesc>
        </Cloud>
      </TodayInfoItem>
      <TodayInfoItem>
        <Temp>{Math.round(temp)}&#8451;</Temp>
      </TodayInfoItem>
      <TodayInfoItem>
        <WindWrapper>
          <WindItem>
            <Label>
              {formatMessage({
                id: "app.wind",
                defaultMessage: "Wind"
              })}
            </Label>: {windSpeed} m/s
        </WindItem>
          <WindItem>
            <Label>
              {formatMessage({
                id: "app.sunrise",
                defaultMessage: "Sunrise"
              })}
            </Label>: {getTime(sunrise)}
          </WindItem>

          <WindItem>
            <Label>{formatMessage({
              id: "app.sunset",
              defaultMessage: "Sunset"
            })}</Label>: {getTime(sunset)}
          </WindItem>
        </WindWrapper>
        </TodayInfoItem>
    </TodayInfo>
    {forecatData ? <DailyForecast days={forecatData.daily}>
    </DailyForecast> : null }
  </WeatherInfo>;
}

export default WeatherDetails;