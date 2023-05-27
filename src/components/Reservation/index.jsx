import React, { useState, useEffect } from "react";
import "./style.css"
import {useParams} from "react-router-dom";

export const Reservation = () => {
    let { id} = useParams();

    console.log(id)

    const [reservation, setReservation] = useState(null);

    useEffect(() => {
        fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`).then((response) => response.json()).then((data) => {
            console.log(data.results);
            setReservation(data.results)
        })
    }, [id])

    return(
        <div className="reservation container">
            <h2>Vaše e-jízdenka č. {id}</h2>
            <div className="reservation__body">
                <div className="reservation__headings">
                    <p>Datum cesty:</p>
                    <p>Odjezd:</p>
                    <p>Příjezd:</p>
                    <p>Sedadlo:</p>
                </div>
                <div className="reservation__info">
                    {reservation ? <p>{reservation.date}</p> : null}
                    {reservation ? <p>{reservation.fromCity.name}, {reservation.fromCity.time}</p> : null}
                    {reservation ? <p>{reservation.toCity.name}, {reservation.toCity.time}</p> : null}
                    {reservation ? <p>{reservation.seatNumber}</p> : null}
                </div>
            </div>
        </div>
    )
}