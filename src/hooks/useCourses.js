import { useEffect, useState } from "react";

let useCourse = () => {
    let [fullstack, setFullstack] = useState([]);
    let [fundamentals, setFundamentals] = useState([]);
    let [frontend, setFrontend] = useState([]);
    let [backend, setBackend] = useState([]);
    let [mobile, setMobile] = useState([]);

    useEffect(() => {
        //fetching all data from json files
        fetch("data/fullstack.json")
            .then(res => res.json())
            .then(data => setFullstack(data));
        fetch("data/fundamentals.json")
            .then(res => res.json())
            .then(data => setFundamentals(data));
        fetch("data/frontend.json")
            .then(res => res.json())
            .then(data => setFrontend(data));
        fetch("data/backend.json")
            .then(res => res.json())
            .then(data => setBackend(data));
        fetch("data/mobile.json")
            .then(res => res.json())
            .then(data => setMobile(data));
    }, []);

    return [fundamentals, fullstack, frontend, mobile, backend];
}

export default useCourse;