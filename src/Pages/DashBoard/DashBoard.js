import { faCalendarCheck, faCreditCard, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import AppointmentDataTable from './AppointmentDataTable/AppointmentDataTable';
import PurchaseDataTable from './PurchaseDataTable/PurchaseDataTable';
import QueryDataTable from './QueryDataTable/QueryDataTable';

const DashBoard = () => {
    const [selectedTab, setSelectedTab] = useState("Purchases");

    const tabs = [
        {
            name: "Purchases",
            icon: faCreditCard,
            component: <PurchaseDataTable></PurchaseDataTable>
        },
        {
            name: "Appointments",
            icon: faCalendarCheck,
            component: <AppointmentDataTable></AppointmentDataTable>
        },
        {
            name: "Queries",
            icon: faFile,
            component: <QueryDataTable></QueryDataTable>
        }
    ]
    const handleTabSelection = (e) => {
        setSelectedTab(e.target.innerText);
    }
    return (
        <Tabs className="w-full">
            <TabList className="group w-11/12 mx-auto flex flex-wrap lg:justify-start md:justify-start justify-center bg-blue-500 shadow-md pt-4 px-2 mt-8">
                {
                    tabs.map((tab, index) => <Tab key={index} onClick={(e) => { handleTabSelection(e) }}>
                        <div className={selectedTab === tab.name ? `lg:rounded-t-md md:rounded-t-md rounded-0 select-none text-md font-bold p-3 cursor-pointer text-center bg-white text-blue-500 flex-grow` : ` select-none text-md font-bold p-3 cursor-pointer text-center text-white flex-grow lg:rounded-t-md md:rounded-t-md rounded-0`}><FontAwesomeIcon className="mr-2" icon={tab.icon} />{tab.name}</div>
                    </Tab>)
                }
            </TabList>

            {tabs.map((tab, index) => <TabPanel key={index}>
                {tab.component}
            </TabPanel>)}
        </Tabs>
    );
};

export default DashBoard;