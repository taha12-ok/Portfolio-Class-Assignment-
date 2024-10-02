import React from 'react'

function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-1">
    <div className="max-w-md w-full bg-blue-200 rounded-lg shadow-md p-7">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-950">Contact Information</h1>
        <div className="mb-5">
            <p className="font-semibold text-black">Email:</p>
            <a href="mailto:tahashabbir321@gmail.com" className="text-blue-500 hover:underline">
                tahashabbir321@gmail.com
            </a>
        </div>
        <div className="mb-5">
            <p className="font-semibold  text-black">Phone Number:</p>
            <p className="text-black">+923060484798</p>
        </div>
        <div className="mb-5">
            <p className="font-semibold  text-black">Address:</p>
            <p className="text-black">Karachi, Pakistan</p>
        </div>
        <div className="mt-6 text-center">
            <p className="text-black">
                Feel free to reach out for any inquiries or collaboration opportunities.
            </p>
        </div>
    </div>
</div>
  )
}

export default page