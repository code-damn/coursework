import React from 'react';
import { Route, Routes } from 'react-router';

import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';

import Home from './pages/Home/Home';
import NewsList from './pages/NewsList/NewsList';
import ReadNews from './pages/ReadNews/ReadNews';
import Contacts from './pages/Contacts/Contacts';
import CatalogApartaments from './pages/CatalogApartements/CatalogApartaments';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';

import './styles/index.scss';



function App() {
	
	return (
		<div className="App">
			<Header/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/news" element={<NewsList />} />
				<Route path="/readnews" element={<ReadNews />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/catalog" element={<CatalogApartaments />} />
				<Route path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
