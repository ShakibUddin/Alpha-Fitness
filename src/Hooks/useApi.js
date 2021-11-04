import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
const axios = require('axios').default;

let useApi = () => {
    const [trainings, setTrainings] = useState([]);
    const [successes, setSuccesses] = useState([]);
    const [membershipFees, setMembershipFees] = useState([]);
    const [stories, setStories] = useState([]);
    const [specialClasses, setSpecialClasses] = useState([]);

    const trainingsUrl = 'http://localhost:5000/trainings';
    const successesUrl = 'http://localhost:5000/successes';
    const queriesUrl = 'http://localhost:5000/queries';
    const membershipFeesUrl = 'https://gist.githubusercontent.com/ShakibUddin/7acc96496f98e2db3370441dff8b786d/raw/b4441bed1ecfb206c905ba5c9e8b709881480d71/membershipData.json';
    const storiesUrl = 'https://gist.githubusercontent.com/ShakibUddin/eeef64f31c99c427536b3f7351244695/raw/ce429349a0d3754c9eb480db363d87e9ef0ebe78/stories.json';
    const specialClassesUrl = 'https://gist.githubusercontent.com/ShakibUddin/533230c85e00a6f7f9ae360678ad5c7f/raw/e542794d7a1e65e4dd832f729dfc52490e3a2939/specialClasses.json';

    useEffect(() => {
        axios.get(trainingsUrl)
            .then(response => {
                setTrainings(response.data);
            })
            .catch(e => console.log(e));
    }, []);


    useEffect(() => {
        axios.get(successesUrl)
            .then(response => {
                setSuccesses(response.data);
            }).catch(e => console.log(e));
    }, []);

    useEffect(() => {
        axios.get(membershipFeesUrl)
            .then(response => {
                setMembershipFees(response.data);
            }).catch(e => console.log(e));
    }, []);

    useEffect(() => {
        axios.get(storiesUrl)
            .then(response => {
                setStories(response.data);
            });
    }, []);

    useEffect(() => {
        axios.get(specialClassesUrl)
            .then(response => {
                setSpecialClasses(response.data);
            });
    }, []);

    const submitUserMessage = ({ query, email }) => {
        axios.post(queriesUrl, { query, email })
            .then(response => {
                console.log(response);
                if (response.data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You.',
                        text: "We will contact you in 24 hours",
                        showCloseButton: true,
                        showConfirmButton: false,
                    })
                }
                else {
                    throw new Error(response.statusText);
                }

            })
            .catch(error => {
                Swal.showValidationMessage(
                    `Oops! Something is wrong.`
                )
            })
    }
    return { trainings, setTrainings, successes, setSuccesses, membershipFees, setMembershipFees, stories, setStories, specialClasses, setSpecialClasses, submitUserMessage };
}

export default useApi;