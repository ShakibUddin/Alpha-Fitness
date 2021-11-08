import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useData from '../../../Hooks/useData';

const PurchaseDataTable = (props) => {
    const { purchases, fetchPurchases } = useData();

    useEffect(() => {
        fetchPurchases();
    }, []);

    if (purchases?.length === 0) return (<div className='w-full flex justify-center items-center h-96'>

        <Loader
            type="Bars"
            color="#3386FF"
            height={100}
            width={100}
            timeout={4000}
        />

    </div>);
    return (
        <Table className="w-11/12 bg-white shadow-md mx-auto mb-96">
            <Thead>
                <Tr >
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Item</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Prce</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">User</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Email</Th>
                    <Th className="text-center text-blue-500 font-bold text-sm uppercase py-3">Date</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    purchases.map(item => <Tr key={item._id}>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.itemName}</Td>
                        <Td className="text-green-600 text-xs text-center py-3">${item.itemPrice}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.name}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.email}</Td>
                        <Td className="text-gray-600 text-xs text-center py-3">{item.date}</Td>
                    </Tr>)
                }
            </Tbody>
        </Table>
    );
};

export default PurchaseDataTable;