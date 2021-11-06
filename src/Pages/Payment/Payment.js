import React, { useEffect, useState } from 'react';
import Loading from 'react-loading-animation';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useData from '../../Hooks/useData';
import americanexpress from '../../images/americanexpress.png';
import mastercard from '../../images/mastercard.png';
import visa from '../../images/visa.png';

const Payment = () => {
    const { itemId } = useParams();
    const { type } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const months = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const years = ["2021", "2022", "2023", "2024", "2025"];
    const { trainings, memberships, addPurchaseData, purchaseSaved, setPurchaseSaved } = useData();
    const [email, setEmail] = useState(months[0]);
    const [item, setItem] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedYear, setSelectedYear] = useState();

    // finding the selected training
    useEffect(() => {
        if (type === "training") {
            setItem(trainings.find(training => training._id.toString() === itemId.toString()));
        }
    }, [itemId, trainings, type]);
    // finding the selected membership
    useEffect(() => {
        if (type === "membership") {
            setItem(memberships.find(membership => membership._id.toString() === itemId.toString()));
        }
    }, [itemId, memberships, type]);

    useEffect(() => {
        if (purchaseSaved) {
            history.push('/home');
            setPurchaseSaved(false);
        }
    }, [history, purchaseSaved]);

    const handlePayment = () => {
        addPurchaseData({ email: user.email, item });
    }

    if (item === undefined) return (<Loading></Loading>);
    return (
        <div className="w-full">
            <div className="lg:w-3/4 md:w-4/5 w-full mx-auto lg:shadow-md md:shadow-md shadow-none my-24 p-6">
                <p className="text-3xl font-bold mb-4 text-center text-black">{item.name} - ${item.price}</p>
                <div className="flex flex-wrap justify-between">
                    <p className="text-2xl font-bold text-black">Payment Details</p>
                    <div className="flex flex-wrap lg:justify-end justify-center">
                        <img className="w-12 lg:my-0 my-4 mx-4 cursor-pointer" src={visa} alt="" />
                        <img className="w-12 lg:my-0 my-4 mx-4 cursor-pointer" src={mastercard} alt="" />
                        <img className="w-12 lg:my-0 my-4 mx-4 cursor-pointer" src={americanexpress} alt="" />
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <input style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" type="text" placeholder="Email Address" />
                    <input style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" type="text" placeholder="Card Holder" />
                    <input style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" type="text" placeholder="Card Number" />
                </div>
                <p>Expired</p>
                <div className="flex flex-wrap">
                    <select style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" name="month" id="month">
                        {months.map((month, index) => <option key={index} value={month}>{month}</option>)}
                    </select>
                    <select style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" name="year" id="year">
                        {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
                    </select>
                    <input style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" type="text" placeholder="Security Code" />
                </div>
                <button className="lg:w-1/5 md:w-2/5 w-2/4 mx-auto my-3 font-bold text-xl p-3  text-center bg-blue-400  text-white uppercase rounded-3xl" onClick={handlePayment}>Pay Now</button>
            </div>
        </div>
    );
};

export default Payment;