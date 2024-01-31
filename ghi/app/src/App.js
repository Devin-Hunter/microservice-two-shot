import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import HatsList from './HatsList';
import HatForm from './HatForm';

function App() {
  const [hats, setHats] = useState([]);

  const getHats = async () => {
    const hatUrl = 'http://localhost:8090/api/locations';
    const hatResponse = await fetch(hatUrl);

    if (hatResponse.ok) {
      const data = await hatResponse.json();
      const hats = data.hats;
      setHats(hats);
    }
  }

  useEffect( () => {
    getHats();
  }, [
    getHats,
  ]
  )

  console.log("Hats:", hats);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="hats">
            <Route path="" element={<HatsList hats={hats} getHats={getHats} />}/>
            <Route path="new" element={<HatForm getHats={getHats} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
