import React from 'react'
import './index.css'
import Hero from "./pages/hero/Hero"
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Resume from './pages/resume/Resume'
import Projects from './pages/projects/Projects'
import Contacts from './pages/contact/Contacts'

function App() {
  return (
    
    <div className="App">
<body>
<Hero />
<Navbar/>
<About />
<Resume />
<Projects />
<Contacts />
 </body>
 </div>
  );
}

export default App;
