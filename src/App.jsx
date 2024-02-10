import React, { useEffect } from 'react'
import "./App.css"
import { Box, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './app/Home'
import BottomTabs from './components/BottomTabs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from 'universal-cookie'


export default function App() {

  useEffect(() => {
    const cookies = new Cookies();
    cookies.set("react", 'this works', { path: "/" })
  }, [])

  return (
    <ChakraProvider>
      <Box position={'relative'}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <BottomTabs />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  )
}
