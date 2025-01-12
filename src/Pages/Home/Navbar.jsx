import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    //handle theme
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }


    // Handle Log out
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User Logged out'))
            .catch(error => console.error(error))
    }

    const navlinks = <>
        <NavLink className={'  border-b-2 hover:bg-slate-300 px-3 py-2 rounded-lg'} to='/'>Home</NavLink>
        <NavLink  className={'  border-b-2 hover:bg-slate-300 px-3 py-2 rounded-lg'} to='/assignments'>Assignments</NavLink>

        {
            user &&
            <>
                <NavLink  className={'  border-b-2 hover:bg-slate-300 px-3 py-2 rounded-lg'} to='/createAssignment'>Create Assignments</NavLink>
                <NavLink  className={'  border-b-2 hover:bg-slate-300 px-3 py-2 rounded-lg'} to='/pendingAssignment'>Pending Assignments</NavLink>
            </>
        }


    </>
    return (
        <div className=" bg-blue-100 sticky top-0 z-50">
            <div className="text-center lg:mx-24">
                <nav className="p-">
                    <div className="container flex justify-between h-auto mx-auto">
                        <Link to="/">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className=""><span className="text-2xl lg:text-3xl font-bold">Study</span></h1>
                                <h1><span className="bg-red-500 text-white rounded-2xl font-bold px-4  text-sm font-serif">Room</span></h1>
                            </div>
                        </Link>
                        <div className="navbar-center hidden lg:flex  justify-end w-8/12">
                            <ul className="menu menu-horizontal flex gap-6 items-center font-bold text-slate-800">
                                {navlinks}
                            </ul>
                        </div>
                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            <div onChange={handleTheme} className="flex items-center justify-center  px-7 ">
                                <label className="swap swap-rotate">

                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller" value="synthwave" />

                                    {/* sun icon */}
                                    <svg className="swap-on fill-current w-6 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-off fill-current w-6 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>

                            <div>
                                {
                                    !user &&
                                    <>
                                        <NavLink to='/register'> <button className="self-center btn-ghost px-3 py-1 mr-4 font-semibold rounded">Register</button></NavLink>
                                        <NavLink to='/login'> <button className="self-center btn-ghost px-3 py-1  font-semibold rounded">Login</button></NavLink>
                                    </>
                                }
                            </div>

                            {
                                user &&
                                <>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="butto" className="btn btn-ghost btn-circle">
                                            <div className="w-12 tooltip" title={user?.displayName
                                            }>
                                                <img src={user?.photoURL || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} className="rounded-full" alt="" />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52">
                                            <NavLink  to="/myAssignment"> <li className="border-slate-300 border-b"><button>My Assignments</button></li></NavLink>
                                            <li><button onClick={handleLogOut}>Log Out</button></li>
                                        </ul>
                                    </div>
                                </>
                            }


                        </div>
                        <button className="p-4 lg:hidden flex flex-col justify-center">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52 border-slate-300 border-b">
                                    {
                                        user && <div className="flex flex-col items-center justify-center">
                                            <div className=" w-9 mb-2 ">
                                                <img className="rounded-full" src={user?.photoURL || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} />
                                            </div>
                                            <div className="text-center font-serif mb-3 border-b-">
                                                <h1 className="font-semibold">{user?.displayName}</h1>
                                            </div>
                                        </div>
                                    }
                                    {navlinks}
                                    {user &&  <NavLink  className={'  border-b-2 hover:bg-slate-300 px-3 py-2 rounded-lg'} to='/myAssignment'>My Assignments</NavLink>}
                                    {!user &&
                                        <li><Link to="/login">Login</Link></li>}
                                    {user && <li><button onClick={handleLogOut}>Log Out</button></li>}

                                </ul>

                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;