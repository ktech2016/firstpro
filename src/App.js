
//jshint esversion:6

import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

function App() {
    return (
        <div className = "App" >
        <header className = "App-header">
            <Nav/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>}/>
            </Routes>
         </header>
        </div>
    );
}

export default App;