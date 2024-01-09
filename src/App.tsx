import React from 'react';
import { Navbar } from "./core/components/navbarComp";
import { MainRouter } from "./core/routing/MainRouter";
import {GlobalStyles} from "./GlobalStyles";
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles/>
          <Navbar />
          <MainRouter />
    </>
  );
};

export default App;
