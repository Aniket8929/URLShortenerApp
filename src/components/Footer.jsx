
function Footer() {
    return (
        <footer className="bg-gray-900/80 backdrop-blur-sm mt-16 py-8 px-4 border-t border-yellow-500/20 shadow-inner">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-md text-gray-500 mb-4">© 2026 Trimrr. All rights reserved.</p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <a
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1"
                        href="/privacy-policy"
                        data-discover="true"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                            aria-hidden="true"
                        >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                        Privacy Policy
                    </a>
                    <span className="text-gray-600">•</span>
                    <a
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1"
                        href="/contact-us"
                        data-discover="true"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                            aria-hidden="true"
                        >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer