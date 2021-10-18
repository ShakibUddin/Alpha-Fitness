import React, { createContext } from 'react';
import useTrainingJson from '../Hooks/useTrainingJson';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const dataContext = useTrainingJson();
    return (
        <DataContext.Provider value={dataContext}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;