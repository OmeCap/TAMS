import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'react-router-dom/node_modules/history';
import rootReducer from './reducers/index.js';
import Root from './components/Root.js';
import SignUpForm from './components/SignUpForm.js';
import { fetchAuthenticated } from './actions/account.js';
import './index.css';
import TaApplication from './components/taApplication.js';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

// Prevent direct access for unauthenticated users
const AuthRoute = ({ children, currentUser }) => {
    return currentUser ? <Navigate to="/" replace /> : children;
};

store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Routes>
                        <Route exact path='/' element={<Root />} />
                        <Route 
                            path='/ta-application' 
                            // element={ !store.getState().account.loggedIn ? <Navigate to="/" replace /> : <TaApplication /> } // Prevent direct access for unauthenticated users
                            element={<AuthRoute currentUser={!store.getState().account.loggedIn} >
                                <TaApplication />
                            </AuthRoute>}
                        />
                        <Route path='/sign-up' element={<SignUpForm />} />
                    </Routes>
                </BrowserRouter>
            </Provider>,
            document.getElementById('root')
        );
    });
