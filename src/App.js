// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./component/Header";
import About from "./component/About";
import Wedo from "./component/Wedo";
import Ourproduct from "./component/Ourproduct";
import Journey from "./component/Journey";
import Network from './component/Network';
import Contact from './component/Contact';

import Footer from './component/Footer';
import Team from './component/Team';
import {Menu} from './utill/Menu';




const App=()=> {
  React.useEffect(() => {
    Menu(); 
  }, []);
  return (
    <div className="App">
      <Header />
<About/>
<Wedo/>
<Ourproduct/>
<Journey/>
<Team/>
<Network/>
<Contact/>
<Footer/>
    </div>
  );

}

export default App;
