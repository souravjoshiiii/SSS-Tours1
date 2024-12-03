import React from 'react'
import Navbar from './components/Navbar';
import wildlife from './assets/wildlife.mp4';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-grow">
        {/* Video with increased height */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full max-h-[70vh] object-cover absolute top-0 left-0 z-0"
        >
          <source src={wildlife} type="video/mp4" />
        </video>
        
        <Navbar />
        
        {/* Content on top of the video */}
        <div className="flex flex-col justify-center items-center mt-20 z-10 relative text-center">
          <div className="font-bold text-white text-6xl">
            Immerse yourself in Kenya's Wilderness
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">
            Book Tickets
          </button>
        </div>
      </div>

      {/* Content below the video */}
      <div className="mt-[20vh]"> {/* Adds space equivalent to the video height */}
        <Content />
      </div>
</div>
      {/* Footer */}
    
     <Footer/>
      
    </>
  );
}

export default App;
