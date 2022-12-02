import './App.css';
import * as React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'
import ContactMe from './pages/ContactMe'
import Resume from './pages/Resume'
import NavMenu from './shared/NavMenu';

function App() {

  return (
    <div className="App">
      <div className="page">
        <div className="sidebar">
          <NavMenu />
        </div>
        <main>
          <article className="content">
            <Routes>
              <Route path="/" >
                <Route index element={<Index />} />
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
