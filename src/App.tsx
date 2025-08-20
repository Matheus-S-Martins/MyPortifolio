import './App.css'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import NavBar from './Components/NavBar'
import MyWork from './Pages/MyWork'
import Contact from './Pages/Contact'

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      {/* <MyWork/> */}
      <Contact/>
    </div>
  )
}

export default App
