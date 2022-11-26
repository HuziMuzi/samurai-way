import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppThunk} from "./Redux/app-reducer";
import {AppRootState} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


type AppPropsType = {
    initialized: boolean
    initializeAppThunk: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppThunk()
    }


    render() {

        // console.log(this.props.initialized)
        if (!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}
                        />
                        <Route path={'/Dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/Users'} render={() => <UsersContainer/>}/>
                        <Route path={'/Music'} component={Music}/>
                        <Route path={'/News'} component={News}/>
                        <Route path={'/Settings'} component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (state: AppRootState) => {
    return {
        initialized: state.appReducer.initialized
    }
}

export default connect(mapDispatchToProps, {initializeAppThunk})(App);
