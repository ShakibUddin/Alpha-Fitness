import { useEffect, useState } from "react";

let useTrainingJson = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/ShakibUddin/18389e2783170649dc853fb6c69b15d1/raw/0cf8f9e8e42ba6bd6a0c5141375654cdf5948706/training.json')
            .then(response => {
                return response.json();
            })
            .then(json => {
                setTrainings(json);
            });
    }, []);



    return [trainings, setTrainings];
}

export default useTrainingJson;