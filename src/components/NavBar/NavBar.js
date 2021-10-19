import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
    const { user, logout } = useAuth();
    const navigation = [
        { name: 'Home', to: '/home' },
        { name: 'Consultation', to: '/consultation' },
        { name: 'HIIT', to: '/hiitclass' },
        { name: 'Success', to: '/success' },
        { name: 'About', to: '/about' },
    ];
    const dummyImage = "http://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png";
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div>
            <Disclosure as="nav" className="bg-gray-700 w-full">
                {({ open }) => (
                    <>
                        <div className="w-full mx-auto px-2">
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
                                            ))

                                            }
                                        </div>
                                    </div>
                                </div>
                                {user.email && <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative z-10">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user.photo ? user.photo : dummyImage}
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition

                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {() => (
                                                        user.name ? <p className="text-black p-2">{user.name}</p> : <p className="text-black p-2">{user.email}</p>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link className="p-2 font-semibold text-red-500 uppercase" onClick={logout} to="/home">Logout</Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>}
                                {!user.email && <Link className="w-20 bg-white p-2 rounded-md font-semibold uppercase text-center text-red-500" to="/signin">Join</Link>}
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
        </div>
    );
};

export default NavBar;