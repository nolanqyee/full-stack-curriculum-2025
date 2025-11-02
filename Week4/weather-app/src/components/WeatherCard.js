import React, { useState, useEffect } from "react";
import "../styles/WeatherCard.css";

function WeatherCard(props) {
    const weather  = props.weatherData;
    const date = props.date;
    const day = props.daysFromNow;
    const highTemp = getHighLowTemps()[0];
    const lowTemp = getHighLowTemps()[1];
    const dayIndex = findDayIndex();
    
    function getHighLowTemps() {
        let highTemp = -Infinity
        let lowTemp = Infinity

        weather.list.forEach((entry) => {
            const entryDate = new Date(entry.dt_txt)
            const today = new Date()
            if (entryDate.getDate() === today.getDate() + day) {
                if (entry.main.temp_max > highTemp) {
                    highTemp = entry.main.temp_max		
                }
                if (entry.main.temp_min < lowTemp) {
                    lowTemp = entry.main.temp_min
                }
            }
        })
        highTemp = Math.round(highTemp)
        lowTemp = Math.round(lowTemp)
        return [highTemp, lowTemp]
    }

    function findDayIndex() {
        let dayIndex = 0
        weather.list.forEach((entry, index) => {
            const entryDate = new Date(entry.dt_txt)
            const today = new Date()
            if (entryDate.getDate() === today.getDate() + day) {
                dayIndex = index
                return dayIndex;
            }
        })
        return dayIndex;
    }

    const iconCode = `/icons/${weather.list[dayIndex].weather[0].icon}.svg`;
    

    return (
        <div className="weather-card">
            <h3>{date}</h3>
            <img src={iconCode} alt="Weather Icon"></img>
            <h4>{highTemp} to {lowTemp}</h4>
        </div>
    );
}

export default WeatherCard;