import React from 'react'
import PageContainer from './container/PageContainer'
import Header from './components/Header.jsx'
import './App.css'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import RouterConfig from './config/RouterConfig.jsx'
import Loading from './components/Loading.jsx'
const App = () => {

  return (
    <Provider store={store}>
      <div className="app">   <Loading /> 
        <PageContainer>
          <Header />
          <RouterConfig /> 
       
        </PageContainer>
      </div>
    </Provider>
  )
}
export default App
