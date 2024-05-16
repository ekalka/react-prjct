import React  from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import { About } from '../components/aboutComp';
import { Home } from '../components/homeComp';
import PdfForm from '../components/pdfComp';
import { Projects } from '../components/projectComp';
import { Students } from '../components/studComp';
import { HOME_ROUTE, STUD_ROUTE, ABOUT_ROUTE, PRJ_ROUTE, PDF_ROUTE } from './configs';
import { useAuth } from '../hooks/useAuth';

export const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();
  
  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: PRJ_ROUTE, element: <Projects /> },
    { path: HOME_ROUTE, element: <Home/> },
    { path: PDF_ROUTE, element: <PdfForm/> },
  ];

  const authPath: RouteObject[] = isAuth
    ? [{ path: STUD_ROUTE, element: <Students /> }]
    : [];
    

  const resultPaths: RouteObject[] = basedPath.concat(authPath);
  return useRoutes(resultPaths);
};