import '../styles/globals.css'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return <>
    <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-7MSB3S0DEM" />
    <Script
      id='google-analytics'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
  
        gtag('config', 'G-7MSB3S0DEM');`
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
