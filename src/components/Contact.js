import React from 'react'

const Contact = () => {
  return (
   
    
<div className="bg-gray-900 text-gray-200 py-20 px-6 mt-20 lg:px-16">
  <div className="container mx-auto md:flex items-top justify-center gap-35">
    {/* Address Section */}
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Address</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-white">Nord Automobile</h3>
          <p>Nord Automotive Complex,<br />University of Lagos,<br />Akoka, Lagos</p>
        </div>
        <div>
          <h3 className="font-bold text-white">ABUJA LOCATION</h3>
          <p>Nord Automobiles Limited,<br />4th Avenue, Gwarimpa,<br />FCT, Abuja, Nigeria.</p>
          <p>10, Tito Broz street,<br />off Jimmy Carter street,<br />Asokoro, FCT, Abuja, Nigeria.</p>
        </div>
        <div className="pt-4">
          <p>T: +2348149799150</p>
          <p>E: <a href="mailto:enquiries@nordmotion.com" className="text-blue-400 hover:underline">enquiries@nordmotion.com</a></p>
          <p>W: <a href="https://www.nordmotion.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.nordmotion.com</a></p>
        </div>
      </div>
    </div>

    {/* Contact Form Section */}
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Send Us a Message</h2>
      <form className="space-y-4" onSubmit={(()=>{
        alert("form submitted succesfully")
      })}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-400"
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full p-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-400"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-400"
        />
        <textarea
          placeholder="Message"
          className="w-full p-4 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-blue-400 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-500 transition duration-200"
        >
          SEND
        </button>
      </form>
    </div>
  </div>
</div>
  
  )
}

export default Contact