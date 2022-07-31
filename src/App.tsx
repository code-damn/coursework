import React from 'react';
import { Route, Routes } from 'react-router';
import NewsList from './pages/NewsList/NewsList';
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<NewsList />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
