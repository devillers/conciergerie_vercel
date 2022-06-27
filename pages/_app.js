import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';


function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
