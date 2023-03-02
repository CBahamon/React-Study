
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                <Link
                                    className={ ({isActive}) =>  `text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${ isActive ? 'active:text-violet-600':''} `}
                                    to="/"
                                >
                                    Asociaciones
                                </Link>

                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <NavLink
                                        className={ ({isActive}) =>  `text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${ isActive ? 'active:text-violet-600':''} `}
                                        to="/marvel"
                                    >
                                        Marvel
                                    </NavLink>

                                    <NavLink
                                        className={ ({isActive}) =>  `text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${ isActive ? 'active:text-violet-600':''} `}
                                        to="/dc"
                                    >
                                        DC
                                    </NavLink>
                                </div>
                            </div>
                            <div className='flex items-end justify-end p-2'>
                                
                                <span className=''>
                                    Dokirlens
                                </span>

                                <button
                                    className=''
                                
                                >
                                    Logout
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
