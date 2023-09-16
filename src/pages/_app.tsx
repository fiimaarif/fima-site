import '@/styles/globals.css'
import '@/styles/stepper.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return <Component {...pageProps} />
}
