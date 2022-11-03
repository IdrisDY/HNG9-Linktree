import reactLogo from './assets/react.svg'
import './App.css'
import Mainlinks from './Components/mainlinks'
import Footer from './Components/footer'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ContactPage from './Components/Contact'
function App() {

  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path='/' element={
      <>
    <Mainlinks/>
    <Footer/>
      </>
    }
  />
         <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    </div>
    </Router>

  )
}

export default App
