import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { render } from 'react-dom';
import { createBrowserHistory } from 'react-router-dom/node_modules/history';
import store from './store.js'
import Root from './components/Root.js';
import SignUpForm from './components/SignUpForm.js';
import { fetchAuthenticated } from './actions/account.js';
import './index.css';
import TaApplication from './components/taApplication.js';
import ProtectedScreen from './components/Test.js';

const history = createBrowserHistory();

// Prevent direct access for unauthenticated users
// const AuthRoute = ({ children, currentUser }) => {
//     return currentUser ? <Navigate to="/"  /> : children;
// };

store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Routes>
                        <Route exact path='/' element={<Root />} />
                        {/* <Route 
                            path='/ta-application' 
                            // element={ !store.getState().account.loggedIn ? <Navigate to="/" replace /> : <TaApplication /> } // Prevent direct access for unauthenticated users
                            element={<AuthRoute currentUser={store.getState().account.loggenIn} >
                                <TaApplication />
                            </AuthRoute>}
                        /> */}
                        <Route path='ta-application' element={<TaApplication />} />
                        <Route path='/sign-up' element={<SignUpForm />} />
                        <Route path='/protected' element={<ProtectedScreen />} />
                    </Routes>
                </BrowserRouter>
            </Provider>,
            document.getElementById('root')
        );
    });
