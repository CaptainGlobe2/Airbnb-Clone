import React from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />}/>
          <Route  path="/" element={<Home />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App