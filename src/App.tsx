import React from 'react';
import { Route, Routes } from 'react-router';
import NewsList from './pages/NewsList/NewsList';
import Header from './shared/Header/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<NewsList />} />
      </Routes>
    </div>
  );
}

export default App;
