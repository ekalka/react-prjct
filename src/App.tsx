import React from 'react';
import { Navbar } from "./core/components/navbarComp";
import { MainRouter } from "./core/routing/MainRouter";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainRouter />
    </>
  );
};

export default App;
