import { useEffect, useState } from "react";

let useJson = () => {
    const [trainings, setTrainings] = useState([]);
    const [successes, setSuccesses] = useState([]);
    const [membershipFees, setMembershipFees] = useState([]);
    const [stories, setStories] = useState([]);
    const [specialClasses, setSpecialClasses] = useState([]);

    const trainingsUrl = 'http://localhost:5000/trainings';
    const successesUrl = 'http://localhost:5000/successes';
    const membershipFeesUrl = 'https://gist.githubusercontent.com/ShakibUddin/7acc96496f98e2db3370441dff8b786d/raw/b4441bed1ecfb206c905ba5c9e8b709881480d71/membershipData.json';
    const storiesUrl = 'https://gist.githubusercontent.com/ShakibUddin/eeef64f31c99c427536b3f7351244695/raw/ce429349a0d3754c9eb480db363d87e9ef0ebe78/stories.json';
    const specialClassesUrl = 'https://gist.githubusercontent.com/ShakibUddin/533230c85e00a6f7f9ae360678ad5c7f/raw/e542794d7a1e65e4dd832f729dfc52490e3a2939/specialClasses.json';

    useEffect(() => {
        fetch(trainingsUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setTrainings(json);
            })
            .catch(e => console.log(e));
    }, []);


    useEffect(() => {
        fetch(successesUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setSuccesses(json);
            }).catch(e => console.log(e));
    }, []);

    useEffect(() => {
        fetch(membershipFeesUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setMembershipFees(json);
            }).catch(e => console.log(e));
    }, []);

    useEffect(() => {
        fetch(storiesUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setStories(json);
            });
    }, []);

    useEffect(() => {
        fetch(specialClassesUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setSpecialClasses(json);
            });
    }, []);


    return { trainings, setTrainings, successes, setSuccesses, membershipFees, setMembershipFees, stories, setStories, specialClasses, setSpecialClasses };
}

export default useJson;