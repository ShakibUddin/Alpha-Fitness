import { faCreditCard, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import PurchaseDataTable from './PurchaseDataTable/PurchaseDataTable';
import QueryDataTable from './QueryDataTable/QueryDataTable';

const DashBoard = () => {

    return (
        <Tabs className="w-full">
            <TabList className="group w-full flex flex-wrap justify-center bg-blue-500 pt-4 px-2">
                <Tab>
                    <div className="select-none text-md font-bold p-3 cursor-pointer text-center flex-grow"><FontAwesomeIcon className="mr-2" icon={faCreditCard} />Purchases</div>
                </Tab>
                <Tab>
                    <div className="select-none text-md font-bold p-3 cursor-pointer text-center flex-grow"><FontAwesomeIcon className="mr-2" icon={faFile} />Queries</div>
                </Tab>
            </TabList>

            <TabPanel>
                <PurchaseDataTable></PurchaseDataTable>
            </TabPanel>
            <TabPanel>
                <QueryDataTable></QueryDataTable>
            </TabPanel>
        </Tabs>
    );
};

export default DashBoard;