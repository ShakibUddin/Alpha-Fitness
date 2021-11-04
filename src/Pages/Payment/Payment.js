import React, { useState } from 'react';
import americanexpress from '../../images/americanexpress.png';
import mastercard from '../../images/mastercard.png';
import visa from '../../images/visa.png';

const Payment = () => {
    const months = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const years = ["2021", "2022", "2023", "2024", "2025"];
    const [email, setEmail] = useState(months[0]);
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedYear, setSelectedYear] = useState();


    return (
        <div className="w-full">
            <div className="lg:w-3/4 md:w-4/5 w-full mx-auto lg:shadow-md md:shadow-md shadow-none my-24 p-6">
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
                        {months.map(month => <option value={month}>{month}</option>)}
                    </select>
                    <select style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" name="year" id="year">
                        {years.map(year => <option value={year}>{year}</option>)}
                    </select>
                    <input style={{ minWidth: "250px" }} className="px-2 py-4 w-1/4 border-2 rounded-md m-2" type="text" placeholder="Security Code" />
                </div>
                <button className="lg:w-1/5 md:w-2/5 w-2/4 mx-auto my-3 font-bold text-xl p-3  text-center bg-blue-400  text-white uppercase rounded-3xl">Pay Now</button>
            </div>
        </div>
    );
};

export default Payment;