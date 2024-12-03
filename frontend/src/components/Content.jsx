import React from 'react';
import cardimage1 from '../assets/cardimage1.jpg';
import cardimag2 from '../assets/cardimag2.jpg';
import cardimage3 from '../assets/cardimage3.jpg';
import card1 from '../assets/c1.jpg';
import card2 from '../assets/c2.jpg';
import card3 from '../assets/c3.jpg';
import card4 from '../assets/c4.jpg';
import card5 from '../assets/c5.jpg';
import card6 from '../assets/c6.jpg';
import card7 from '../assets/c7.jpg';
function Content() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 mt-40 mb-20">
      <div className="max-w-3xl w-full mb-8">
        <h1 className="text-3xl mb-4 font-bold">Why SSSTours and Travel?</h1>
        <p className="text-lg font-light">
          At SSS Tours & Travel, we believe in crafting exceptional experiences that immerse our guests in the breathtaking beauty of wildlife, the rich cultures of local communities, and the artistry of bespoke photography. Established with a passion for adventure and a dedication to sustainable tourism, we specialize in curating unforgettable safari journeys across the diverse landscapes of Kenya.
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="card bg-base-300 rounded-box grid w-1/2 place-items-center">
            <img 
              src={cardimage1} 
              alt="Card 1" 
              className="w-full h-full object-cover rounded" 
            />
          </div>
          <div className="card bg-base-300 rounded-box grid w-1/2 place-items-center">
            <div>
              <h1 className="font-bold mb-2 mt-30 text-4xl">An Elegant Twist</h1>
              <p className="font-light w-3/4 ml-20 mb-5">
                Being small is our strength because it gives us time to listen, the freedom to be imaginative while handcrafting every itinerary, and the flexibility to change everything to suit a client’s needs.
              </p>
              <button className="btn btn-outline mb-30">See all Tours</button>
            </div>
          </div>
        </div>
      
        <div className="flex w-full mt-0">
          <div className="card bg-base-300 rounded-box grid w-1/2 place-items-center">
            <div>
              <h1 className="font-bold mb-2 mt-30 text-4xl">Start your adventure today</h1>
              <p className="font-light w-3/4 ml-20 mb-5">
                Based in Kenya, our team thrives in one of the world's most wildlife-rich countries, adorned with vibrant tribes, pristine white sand beaches, and captivating desert landscapes punctuated by majestic dunes. With a collective experience spanning three decades in Kenya's tourism industry, we are deeply passionate about orchestrating unforgettable safaris and heart-pounding adventures. These dreams fuel our purpose and drive, inspiring us to continue crafting extraordinary experiences for all who seek the thrill of exploration.
              </p>
              <button className="btn btn-outline mb-30">See all Tours</button>
            </div>
          </div>
          <div className="card bg-base-300 rounded-box grid w-1/2 place-items-center">
            <img 
              src={cardimag2}
              alt="Card 2" 
              className="w-full h-full object-cover rounded" 
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full mt-20 mb-8">
        <h1 className="text-4xl mb-4 font-bold text-green-700">View Our Tours</h1>
        <p className="text-lg font-light">
        We are specialized in Kenya; all our time is concentrated in Kenya. Our team has traveled to the far corners of Kenya; off the beaten path. We have the boots on the ground requisite knowledge to plan your safari as your wish list no matter what it takes. This may mean luxury is not always available in remote areas, but we are able to advise properly on how to  create an extraordinary life-changing safari.
        </p>
      </div>
      {/* Row of Cards with consistent height */}
      <div className="flex w-full gap-5 mt-10">
        <div className="relative group w-1/3 h-[500px] shadow-xl rounded-lg overflow-hidden">
          <figure className="h-full w-full">
            <img
              src={card3}
              alt="Card 3"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white mb-2">MYSTERIES OF THE TSAVO</h2>
            <button className="btn btn-outline text-white">VIEW TOUR</button>
          </div>
        </div>
        
        <div className="relative group w-1/3 h-[500px] shadow-xl rounded-lg overflow-hidden">
          <figure className="h-full w-full">
            <img
              src={card2}
              alt="Card 2"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white mb-2">MYSTERIES OF THE TSAVO</h2>
            <button className="btn btn-outline text-white">VIEW TOUR</button>
          </div>
        </div>
        
        <div className="relative group w-1/3 h-[500px] shadow-xl rounded-lg overflow-hidden">
          <figure className="h-full w-full">
            <img
              src={card1}
              alt="Card 3"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white mb-2">MYSTERIES OF THE TSAVO</h2>
            <button className="btn btn-outline text-white">VIEW TOUR</button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 mt-10">
        <div className="relative group w-1/3 h-[500px] shadow-xl rounded-lg overflow-hidden">
          <figure className="h-full w-full">
            <img
              src={card4}
              alt="Card 3"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white mb-2">MYSTERIES OF THE TSAVO</h2>
            <button className="btn btn-outline text-white">VIEW TOUR</button>
          </div>
        </div>
        
        <div className="relative group w-1/3 h-[500px] shadow-xl rounded-lg overflow-hidden">
          <figure className="h-full w-full">
            <img
              src={card5}
              alt="Card 2"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white mb-2">MYSTERIES OF THE TSAVO</h2>
            <button className="btn btn-outline text-white">VIEW TOUR</button>
          </div>
        </div>
        
        <div className="relative group w-1/3 h-[500px] shadow-xl rounded-lg overflow-hidden">
          <figure className="h-full w-full">
            <img
              src={card6}
              alt="Card 3"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-white mb-2">MYSTERIES OF THE TSAVO</h2>
            <button className="btn btn-outline text-white">VIEW TOUR</button>
          </div>
        </div>
      </div>
 <div className='bg-gray-300 w-full h-[200px] mt-10 flex flex-col justify-center '>
<h1 className="text-3xl font-light">Positive Vibes, People, Places and Food. <button className="btn btn-wide btn-outline btn-success ml-10">Book Today</button></h1>
 </div>
 <div className="w-full h-[500px] relative">
  <img src={card7} className="w-full h-full object-cover" alt="Image" />
  <div className="absolute top-[140px] left-[920px] border rounded-xl w-80 h-60 bg-white flex flex-col justify-center items-center p-4">
    <h1 className="font-bold text-2xl  mb-2">SSS Tours & Travel.</h1>
    <p className="font-light mb-2 text-center">A team who cares. A team you can trust. A team who speaks from experience</p>
    <button className="btn">SEE ALL TOURS</button>
  </div>
</div>
<div className="bg-black mt-10 w-full h-[240px] flex flex-col justify-center">
    <h1 className="text-4xl font-light text-white">YOUR JOURNEY STARTS HERE. Live Your Dream <button className="btn btn-outline btn-wide ml-7 text-white">View Tours</button></h1>
</div>

</div>
  );
}

export default Content;
