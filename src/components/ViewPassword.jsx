import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deletePassword, setForm, updatePassword, togglepasswordView } from '../redux/slice/passwordSlice';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

const ViewPassword = () => {
    const [edit, setedit] = useState(false) 
    const { uid } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { storedPassword, form, passwordView } = useSelector((state) => state.passwords)

    const selected = storedPassword.find((item) => item.id === uid)

    const handleEdit = () => {
        setedit(true)
        dispatch(setForm(selected));
    }

    const handleChange = (e) => {
        dispatch(setForm({ ...form, [e.target.id]: e.target.value }))
    }

    const handleUpdate = () => {
        dispatch(updatePassword(form));
        setedit(false);
        toast("Password Updated")
    };

    const copytoClipboard=(text)=>{
        navigator.clipboard.writeText(text);
        toast("Copied to Clipboard")
    }

    const deletePass = (uid) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this password?");
        if (confirmDelete) {
            dispatch(deletePassword(uid));
            navigate('/');
            toast("Password Deleted")
        }
    }

    return (
        <>
            <Navbar display={"hidden"} path={"/logo.png"} />
            <div style={{ height: "calc(100vh - 70px)" }}
                className="w-[100vw] m-1 mt-1 shadow-md border border-gray-300 flex items-center justify-center bg-linear-to-b from-neutral-500 to-neutral-900  relative">

                {edit ? ("") : (
                    <Link onClick={() => dispatch(togglepasswordView(false))} to="/" className="text-white flex items-center gap-2 w-fit px-4 py-2 rounded-full hover:bg-zinc-100 group hover:text-zinc-900 absolute top-5 sm:top-10 left-5 sm:left-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none" className='text-white group-hover:text-zinc-900'>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M13.5 16C13.5 16 10.5 13.054 10.5 12C10.5 10.9459 13.5 8 13.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className='font-medium'>Go Back</span>
                    </Link>)}

                {edit ? (<div className='p-1 sm:p-5 shadow-md border border-gray-300 rounded-2xl
                                flex flex-col bg-white'>
                    <div className='flex flex-col w-fit gap-3'>
                        <div className='flex items-center m-2'>
                            <label className='w-25 sm:w-35' htmlFor="title">Website  : </label>
                            <input onChange={handleChange} className="w-fit sm:w-full px-4 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm" type="text" value={form.title} name="" id="title" />
                            <p className='text-red-400 text-sm pl-3'>{form.title.trim() === "" ? "*Required" : ""}</p>
                        </div>

                        <div className='flex items-center m-2'>
                            <label className='w-25 sm:w-35' htmlFor="site">Address  : </label>
                            <input onChange={handleChange} className="w-fit sm:w-full px-4 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm" type="text" value={form.site} name="" id="site" />
                            <p className='text-red-400 text-sm pl-3'>{form.site.trim() === "" ? "*Required" : ""}</p>
                        </div>

                        <div className='flex items-center m-2'>
                            <label className='w-25 sm:w-35' htmlFor="username">Username : </label>
                            <input onChange={handleChange} className="w-fit sm:w-full px-4 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm" type="text" value={form.username} name="" id="username" />
                            <p className='text-red-400 text-sm pl-3'>{form.username.trim() === "" ? "*Required" : ""}</p>
                        </div>

                        <div className='flex items-center m-2'>
                            <label className='w-25 sm:w-35' htmlFor="password">Password  : </label>
                            <input onChange={handleChange} className="w-fit sm:w-full px-4 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm" type="text" value={form.password} name="" id="password" />
                            <p className='text-red-400 text-sm pl-3'>{form.password.trim() === "" ? "*Required" : ""}</p>
                        </div>

                        <div className='flex items-center m-2'>
                            <label className='w-25 sm:w-35' htmlFor="note">Note  : </label>
                            <input placeholder='Optional...' onChange={handleChange} className="w-fit sm:w-full px-4 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm" type="text" value={form.note} name="" id="note" />
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button disabled={!(form.site && form.username && form.password && form.title)} className='disabled:bg-gray-300 p-2 px-10 m-2 mr-5 rounded-full w-fit bg-yellow-300  hover:bg-yellow-400 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={() => handleUpdate()}>Update</button>
                        <button className='p-2 px-10 m-2 mr-5 rounded-full w-fit bg-yellow-300  hover:bg-yellow-400 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={() => { dispatch(setForm({ id: "", title: "", site: "", username: "", password: "", note: "" })); setedit(false) }}>Cancel</button><br />
                    </div>

                </div>) : (
                    <div className=' p-3 sm:p-10 shadow-md border border-gray-300 rounded-2xl 
                                flex flex-col items-center  gap-3 bg-white'>
                        <div className='flex flex-col w-fit gap-3'>
                            <p>Website  :   {selected.title}</p>
                            <p>Address  :   <a href={`https://${selected.site}`} target="_blank" className='underline'>{selected.site}</a></p>
                            <div className='flex gap-2'>
                                <p>Username  :   {selected.username}</p>
                                <button className='p-1 cursor-pointer' onClick={() => copytoClipboard(selected.username)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" className='hover:scale-105 transition-transform duration-200 ease-in-out'>
                                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='flex gap-2'>
                                {passwordView === true ? (
                                    <p>Password  :   {selected.password}</p>
                                ) : (
                                    <p>Password  :   {"•".repeat(selected.password.length)}</p>
                                )}

                                {passwordView === true ? (

                                    <svg onClick={() => dispatch(togglepasswordView(!passwordView))} className='cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M3 3L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg onClick={() => dispatch(togglepasswordView(!passwordView))} className='cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                )}
                                <button className='p-1 cursor-pointer' onClick={() => copytoClipboard(selected.password)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" className='hover:scale-105 transition-transform duration-200 ease-in-out'>
                                        <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <p>Note  :   {selected.note}</p>
                        </div>

                        <div className='flex justify-center'>
                            <button className='p-2 px-10 m-2 mr-5 rounded-full w-fit bg-yellow-300 hover:bg-yellow-400 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={() => deletePass(selected.id)}>Delete</button>
                            <button className='p-2 px-12 m-2 ml-5 rounded-full w-fit bg-yellow-300 hover:bg-yellow-400 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={() => handleEdit()}>Edit</button><br />
                        </div>


                    </div>
                )}


            </div>
        </>
    )
}

export default ViewPassword