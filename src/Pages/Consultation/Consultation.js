import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import React, { Fragment, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useData from '../../Hooks/useData';

const Consultation = () => {
    const { coaches, submitAppointmentBookingData } = useData();
    const [selectedDate, onChange] = useState(new Date());
    const { user } = useAuth();
    const history = useHistory();
    const timeSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"];

    const [selectedCoach, setSelectedCoach] = useState();
    const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (coaches.length > 0) setSelectedCoach(coaches[0])
    }, [coaches])
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const handleSlotSelection = (e) => {
        setSelectedSlot(e.target.innerText);
    }

    if (coaches.length === 0) return (<div className='w-full flex justify-center items-center h-96'>

        <Loader
            type="Bars"
            color="#3386FF"
            height={100}
            width={100}
            timeout={4000}
        />

    </div>);
    return (
        <div className="w-full flex flex-col p-4 items-center">
            <div className="lg:w-4/5 md:w-4/5 w-full bg-white shadow-md rounded-md p-4 flex lg:flex-row md:flex-row flex-col">
                <Calendar
                    className="text-sm lg:w-2/4 md:w-2/4 w-full lg:mr-2 md:mr-2"
                    onChange={onChange}
                    value={selectedDate}
                />
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 grid-flow-row auto-rows-min lg:ml-2 md:ml-2">
                    {
                        timeSlots.map((slot, index) => <p key={index} className={selectedSlot !== slot ? `rounded-md px-4 py-2 text-center bg-blue-200 text-blue-700 m-1 cursor-pointer hover:bg-blue-500 hover:text-white` : `rounded-md px-4 py-2 text-center m-1 cursor-pointer bg-blue-500 text-white`} value={selectedSlot}
                            onClick={(e) => { handleSlotSelection(e) }}>{slot}</p>)
                    }
                </div>
            </div>
            <div className="flex flex-col lg:w-4/5 md:w-4/5 w-full bg-white shadow-md rounded-md p-4 mt-8">
                <p>Name</p>
                <input readOnly={user.name ? user.name : user.displayName ? true : false} value={user.name ? user.name : user.displayName} className="w-full p-3 my-2 border-2 rounded-md" type="text" placeholder="Enter name" name="name" />
                <p className="mt-4">Email</p>
                <input readOnly={true} value={user.email} className="w-full p-3 my-2 border-2 rounded-md" type="text" placeholder="Enter email" name="email" />
                <p className="mt-4">Preferred Coach</p>
                <Listbox value={selectedCoach} onChange={setSelectedCoach}>
                    {({ open }) => (
                        <>
                            <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <span className="flex items-center">
                                        <img src={selectedCoach?.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                        <span className="ml-3 block truncate">{selectedCoach?.name} - {selectedCoach?.area} Coach</span>
                                    </span>
                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {coaches.map((person) => (
                                            <Listbox.Option
                                                key={person._id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-blue-600' : 'text-gray-900',
                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                    )
                                                }
                                                value={person}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <div className="flex items-center">
                                                            <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                            <span
                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                                                                {person.name} - {person.area} Coach
                                                            </span>
                                                        </div>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-blue-600',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
                <p className="mt-4">Do you have any message?</p>
                <textarea className="w-full p-3 my-2 border-2 rounded-md" type="text" placeholder="Enter message" value={message} name="message" onChange={(e) => {
                    setMessage(e.target.value);
                }} />
                <button className="lg:w-1/4 w-2/4 mx-auto px-4 p-2 bg-blue-600 rounded-md text-white text-center cursor-pointer mt-8" onClick={() => {
                    submitAppointmentBookingData({ date: selectedDate.toString().split(" ").slice(1, 4).join(" "), time: selectedSlot, coachId: selectedCoach._id, coachName: selectedCoach.name, userName: user.name ? user.name : user.displayName, userEmail: user.email, message: message });
                    history.push('/home');
                }}>SUBMIT</button>
            </div>

        </div>
    );
};

export default Consultation;