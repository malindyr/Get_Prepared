import React from 'react'
import { useState } from 'react'    //if State is to be present, useState has to be imported    

const JobListing = ({job}) => { /*takes job as prop / JobListing component receives job as a prop*/

    const [showFullDescription, setShowFullDescription]     //piece of state called sFD, setting to useState, pertaining to sFD, true/false value
    = useState(false);  //in parentheses, whatever is wanted as default

    let description = job.description;
    if(!showFullDescription){    //sFD is name of the state itself, setSFD is name of function we call to change that state
        description = description.substring(0,90) + '...';
    }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">

      <div className="mb-6">
        <div className="text-gray-600 my-2">{job.type}</div>
        <h3 className="text-xl font-bold">{job.title}</h3>
      </div>

      <div className="mb-5">
        {description}
      </div>

{/*more/less btn*/}
      <button 
      onClick={() => setShowFullDescription((prevState) => 
      !prevState)} 
      className='test-indigo-500 mb-5 hover:text-indigo-600'
      >{showFullDescription ? 'less' : 'more'}</button>

      <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <i className="fa-solid fa-location-dot text-lg"></i>
          {job.location}
        </div>
        <a
          href={`/job/${job.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
         Read More
        </a>
      </div>

    </div>
  </div>
  )
}

export default JobListing