import React from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import About from '../About/About';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

const NavBar = () => {
    return (
        <div className="flex flex-col justify-center flex-wrap bg-black">
            <Router>
                <div className="w-11/12 mx-auto  flex lg:flex-row flex-col my-4 sm:items-center justify-between">
                    <h1 className="text-3xl font-extrabold text-white text-center">Alpha Fitness</h1>
                    <nav>
                        <ul className="flex flex-wrap justify-center">
                            <li className="mr-1">
                                <Link className="inline-block py-2 px-4 text-white font-semibold" to="/home">Home</Link>
                            </li>
                            <li className="mr-1">
                                <Link className="inline-block py-2 px-4 text-white  font-semibold" to="/courses">Courses</Link>
                            </li>
                            <li className="mr-1">
                                <Link className="inline-block py-2 px-4 text-white  font-semibold" to="/trainers">Trainers</Link>
                            </li>

                            <li className="mr-1">
                                <Link className=" inline-block py-2 px-4 text-white font-semibold" to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    {/* using exact keyword to match with exact path */}
                    <Route exact path="/"><Home></Home></Route>
                    <Route exact path="/home"><Home></Home></Route>
                    <Route exact path="/courses"><Courses></Courses></Route>
                    <Route exact path="/about"><About></About></Route>
                    <Route path="*"><NotFound></NotFound></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default NavBar;