import Navbar from "./Navbar"
import MyVault from './MyVault';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import Addnew from './Addnew';

const Home = () => {
    const { activeComponent,sidebarHam } = useSelector((state) => state.ui);
    const { addopen } = useSelector((state) => state.passwords);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'MyVault':
                return <MyVault />;
            default:
                return null;
        }
    };
    return (
        <div className='flex'>
            <Sidebar />

            <div className={`${sidebarHam===true?"hidden": "w-[100vw]"} sm:w-[75vw] xl:w-[85vw] h-[100vh]`}>
                <Navbar display={"block"} path={"/logo.png"} />
                <div className='sm:ml-1 mt-1 shadow-md border border-gray-300 flex flex-col ' style={{ height: "calc(100vh - 70px)" }}>
                    
                        {renderComponent()}
                   
                </div>
            </div>
            {addopen &&
                <div className="h-[100vh] w-[100vw] fixed top-0 left-0 bg-gray-700/50 flex justify-center items-center">
                        <Addnew />     
                </div>
            }
        </div>
    )
}

export default Home;