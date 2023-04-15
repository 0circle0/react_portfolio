import './App.css';
import React, { useMemo } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import NavMenu from './components/NavMenu/NavMenu';
import getNavItems from './functions/getNavItems';

const App = () => {

  const routes = useMemo(() => getNavItems(), []);

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
                {routes.map(({ element, path }) => <Route key={path} index={path.length === 0} path={path} element={element} />)}
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
