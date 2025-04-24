import React,{useState} from 'react'


const Disclaimer = () => {
    const [Disclaimer, setDisclaimer] = useState(true)
    return (
        <>
        {Disclaimer && <div className='fixed h-screen w-screen flex justify-center items-center top-0 left-0 bg-gray-700/50' >

            <div className='flex flex-col items-center w-100 p-5 border-1 border-gray-300 shadow-md bg-linear-to-b from-yellow-100 to-zinc-100 rounded-2xl relative '>
                <h1 className='text-2xl font-bold p-2'>Disclaimer</h1>
                <p className='p-2'>⚠️ This version of Vaultino is for demonstration purposes only.
                    Passwords are stored locally in your browser using localStorage and are NOT encrypted or synced across devices.
                    Anyone with access to this browser can view your saved data.
                </p>
                <p className='p-2 mb-5'>
                    🔐 Do NOT store real or sensitive credentials here.
                    For a secure version with user authentication and backend encryption, check out the full Vaultino version.
                </p>
                <div onClick={()=>setDisclaimer(false)} className='flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M15 9L9 14.9996M15 15L9 9.00039" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                    <h3>Close</h3>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Disclaimer