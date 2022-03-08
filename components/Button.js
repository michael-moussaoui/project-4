import React from 'react'

export const Button = (props) => {
  return (
    <button className="navbar_burger flex absolute float right-6 top-5 w-10 h-10  md:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {props.children}
                </button>
  )
}
