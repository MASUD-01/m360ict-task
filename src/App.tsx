import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import ShowSingleLaunch from './Component/ShowSingalLaunch/ShowSingleLaunch';
import ShowAllLaunch from './Component/ShowAllLaunch/ShowAllLaunch';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ShowAllLaunch></ShowAllLaunch>}></Route>
        <Route path="/launch/:userId" element={<ShowSingleLaunch></ShowSingleLaunch>}></Route>
      </Routes>
    </>
  );
}

export default App;