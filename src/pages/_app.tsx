import '../styles/global.css'
import type { AppType } from 'next/app';
import { trpc } from '../../ApiConfig/trpc';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from '../store';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
};

export default trpc.withTRPC(MyApp);