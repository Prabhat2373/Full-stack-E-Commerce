import type { AppType } from 'next/app';
import { trpc } from '../../utils/trpc';
import { Provider } from 'react-redux'
import { store } from '../store';
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default trpc.withTRPC(MyApp);