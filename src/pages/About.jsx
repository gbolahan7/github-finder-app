import React from 'react'

export default function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder App</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app integrated with Tailwind CSS to search GitHub profiles and view profile details using the Github API.
        
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
         By:
        <a className='text-white' href='https://www.linkedin.com/in/abass-durodola'>
          Abass Durodola
        </a>
      </p>
    </div>
  )
}
