import { useAuth } from "@/Auth/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const navLinks = [
        { name: "HOME", to: "/" },
        { name: "CREATE LINK", to: "/dashboard" },
        { name: "SEE YOUR LINKS", to: "/dashboard" },
        { name: "CONTACT US", to: "/dashboard" },
    ];
    return (
        <nav className="relative flex items-center justify-between border-b bg-[oklch(0.19_0.06_269.71)] px-4 py-4 backdrop-blur-sm sm:px-6 lg:px-8">
            <Link to="/" className="group relative z-50 shrink-0">
                <img
                    src="https://trimrr.link/logo.png"
                    alt="Trimrr Logo"
                    className="h-12 transition-transform duration-300 group-hover:scale-105 sm:h-16"
                />
            </Link>

            <ul className=" hidden  items-center space-x-2 lg:flex">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <NavItem to={link.to}>{link.name}</NavItem>
                    </li>
                ))}
            </ul>
            {open && (
                <ul className="absolute top-20 left-0 w-full 
bg-gray-900 text-white 
backdrop-blur-md 
border-t border-gray-700
flex flex-col items-center 
gap-6 py-6 
shadow-2xl 
animate-slideDown
lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.name} className="w-full text-center">
                            <NavItem
                                to={link.to}
                                className="block py-3 text-lg font-medium transition duration-300"
                            >
                                {link.name}
                            </NavItem>
                        </li>
                    ))}
                </ul>

            )}

            <div className="relative z-50 flex items-center space-x-3">
                {user ? (
                    <button
                        onClick={logout}
                        className="rounded-md bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 sm:px-6 sm:text-base"
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/auth/login">
                        <button className="rounded-md bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/25 sm:px-6 sm:text-base">
                            Login
                        </button>
                    </Link>
                )}
                <button onClick={() => setOpen(!open)} className="lg:hidden rounded-md p-2 text-white transition hover:bg-white/10 hover:text-yellow-400">

                    {open ? <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                        :
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 6h16" />
                            <path d="M4 12h16" />
                            <path d="M4 18h16" />
                        </svg>}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;



function NavItem({ to, children }) {
    return (
        <Link
            to={to}
            className="group relative rounded-lg px-4 py-3 text-md font-medium text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white"
        >
            <span className="relative">
                {children}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-yellow-400 to-yellow-500 transition-all duration-300 group-hover:w-full" />
            </span>
        </Link>
    );
}
