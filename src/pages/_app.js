import '@/styles/globals.scss'
import { Oxygen } from 'next/font/google'
import Layout from '@/components/layout/layout'
import { useState, useEffect } from 'react'

const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})


export default function App({ Component, pageProps }) {


/*   const { pathname } = useLocation();

  useEffect(() => {
    setActive(false); // Close the navigation panel
  }, [pathname]); */
  return (
    <Layout className={oxygen.className}>
      <Component {...pageProps} />
    </Layout>
  
  )
}
