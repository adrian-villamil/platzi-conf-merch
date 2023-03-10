import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import '../styles/components/App.css';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout/information' element={<Information />} />
            <Route path='/checkout/payment' element={<Payment />} />
            <Route path='/checkout/success' element={<Success />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
