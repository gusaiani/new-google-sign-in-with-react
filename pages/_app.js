import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/globals.css'

const clientId = "452795776568-6n0he2jkh824kj8j8nvv74ia2dvvtue7.apps.googleusercontent.com";

function MyApp({ Component, pageProps }) {
  return <GoogleOAuthProvider clientId={clientId}>
    <Component {...pageProps} />
  </GoogleOAuthProvider>
}

export default MyApp
