import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Disk from "./disk/Disk";
import Profile from "./profile/Profile";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    <Routes>
                        <Route path="/registration" element={!isAuth ? <Registration/> : <Navigate to="/"/>}/>
                        <Route path="/login" element={!isAuth ? <Login/> : <Navigate to="/"/>}/>
                        <Route exact path="/" element={!isAuth ? <Navigate to="/login"/> : <Disk/>}/>
                        <Route exact path="/profile" element={!isAuth ? <Navigate to="/"/> : <Profile/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
