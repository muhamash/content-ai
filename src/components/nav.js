import { PhoneOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import UserLogin from './login/login';


const Nav = () =>
{
    const [ isOpen, setOpen ] = useState( false )
    const dropDown = () =>
    {
        setOpen( true )
    };

    return (
        <div className="flex justify-evenly px-5 py-10">
            <div className="text-blue-600 text-3xl">
                Logo
            </div>
            <div className="flex gap-5 items-center">
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    Home
                </div>
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    Items
                </div>
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    Folder
                </div>
                <div className='hover:text-navItems hover:text-lg  transition-all ease-in-out duration-300 cursor-pointer'>
                    ABout Us
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500  text-lg p-[1px] rounded-3xl hover:shadow-2xl transition-all duration-300 cursor-pointer  hover:p-[2px]">
                    <div className='flex items-center gap-2 bg-slate-100 px-4 py-2 text-violet-950 rounded-3xl font-semibold hover:text-red-700'>
                        <div>
                            <PhoneOutlined className='text-2xl' />
                        </div>
                        <div>
                            +888088987
                        </div>
                    </div>
                </div>
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            onClick={ dropDown }
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            Login
                        </button>
                    </div>
                    { isOpen && (
                        <motion.div
                            initial={ { opacity: 0, y: -50 } } // Initial state of the component
                            animate={ { opacity: 2, y: 3 } } // Animation that it should perform
                            transition={ { duration: 0.5 } } // Duration of the animation
                        >
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-xl bg-white ring-2 ring-violet-900 ring-opacity-20 transition-all duration-300"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <div className="py-1" role="none">
                                    <a
                                        // onClick={ handleClick}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer hover:text-violet-700"
                                        role="menuitem"
                                    >
                                        Login
                                    </a>
                                    {/* <div className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer hover:text-violet-700'>
                                        <Link to="./userLogin">Login</Link>
                                    </div> */}
                                    <a
                                        // onClick={}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer hover:text-violet-700"
                                        role="menuitem"
                                    >
                                        Register
                                    </a>
                                    {/* Add more dropdown items as needed */ }
                                </div>
                            </div>
                        </motion.div>
                    ) }
                </div>
            </div>
        </div>
    )
};

export default Nav