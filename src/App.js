import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About'
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

      const [mode, setMode] = useState({
          color: 'black',
          backgroundColor: 'white'
      })

      const [btnText, setbtnText] = useState('Enable Dark Mode');
      const [theme, setTheme] = useState('light');
      const [alert, setAlert] = useState(null);

      const showAlert = (message, type)=> {
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(() => {
            setAlert(null)
          }, 1000);
      }
      
      const handleSwitch = () => {
        console.log("switch clicked...");
          if(mode.color === "black"){
            setMode({
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            })
            setbtnText('Disable Dark Mode');
            setTheme('dark');
            showAlert('Dark Mode Enabled', 'success');
          }
          else{
            setMode({
              color: 'black',
              backgroundColor: 'white'
            })
            setbtnText('Enable Dark Mode');
            setTheme('light');
            showAlert('Light Mode Enabled', 'success');
          }
      }


  return (

    <div className='main' style={mode}>
      <Router>
        <Navbar className="abc" title="TextUtils" menu1="Home" menu2="About" style={theme} toggleMode={handleSwitch} text={btnText}/>
        <Alert popMsg={alert}/>
        <Routes>
            <Route exact path="/" element={<TextForm title="React Text Utils App" style={theme}/>} />
            <Route exact path="/about" element={<About style={mode}/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
