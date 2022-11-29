import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppThunk} from "./Redux/app-reducer";
import {AppRootState} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {Header} from "./components/Header/Header";


// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


type AppPropsType = {
    initialized: boolean
    initializeAppThunk: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppThunk()
    }


    render() {

        if (!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    {/*<HeaderContainer/>*/}
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/Profile/:userId?'} render={() => {
                            return <React.Suspense fallback={<div>Loading...</div>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}
                        />
                        <Route path={'/Dialogs'} render={() => withSuspense(<DialogsContainer/>)}

                        />
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
