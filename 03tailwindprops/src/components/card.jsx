import React from "react";

function Card({username , btnText="visit me"}){
    console.log(username)
    return(
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Profile Picture */}
      <div className="p-6 bg-blue-100 flex justify-center">
        <img
          src="https://oodp.ca/media/tutor-8.jpg"
          alt="Profile Picture"
          className="rounded-full w-24 h-24 object-cover border-2 border-blue-500"
        />
      </div>

      {/* Information Section */}
      <div className="p-6">
        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800 text-center">{username}</h2>
        {/* Title */}
        <p className="text-gray-600 text-center mt-2">Software Engineer</p>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Contact Info */}
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> john.doe@example.com
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Phone:</span> (123) 456-7890
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Location:</span> New York, USA
          </p>
        </div>
         {/* Button */}
            <div className="mt-4 flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            {btnText }
          </button>
        </div>
      </div>
    </div>
    )
}
export default Card