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

store.dispatch(fetchAuthenticated())
    .then(() => {
        render(
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Routes>
                        <Route exact path='/' element={<Root />} />
                        <Route path='/ta-application' element={<TaApplication />} />
                        <Route path='/sign-up' element={<SignUpForm />} />
                    </Routes>
                </BrowserRouter>
            </Provider>,
            document.getElementById('root')
        );
    });
