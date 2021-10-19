import { useEffect, useState } from "react";

let useJson = () => {
    const [trainings, setTrainings] = useState([]);
    const [successes, setSuccesses] = useState([]);
    const [membershipFees, setMembershipFees] = useState([]);
    const [HIITClasses, setHIITClasses] = useState([]);
    const [stories, setStories] = useState([]);

    const trainingsUrl = 'https://gist.githubusercontent.com/ShakibUddin/18389e2783170649dc853fb6c69b15d1/raw/0cf8f9e8e42ba6bd6a0c5141375654cdf5948706/training.json';
    const successesUrl = 'https://gist.githubusercontent.com/ShakibUddin/00bfe2102bf1ce1641f8dac39851a0c5/raw/856833a078b02c4df2e7bbb3ddda7dc5332fe8ed/success.json';
    const membershipFeesUrl = 'https://gist.githubusercontent.com/ShakibUddin/7acc96496f98e2db3370441dff8b786d/raw/b4441bed1ecfb206c905ba5c9e8b709881480d71/membershipData.json';
    const hiitClasseesUrl = 'https://gist.githubusercontent.com/ShakibUddin/9db829d492be6ac0ca43cadeb3a7dd71/raw/4a9185c9f76249515ea253f4a05e1ebd1694da47/hiitclasses.json';
    const storiesUrl = 'https://gist.githubusercontent.com/ShakibUddin/eeef64f31c99c427536b3f7351244695/raw/ce429349a0d3754c9eb480db363d87e9ef0ebe78/stories.json';

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
        fetch(hiitClasseesUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setHIITClasses(json);
            });
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


    return { trainings, setTrainings, successes, setSuccesses, membershipFees, setMembershipFees, HIITClasses, setHIITClasses, stories, setStories };
}

export default useJson;