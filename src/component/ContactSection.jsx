import React from 'react'

const ContactSection = () => {
  return (
    <section class="text-gray-600 body-font relative flex items-center justify-center py-8 ">
        <div className='h-[35rem]'>
            <img src="/contact-img.webp" alt="" srcset="" className='h-[35rem] object-cover object-center px-3'/>
        </div>
        <div className='py-4 px-5'>
            <h1 className='text-[2rem] josefin-sans-bold'>Conact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis rerum eius.</p>
            <div className='flex flex-col items-left gap-2 py-2 '>
            <label for="name" class="leading-7 text-sm text-gray-600 text-[1.5rem]">Hi 👋 my name is:</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <label for="email" class="leading-7 text-sm text-gray-600 text-[1.5rem] ">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <label for="message" class="leading-7 text-sm text-gray-600 text-[1.5rem] ">Message</label>
                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                <br/>
                <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Send
        </button>
            </div>
        </div>
</section>
  )
}

export default ContactSection