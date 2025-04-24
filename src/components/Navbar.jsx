import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebarHam } from "../redux/slice/uiSlice"

const Navbar = ({ path,display}) => {
    const {sidebarHam} =useSelector((state)=>state.ui)
    const dispatch = useDispatch()
    return (
        <nav className={`flex items-center sm:ml-1 p-2 shadow-md border border-gray-300 w-full h-[66px]`}>
            <div onClick={() => dispatch(setSidebarHam(true))} className={`mr-3 sm:hidden ${display}`}>      
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
                        <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
            </div>
            <img className='w-12 h-12 mx-3' src={path} alt="" />
            <h1 className='text-2xl font-bold'>VAULTiNO</h1>
        </nav>
    )
}

export default Navbar