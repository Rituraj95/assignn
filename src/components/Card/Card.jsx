import React, { useState, useEffect } from 'react';
import Maincard from './Maincard';

const Card = () => {
    const [mydata, setMyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'bcda264dbemsh5db2930f1bd5a28p1c5c71jsn28434551fd6e',
                    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json(); // Parse response as JSON
                setMyData(result.titles); // Update state with fetched data
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call fetchData when the component mounts

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {
                mydata.map((curElem) => (
                    <Maincard key={curElem.summary.id} actualData={curElem} />
                ))
            }
        </div>
    );
}

export default Card;
