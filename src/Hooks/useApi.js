import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
const axios = require('axios').default;

let useApi = () => {
    const [trainings, setTrainings] = useState([]);
    const [successes, setSuccesses] = useState([]);
    const [membershipFees, setMembershipFees] = useState([]);
    const [stories, setStories] = useState([]);

    const trainingsUrl = 'http://localhost:5000/trainings';
    const successesUrl = 'http://localhost:5000/successes';
    const queriesUrl = 'http://localhost:5000/queries';
    const storiesUrl = 'http://localhost:5000/stories';
    const membershipFeesUrl = 'http://localhost:5000/memberships';


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

    const submitUserMessage = ({ query, email }) => {
        axios.post(queriesUrl, { query, email })
            .then(response => {
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
    return { trainings, setTrainings, successes, setSuccesses, membershipFees, setMembershipFees, stories, setStories, submitUserMessage };
}

export default useApi;