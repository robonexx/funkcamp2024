import Layout from '@/components/layout/layout'
import '@/styles/globals.scss'


export default function App({ Component, pageProps }) {


/*   const { pathname } = useLocation();

  useEffect(() => {
    setActive(false); // Close the navigation panel
  }, [pathname]); */
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
}
