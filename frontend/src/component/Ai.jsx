import React, { useContext, useState } from 'react'
import ai from "../assets/ai.png"
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import open from "../assets/open.mp3"

function Ai() {
  let {showSearch , setShowSearch} = useContext(shopDataContext)
  let navigate = useNavigate()
  let [activeAi,setActiveAi] = useState(false)
  let openingSound = new Audio(open)

 function speak(message){
let utterence=new SpeechSynthesisUtterance(message)
window.speechSynthesis.speak(utterence)
  }

  const speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new speechRecognition()
   if(!recognition){
    console.log("not supported")
  }

  recognition.onresult = (e)=>{
    const transcript = e.results[0][0].transcript.trim();
 if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("open") && !showSearch){
      speak("opening search")
      setShowSearch(true) 
      navigate("/collection")
    }
    else if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("close") && showSearch){
      speak("closing search")
      setShowSearch(false) 
      
    }
     else if(transcript.toLowerCase().includes("collection") || transcript.toLowerCase().includes("collections") || transcript.toLowerCase().includes("product") || transcript.toLowerCase().includes("products")){
      speak("opening collection page")
      navigate("/collection")
    }
    else if(transcript.toLowerCase().includes("about") || transcript.toLowerCase().includes("aboutpage") ){
      speak("opening about page")
      navigate("/about")
      setShowSearch(false) 
    }
     else if(transcript.toLowerCase().includes("home") || transcript.toLowerCase().includes("homepage") ){
      speak("opening home page")
      navigate("/")
      setShowSearch(false) 
    }
     else if(transcript.toLowerCase().includes("cart")  || transcript.toLowerCase().includes("kaat")  || transcript.toLowerCase().includes("caat")){
      speak("opening your cart")
      navigate("/cart")
      setShowSearch(false) 
    }
    else if(transcript.toLowerCase().includes("contact")){
      speak("opening contact page")
      navigate("/contact")
      setShowSearch(false) 
    }
   
     else if(transcript.toLowerCase().includes("order") || transcript.toLowerCase().includes("myorders") || transcript.toLowerCase().includes("orders") || transcript.toLowerCase().includes("my order")){
      speak("opening your orders page")
      navigate("/order")
      setShowSearch(false) 
    }
    else{
      toast.error("Try Again")
    }

  }
  recognition.onend=()=>{
   setActiveAi(false)
  }
  
  return (
    <div className='fixed lg:bottom-[30px] md:bottom-[50px] bottom-[90px] left-[20px] z-50'>
      {/* AI Assistant Container */}
      <div className='relative group'>
        {/* Tooltip */}
        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${activeAi ? 'opacity-100' : ''}`}>
          <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800'></div>
          {activeAi ? 'Listening...' : 'Click to activate AI assistant'}
        </div>

        {/* Status Indicator */}
        {activeAi && (
          <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse'>
            <div className='w-2 h-2 bg-white rounded-full animate-ping'></div>
          </div>
        )}

        {/* AI Button */}
        <div 
          className={`relative cursor-pointer transition-all duration-500 ${
            activeAi 
              ? 'transform scale-110 translate-y-[-10px]' 
              : 'transform scale-100 translate-y-0 hover:scale-105'
          }`}
          onClick={() => {
            recognition.start();
            openingSound.play();
            setActiveAi(true);
          }}
        >
          {/* Outer Glow Ring */}
          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
            activeAi 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-60 scale-125' 
              : 'bg-gradient-to-r from-gray-400 to-gray-600 blur-lg opacity-40 scale-100'
          }`}></div>

          {/* Inner Glow Ring */}
          <div className={`absolute inset-2 rounded-full transition-all duration-500 ${
            activeAi 
              ? 'bg-gradient-to-r from-cyan-300 to-blue-400 blur-md opacity-40' 
              : 'bg-gradient-to-r from-gray-300 to-gray-500 blur-sm opacity-20'
          }`}></div>

          {/* Main AI Icon Container */}
          <div className='relative w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-3 shadow-2xl border-2 border-gray-600 overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-full'></div>
            
            {/* AI Icon */}
            <img 
              src={ai} 
              alt="AI Assistant" 
              className='w-full h-full object-cover rounded-full relative z-10'
            />

            {/* Animated Border */}
            <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
              activeAi 
                ? 'border-cyan-400 animate-pulse' 
                : 'border-gray-500'
            }`}></div>

            {/* Pulse Animation */}
            {activeAi && (
              <>
                <div className='absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-75'></div>
                <div className='absolute inset-2 rounded-full border-2 border-blue-400 animate-ping opacity-50' style={{animationDelay: '0.5s'}}></div>
              </>
            )}
          </div>

          {/* Voice Wave Animation */}
          {activeAi && (
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full flex items-end justify-center space-x-1 mt-2'>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className='w-1 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full animate-pulse'
                  style={{
                    height: '20px',
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.8s'
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>

        {/* Command Hints */}
        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-8 bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 text-xs text-white transition-all duration-300 ${
          activeAi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
          <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800'></div>
          <p className='font-semibold mb-1'>Try saying:</p>
          <ul className='space-y-1'>
            <li>• "Open search"</li>
            <li>• "Go to collection"</li>
            <li>• "Show my cart"</li>
            <li>• "Open home page"</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Ai