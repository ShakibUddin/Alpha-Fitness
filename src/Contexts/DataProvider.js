import React, { createContext } from 'react';
import useJson from '../Hooks/useJson';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const dataContext = useJson();
    return (
        <DataContext.Provider value={dataContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;