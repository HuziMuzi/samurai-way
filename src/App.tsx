import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppThunk} from "./Redux/app-reducer";
import {AppRootState} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {Header} from "./components/Header/Header";
import {Users} from "./components/Users/Users";
import  style from './App.module.scss'


import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

// const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


type AppPropsType = {
    initialized: boolean
    initializeAppThunk: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppThunk()
    }

// {/*<Route path={'/Dialogs'} render={() => withSuspense(<DialogsContainer/>)}*/}

    render() {

        if (!this.props.initialized) return <Preloader/>
        return (
                <div className={style.appWrapper}>
                    <Header/>
                    {!this.props.initialized  ?<Preloader/>
                        :
                        <div className={style.appWrapperContent}>
                            <Navbar/>
                            <div className={style.appContent}>
                                <Route path={'/' || '/login'} render={() => <Login/>}/>
                                <Route path={'/Profile/:userId?'} render={() => {
                                    return <React.Suspense fallback={<div>Loading...</div>}>
                                        <ProfileContainer/>
                                    </React.Suspense>
                                }}
                                />
                                <Route path={'/Dialogs'} render={() => <DialogsContainer/>}

                                />
                                <Route path={'/Users'} render={() => <Users/>}/>
                                <Route path={'/Music'} component={Music}/>
                                <Route path={'/News'} component={News}/>
                                <Route path={'/Settings'} component={Settings}/>
                            </div>
                        </div>
                    }

                </div>
        );
    }
}

const mapDispatchToProps = (state: AppRootState) => {
    return {
        initialized: state.appReducer.initialized
    }
}

export default connect(mapDispatchToProps, {initializeAppThunk})(App);
