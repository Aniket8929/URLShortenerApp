import urlShorterApi from '@/API/urlApi';
import { useAuth } from '@/Auth/AuthContext';
import React, { useState } from 'react'
import { useRef } from 'react'
import { Navigate } from 'react-router-dom';

function ShortUrl() {

    const { user } = useAuth();
    const inputRef = useRef();

    const [shortUrl, setShortUrl] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            return <Navigate to="/auth/login" replace />;
        }
        const inputtext = inputRef.current.value;
        if (inputtext.trim() === "") return;
        const shortUrl = await urlShorterApi(inputtext);
        setShortUrl(shortUrl);
        inputRef.current.value = ""
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => alert("Copied!"))
            .catch(() => alert("Copy failed"));
    }
    return (
        <div className="w-full max-w-2xl mb-16 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="url"
                        placeholder="Enter Long URL (e.g., https://abc.com)"
                        required
                        className="w-full rounded-md border border-white/20 bg-white/10 px-12 py-4 text-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all duration-200"
                    />
                </div>

                <button
                    type="submit"
                    className="flex items-center gap-2 rounded-md bg-yellow-400 px-6 py-4 text-lg font-semibold text-black transition-all duration-200 hover:bg-yellow-500 hover:shadow-lg"
                >
                    Shorten Now!
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </form>

            {shortUrl && (
                <div className="mt-6 p-4 rounded-md border border-white/20 bg-white/5 flex justify-between items-center">
                    <a
                        href={shortUrl}
                        target="_blank"
                        className="text-yellow-400 font-semibold break-all"
                    >
                        {shortUrl}
                    </a>
                    <button
                        onClick={() => copyToClipboard(shortUrl)}
                        className="ml-4 px-3 py-1 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black font-medium transition"
                    >
                        Copy
                    </button>
                </div>
            )}
        </div>
    )
}

export default ShortUrl