import React from 'react';
import Loading from 'react-loading-animation';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Swal from 'sweetalert2';
import useData from '../../../Hooks/useData';

const QueryDataTable = () => {
    const { queries, handleQueryReply, handleDeleteQuery } = useData();

    function openModal(query) {
        Swal.fire({
            title: 'Are you sure?',
            text: `Are you sure you want to delete ${query.emails}'s query? You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteQuery(query._id);
                Swal.fire(
                    'Deleted!',
                    'Query has been deleted.',
                    'success'
                )
            }
        })
    }

    if (queries?.length === 0) return (<div className='w-full flex justify-center items-center h-96'>
        <Loading>

        </Loading>
    </div>);
    return (
        <Table className="w-11/12 my-8 bg-white shadow-md mx-auto">
            <Thead>
                <Tr className="shadow-md">
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Email</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Query</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3"></Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    queries.map(item => <Tr key={item._id}>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.email}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.query}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3"><div className="flex justify-center">
                            <button className="w-2/4 mx-1 p-2 bg-green-500 text-white" onClick={() => {
                                //passing clicked booking _id
                                handleQueryReply(item._id);
                            }
                            }>Reply</button>
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

export default QueryDataTable;