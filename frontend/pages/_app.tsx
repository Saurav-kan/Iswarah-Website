// File: pages/_app.tsx
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'; // if you have global styles
import Navbar from './components/navagation'; // if you have a navigation component

export default function App({ Component, pageProps }: AppProps) {
  return (
    // This makes `useSession()` work in any page/component
    <SessionProvider session={(pageProps as any).session}>
      <Navbar /> {/* Include your navigation component here */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
