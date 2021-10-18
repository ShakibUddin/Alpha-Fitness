
import React from 'react';
import { BrowserRouter, Route, Switch as RouteSwitch } from 'react-router-dom';
import AuthProvider from '../../Contexts/AuthProvider';
import DataProvider from '../../Contexts/DataProvider';
import About from "../About/About";
import Consultation from "../Consultation/Consultation";
import Home from "../Home/Home";
import NavBar from '../NavBar/NavBar';
import NotFound from "../NotFound/NotFound";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Progress from "../Progress/Progress";
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import Success from "../Success/Success";
import TrainingDetail from '../TrainingDetail/TrainingDetail';

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
                        <PrivateRoute exact path="/consultation"><Consultation></Consultation></PrivateRoute>
                        <Route exact path="/success"><Success></Success></Route>
                        <PrivateRoute exact path="/progress"><Progress></Progress></PrivateRoute>
                        <Route exact path="/about"><About></About></Route>
                        <Route exact path="/detail/:trainingId"><TrainingDetail></TrainingDetail></Route>
                        <Route exact path="/signin"><SignInForm></SignInForm></Route>
                        <Route exact path="/signup"><SignUpForm></SignUpForm></Route>
                        <Route path="*"><NotFound></NotFound></Route>
                    </RouteSwitch>
                </BrowserRouter>
            </AuthProvider>
        </DataProvider>
    );
};

export default Navigation;