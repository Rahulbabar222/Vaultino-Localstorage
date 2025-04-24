import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addPassword, toggleAdd, togglepasswordView, setForm } from '../redux/slice/passwordSlice';
import { toast } from 'react-toastify';

const Addnew = () => {
    
    const dispatch = useDispatch()
    const {passwordView, form } = useSelector((state) => state.passwords);

    const handleChange = (e) => {
        dispatch(setForm({ ...form, [e.target.name]: e.target.value, id: uuidv4() }));
    }
    const save = () => {
        dispatch(addPassword(form));
        dispatch(setForm({ id: "",title:"", site: "", username: "", password: "", note: "" }));
        toast("New Password Added")
    }

    return (
        <div className='flex flex-col w-100 p-5 border-1 border-gray-300 shadow-md bg-linear-to-b from-yellow-100 to-zinc-100 rounded-2xl '>
            <h3 className='text-xl mb-2'>Add new Password</h3>
            <label htmlFor='title'>Website</label>
            <input onChange={handleChange} value={form.title} className='px-4 py-2 my-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm w-full' type="text" name="title" id="title" />
            <label htmlFor='site'>Address</label>
            <input onChange={handleChange} value={form.site} className='px-4 py-2 my-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm w-full' type="text" name="site" id="site" />
            <label htmlFor='username'>Username</label>
            <input onChange={handleChange} value={form.username} className='px-4 py-2 my-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm w-full' type="text" name="username" id="username" />
            <label htmlFor='password'>Password</label>
            <div className='relative'>
                <input onChange={handleChange} value={form.password} className='px-4 py-2 my-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm w-full' type={passwordView === true ? "text" : "password"} name="password" id="password" />
                {passwordView === true ? (
                    <svg onClick={() => dispatch(togglepasswordView(!passwordView))} className='absolute right-2 top-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#71717b" fill="none">                            
                        <path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M3 3L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg onClick={() => dispatch(togglepasswordView(!passwordView))} className='absolute right-2 top-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#71717b" fill="none">
                        <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                )}

            </div>
            <label htmlFor='note'>Note</label>
            <input placeholder='Optional...' onChange={handleChange} value={form.note} className='px-4 py-2 my-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-500 shadow-sm w-full h-20' type="text" name="note" id="note" />

            <div className='flex'>
                <button disabled={!(form.site && form.username && form.password && form.title)} onClick={() => { save(); dispatch(toggleAdd(false)); }} className='disabled:bg-gray-300 w-20 bg-amber-300 mr-2 px-2 py-1 text-zinc-700 rounded-full hover:bg-amber-400 hover:scale-105 cursor-pointer'>Save</button>
                <button onClick={() => { dispatch(toggleAdd(false)); dispatch(setForm({ id: "",title:"", site: "", username: "", password: "", note: ""})); }} className='w-20 bg-amber-300 mr-2 px-2 py-1 text-zinc-700 rounded-full hover:bg-amber-400 hover:scale-105 cursor-pointer'>Cancel</button>
            </div>
        </div>
    )
}

export default Addnew