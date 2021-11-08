import React from 'react';
import Loader from "react-loader-spinner";
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Swal from 'sweetalert2';
import useData from '../../../Hooks/useData';

const AppointmentDataTable = () => {
    const { appointments, approveAppointment, handleDeleteAppointment } = useData();

    const handleApproveClick = (appointment) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Approve ${appointment.userName}'s appointment with ${appointment.coachName} on ${appointment.date} at ${appointment.time}?`,
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Approve',
            confirmButtonColor: "#3386FF",
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return approveAppointment({ ...appointment });
            },
            allowOutsideClick: () => !Swal.isLoading()
        });
    }
    function openModal(appointment) {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete ${appointment.userName}'s appointment with ${appointment.coachName} on ${appointment.date} at ${appointment.time}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteAppointment(appointment._id);
                Swal.fire(
                    'Deleted!',
                    'Appointment has been deleted.',
                    'success'
                )
            }
        })
    }

    if (appointments?.length === 0) return (<div className='w-full flex justify-center items-center h-96'>

        <Loader
            type="Bars"
            color="#3386FF"
            height={100}
            width={100}
            timeout={4000}
        />

    </div>);
    return (
        <Table className="w-11/12 my-8 bg-white shadow-md mx-auto">
            <Thead>
                <Tr className="shadow-md">
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Name</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Email</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Coach</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Date</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Time</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Message</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3"></Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    appointments.map(item => <Tr key={item._id}>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.userName}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.userEmail}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.coachName}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.date}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.time}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.message}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3"><div className="flex justify-center">
                            <button className="w-2/4 mx-1 p-2 bg-blue-500 text-white" onClick={() => {
                                handleApproveClick(item);
                            }}
                            >Approve</button>
                            <button className="w-2/4 mx-1 p-2 bg-red-500 text-white" onClick={() => {
                                // passing the clickd booking object
                                openModal(item);
                            }}>
                                Delete
                            </button>
                        </div>
                        </Td>
                    </Tr>)
                }
            </Tbody>
        </Table>
    );
};

export default AppointmentDataTable;