import './App.css';
import * as React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ContactMe from './components/Pages/ContactMe';
import Resume from './components/Pages/Resume';
import NavMenu from './components/NavMenu/NavMenu';


const App =() => {

  return (
    <div className="App">
      <div className="page">
        <div className="sidebar hideOnPrint">
          <NavMenu />
        </div>
        <main>
          <article className="content">
            <Routes>
              <Route path="/" >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contactme" element={<ContactMe />} />
                <Route path="resume" element={<Resume />} />
              </Route>
            </Routes>
          </article>
        </main>
        <Outlet />
      </div >

    </div>
  );
}

export default App;
