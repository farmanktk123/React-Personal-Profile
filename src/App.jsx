import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Courses from './components/Courses';
import Params from './components/Params'
import HtmlCourse from "./components/HtmlCourse";
import JavascriptCourse from './components/JavaScriptCourse';
import TailwindCourse from './components/TailwindCourse';
import ReactCourse from './components/ReactCourse';
import CssCourse from './components/CssCourse';
import NotFound from "./components/NotFound";


const router = createBrowserRouter (

  [
    // HomePage Route
    {
      path: '/',
      element:<HomePage />
    },

    // AboutPage Route
    {
      path: '/about',
      element:<AboutPage />
    },

    //ServicePage Route
    {
      path: '/services',
      element:<ServicesPage />
    },

    //ProjectsPage Route
    {
      path: '/projects',
      element: <ProjectPage />
    },

    //ContactPage Route
    {
      path: '/contact',
      element:<ContactPage />
    },

    //Parameter Route using Params()
    {
      path: '/student/:id',
      element: <Params />
    },

    //CoursesPage Route
    {
      path: '/courses',
      element: 
      <div>
        <Courses />
        </div>,
    },
    {
    path: '/courses/css',
    element:
    <div>
    <CssCourse />
    </div> ,
    },
    {
      path: '/courses/javascript',
      element: 
      <div>
      <JavascriptCourse />
    </div> ,
    },
    {
      path: '/courses/react',
      element: 
      <div>
      <ReactCourse />
    </div> ,
    },
    {
      path: '/courses/tailwind',
      element: 
      <div>
      <TailwindCourse />
    </div> ,
    },

    {
      path: '/courses/html',
      element:
      <div>
        <HtmlCourse />
      </div> ,
    },

    // NotFoundPage Route
    {
      path: '*',
      element: <NotFound />
    }
  

  ]
);

function App() {

  return (
    <div>
      
      <RouterProvider router = {router} />
    </div>
        
  )
}

export default App
