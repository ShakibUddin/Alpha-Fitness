import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Consultation = () => {
    const [value, onChange] = useState(new Date());
    //to add jsx in modal
    const MySwal = withReactContent(Swal);

    const handleBookSessionClick = () => {
        MySwal.fire({
            title: 'Drop a message',
            html: <div className="flex flex-col w-full items-center">

            </div>,
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            confirmButtonColor: "#3386FF",
            showLoaderOnConfirm: true,
            preConfirm: (query) => {
                // return submitUserMessage({ query, email: user.email });
            },
            allowOutsideClick: () => !MySwal.isLoading()
        });
    }

    return (
        <div className="w-full flex flex-col">
            <Calendar
                className="text-sm"
                onChange={onChange}
                value={value}
            />
            <input className="lg:w-2/4 w-3/4 p-3 my-2 border-2 rounded-md" type="text" placeholder="Enter message" />
        </div>
    );
};

export default Consultation;