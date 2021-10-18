import { useEffect, useState } from "react";

let useJson = () => {
    const [trainings, setTrainings] = useState([]);
    const [successes, setSuccesses] = useState([]);

    const trainingsUrl = 'https://gist.githubusercontent.com/ShakibUddin/18389e2783170649dc853fb6c69b15d1/raw/0cf8f9e8e42ba6bd6a0c5141375654cdf5948706/training.json';
    const successesUrl = 'https://gist.githubusercontent.com/ShakibUddin/00bfe2102bf1ce1641f8dac39851a0c5/raw/a3e2c570e9bc71f93b256084980c1dff66d03bb7/success.json';

    useEffect(() => {
        fetch(trainingsUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setTrainings(json);
            });
    }, []);


    useEffect(() => {
        fetch(successesUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setSuccesses(json);
            });
    }, []);


    return { trainings, setTrainings, successes, setSuccesses };
}

export default useJson;