import React from "react";
import "./style.css";
import { BusStop } from "../BusStop";

export const JourneyDetail = ({journey} ) => {
    console.log(journey)

    const stops = Array.from(journey.stops);

    return (
        <div className="journey-detail container">
            <h2>Podrobnosti cesty</h2>
            <div className="stops">
                {stops.map((stop) => <BusStop key={stop.code} name={stop.name} station={stop.station} time={stop.time} />)}
            </div>
        </div>
    )
}