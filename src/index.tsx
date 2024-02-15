import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import theme from './chakra/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home.page'
import Layout from './layout/index.layout'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout children={<HomePage/>}/>} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </HelmetProvider>
    </ReduxProvider>
  </React.StrictMode>
)