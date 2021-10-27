
import React from 'react';
import { BrowserRouter, Route, Switch as RouteSwitch } from 'react-router-dom';
import AuthProvider from '../../../Contexts/AuthProvider';
import DataProvider from '../../../Contexts/DataProvider';
import About from "../../About/About";
import Consultation from "../../Consultation/Consultation";
import Home from "../../Home/Home";
import NotFound from "../../NotFound/NotFound";
import SignIn from '../../SignIn/SignIn';
import SignUp from '../../SignUp/SignUp';
import SpecialClasses from '../../SpecialClasses/SpecialClasses';
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
                        <PrivateRoute exact path="/consultation"><Consultation></Consultation></PrivateRoute>
                        <Route exact path="/success"><Success></Success></Route>
                        <PrivateRoute exact path="/specialclass"><SpecialClasses></SpecialClasses></PrivateRoute>
                        <Route exact path="/about"><About></About></Route>
                        <Route exact path="/detail/:trainingId"><TrainingDetail></TrainingDetail></Route>
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