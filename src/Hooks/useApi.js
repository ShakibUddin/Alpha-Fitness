import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { developmentUrl, productionUrl } from "../Constants/Constants";
const axios = require('axios').default;

let useApi = () => {

    const development = false;
    const serverUrl = development ? developmentUrl : productionUrl;

    const [trainings, setTrainings] = useState([]);
    const [successes, setSuccesses] = useState([]);
    const [memberships, setMemberships] = useState([]);
    const [stories, setStories] = useState([]);
    const [purchaseSaved, setPurchaseSaved] = useState(false);

    const trainingsUrl = `${serverUrl}/trainings`;
    const successesUrl = `${serverUrl}/successes`;
    const queriesUrl = `${serverUrl}/queries`;
    const storiesUrl = `${serverUrl}/stories`;
    const membershipsUrl = `${serverUrl}/memberships`;
    const purchasesUrl = `${serverUrl}/purchase`;


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
        axios.get(membershipsUrl)
            .then(response => {
                setMemberships(response.data);
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
    const addPurchaseData = ({ email, item }) => {
        axios.post(purchasesUrl, { email, itemName: item.name, itemPrice: item.price })
            .then(response => {
                if (response.data) {
                    setPurchaseSaved(true);
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You.',
                        text: "Payment Completed Successfully",
                        showCloseButton: false,
                        showConfirmButton: true,
                        confirmButtonText: "OK",
                        confirmButtonColor: "#5c9169"
                    })
                }
                else {
                    setPurchaseSaved(false);
                    throw new Error(response.statusText);
                }

            })
            .catch(error => {
                setPurchaseSaved(false);
                Swal.showValidationMessage(
                    `Oops! Something is wrong.`
                )
            })
    }
    return { trainings, setTrainings, successes, setSuccesses, memberships, setMemberships, stories, setStories, submitUserMessage, addPurchaseData, purchaseSaved, setPurchaseSaved };
}

export default useApi;