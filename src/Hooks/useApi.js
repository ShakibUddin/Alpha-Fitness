import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { developmentUrl, productionUrl } from "../Constants/Constants";
const axios = require('axios').default;

let useApi = () => {

    const development = true;
    const serverUrl = development ? developmentUrl : productionUrl;

    const [trainings, setTrainings] = useState([]);
    const [successes, setSuccesses] = useState([]);
    const [memberships, setMemberships] = useState([]);
    const [stories, setStories] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [queries, setQueries] = useState([]);
    const [purchaseSaved, setPurchaseSaved] = useState(false);

    const trainingsUrl = `${serverUrl}/trainings`;
    const successesUrl = `${serverUrl}/successes`;
    const queriesUrl = `${serverUrl}/queries`;
    const storiesUrl = `${serverUrl}/stories`;
    const membershipsUrl = `${serverUrl}/memberships`;
    const getPurchasesUrl = `${serverUrl}/purchases`;
    const purchaseUrl = `${serverUrl}/purchase`;
    const deleteQueryUrl = `${serverUrl}/delete/query`;//add id

    const fetchQueries = () => {
        axios.get(queriesUrl)
            .then(response => {
                setQueries(response.data);
            });
    }
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

    useEffect(() => {
        axios.get(getPurchasesUrl)
            .then(response => {
                setPurchases(response.data);
            });
    }, []);

    useEffect(() => {
        fetchQueries();
    }, []);

    const submitUserMessage = ({ query, email }) => {
        axios.post(queriesUrl, { query, email, date: new Date().toDateString() })
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
    const addPurchaseDataTable = ({ email, item }) => {
        axios.post(purchaseUrl, { email, itemName: item.name, itemPrice: item.price, date: new Date().toDateString() })
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

    const handleDeleteQuery = (id) => {
        axios.delete(`${deleteQueryUrl}/${id}`)
            .then(function (response) {
                if (response.data) {
                    //fetch new data
                    fetchQueries();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return { trainings, setTrainings, successes, setSuccesses, memberships, setMemberships, stories, setStories, submitUserMessage, addPurchaseDataTable, purchaseSaved, setPurchaseSaved, queries, purchases, handleDeleteQuery };
}

export default useApi;