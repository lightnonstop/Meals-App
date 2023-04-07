import React from 'react';
import './App.css';
import { useGlobalContext } from './context.jsx';
import Search from './components/Search.jsx';
import Meals from './components/Meals.jsx';
import Modal from './components/Modal.jsx';
import Favorites from './components/Favorites.jsx';
const App = () => {
  const {showModal, favourites} = useGlobalContext();
  return (
    <main>
      <Search />
      {favourites.length  > 0 &&  <Favorites />} 
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App
