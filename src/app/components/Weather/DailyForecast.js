import React from "react";
import { ForecastWrapper ,ForcastList, ForcastItem, CloudIcon, ForecastDay, ForecastTemp } from "./WeatherStyle";
import { useIntl } from "react-intl";
import moment from "moment";
import { iconURL } from "./../../utils/utils";
const DailyForecast = ({days}) => {
  const weekDays = ['app.sunday', 'app.monday', 'app.tuesday', 'app.wednesday', 'app.thursday', 'app.friday', 'app.saturday'];
  const { formatMessage } = useIntl();

  const weekDayNumber = (date) => {
    date = date ? new Date(date * 1000) : null;
    let weekDay = date ? moment(date).weekday() :  null;
    // weekDay = weekDay ? moment().weekday(weekDay) : null;
    return weekDay;
  }
  const getWeekDay = (wekkdayNo) => {
    return weekDays[wekkdayNo]
  }
  const getDailyForecast = () => {
    return days.map((item, index) => {
      if (index > 0 && index < 6) {
        const { dt: date, temp, weather } = item;
        const dayNo = weekDayNumber(date);
        const dayId = getWeekDay(dayNo);
      return <ForcastItem key={index}>
        <ForecastDay>{
          formatMessage({
            id: dayId,
            defaultMessage: ""
          })
        }</ForecastDay>
        <CloudIcon src={`${iconURL}${weather[0].icon}.png`}/>
        <ForecastTemp>{Math.round(temp.day)}&#8451;</ForecastTemp>
      </ForcastItem>
      }
    })
  }
  return <ForecastWrapper>
    <ForcastList>{getDailyForecast()}</ForcastList>
    </ForecastWrapper>
}

export default DailyForecast;