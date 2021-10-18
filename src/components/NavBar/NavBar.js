import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { BrowserRouter, Link, Route, Switch as RouteSwitch } from 'react-router-dom';
import About from "../About/About";
import Consultation from "../Consultation/Consultation";
import Home from "../Home/Home";
import Membership from "../Membership/Membership";
import NotFound from "../NotFound/NotFound";
import Programs from "../Programs/Programs";
import Progress from "../Progress/Progress";

const NavBar = () => {
    const navigation = [
        { name: 'Home', to: '/home' },
        { name: 'Programs', to: '/programs' },
        { name: 'Consultation', to: '/consultation' },
        { name: 'Progress', to: '/progress' },
        { name: 'Membership', to: '/membership' },
        { name: 'About', to: '/about' },
    ];
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <BrowserRouter>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                {/* logo code */}
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <p className="text-2xl text-white font-bold">Alpha Fitness</p>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.to}
                                                    className={classNames(
                                                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-white p-2 px-4 rounded-md font-semibold text-red-500">Join</button>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <RouteSwitch>
                {/* using exact keyword to match with exact path */}
                <Route exact path="/"><Home></Home></Route>
                <Route exact path="/home"><Home></Home></Route>
                <Route exact path="/programs"><Programs></Programs></Route>
                <Route exact path="/consultation"><Consultation></Consultation></Route>
                <Route exact path="/membership"><Membership></Membership></Route>
                <Route exact path="/progress"><Progress></Progress></Route>
                <Route exact path="/about"><About></About></Route>
                <Route path="*"><NotFound></NotFound></Route>
            </RouteSwitch>
        </BrowserRouter>
    );
};

export default NavBar;