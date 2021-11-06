
import React from 'react';
import { BrowserRouter, Route, Switch as RouteSwitch } from 'react-router-dom';
import AuthProvider from '../../../Contexts/AuthProvider';
import DataProvider from '../../../Contexts/DataProvider';
import About from "../../About/About";
import CheckOut from '../../CheckOut/CheckOut';
import DashBoard from '../../DashBoard/DashBoard';
import Home from "../../Home/Home";
import NotFound from "../../NotFound/NotFound";
import Payment from '../../Payment/Payment';
import SignIn from '../../SignIn/SignIn';
import SignUp from '../../SignUp/SignUp';
import Success from "../../Success/Success";
import TrainingDetail from '../../TrainingDetail/TrainingDetail';
import Trainings from '../../Trainings/Trainings';
import NavBar from './NavBar/NavBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Navigation = () => {


    return (
        <DataProvider>
            <AuthProvider>
                <BrowserRouter>
                    <NavBar></NavBar>
                    <RouteSwitch>
                        {/* using exact keyword to match with exact path */}
                        <Route exact path="/"><Home></Home></Route>
                        <Route exact path="/home"><Home></Home></Route>
                        <Route exact path="/trainings"><Trainings></Trainings></Route>
                        <PrivateRoute exact path="/payment/:type/:itemId"><Payment></Payment></PrivateRoute>
                        <Route exact path="/dashboard"><DashBoard></DashBoard></Route>
                        <Route exact path="/checkout"><CheckOut></CheckOut></Route>
                        <Route exact path="/success"><Success></Success></Route>
                        <Route exact path="/about"><About></About></Route>
                        <Route exact path="/detail/:itemId"><TrainingDetail></TrainingDetail></Route>
                        <Route exact path="/signin"><SignIn></SignIn></Route>
                        <Route exact path="/signup"><SignUp></SignUp></Route>
                        <Route path="*"><NotFound></NotFound></Route>
                    </RouteSwitch>
                </BrowserRouter>
            </AuthProvider>
        </DataProvider>
    );
};

export default Navigation;