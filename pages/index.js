import Head from 'next/head'
import Image from 'next/image'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import styles from '../styles/Home.module.css'

export default function Home() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <div className={styles.container}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />

      <button onClick={() => login()}>
        Sign in with Google 🚀{' '}
      </button>
    </div>
  )
}
