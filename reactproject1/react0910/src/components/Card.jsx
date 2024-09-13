import React from 'react'

//card takes props children and background (bg)
//card has default of gray background and is wrapped around {children}

const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

//card is exported to homecards, card singular
export default Card