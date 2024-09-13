//rafce
//rafc
//rfc

//importing components like lego bricks
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
//import Navbar from './components/Navbar'
//import Hero from './components/Hero'
//import HomeCards from './components/HomeCards'
//import JobListings from './components/JobListings'
//import ViewAllJobs from './components/ViewAllJobs'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage/>}/>)
)

const App = () => {
  return <RouterProvider router={router}/>
}

//this looks neat
/*const App = () => {
  return (
   <>   
   <Navbar/>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
   
    </>
  );
};*/

export default App //app is exported to index.html
