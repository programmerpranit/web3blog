import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {load} from '../src/func'

function MyApp({ Component, pageProps }) {

  return <>
  <Navbar  />
  <Component  />
  </>
}

export default MyApp
