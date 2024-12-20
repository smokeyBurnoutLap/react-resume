import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <div>Under Maitenance</div>
    </>
  );
});

export default MyApp;
