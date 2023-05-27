import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import {JourneyDetail} from "../JourneyDetail";

export const Home = () => {
    const [journey, setJourney] = useState(null);

    const handleJourneyChange = (data) => {
       setJourney(data)
    }
    return (
        <main>
            <JourneyPicker onJourneyChange={handleJourneyChange}/>
            {journey ? <JourneyDetail journey={journey}/> : null}
        </main>
    )
}
