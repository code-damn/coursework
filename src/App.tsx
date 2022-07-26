import React from 'react';
import { Route, Routes } from 'react-router';
import NewsList from './pages/NewsList/NewsList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NewsList />} />
      </Routes>
    </div>
  );
}

export default App;
