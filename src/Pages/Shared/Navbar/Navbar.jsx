import { Link } from "react-router-dom";


const Navbar = () => {

    // const menuItems = <>
    //     <li><Link to={'/'}>Home</Link></li>
    //     <li><Link to={'/blog'}>Blog</Link></li>
    //     <li><Link to={'/dashboard'}>Dashboard</Link></li>
    //     <li><button>Sign Out</button></li>
    //     <li><Link to={'/login'}>SignIn</Link></li>
    //     <li><Link to={'/signup'}>Signup</Link></li>
    // </>
    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="flex-1">
                <Link to="/" className="font-mono px-2 font-bold text-sm md:text-xl">Ayaan's</Link>
            </div>
            <div className="flex-none">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li>
                            <details>
                                <summary>
                                    About Ayaan's
                                </summary>
                                <ul className="p-2 bg-base-100 shadow-xl">
                                    <li><a>Blog</a></li>
                                    <li><a>sponsor's</a></li>
                                    <li><a>Fashion Idea</a></li>
                                    <li><a>About This Brand</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;