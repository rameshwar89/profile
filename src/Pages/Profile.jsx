import React, { useState, useEffect, useCallback } from 'react'
import Cropper from 'react-easy-crop'

// Import profile assets
import bgImage from '../assets/profile/bg.png'
import dataImage from '../assets/profile/data.png'
import avatorImage from '../assets/profile/avator.png'
import addImage from '../assets/profile/add.png'
import registeredEventsImage from '../assets/profile/registeredEvents.png'
import passesImage from '../assets/profile/passes.png'
import elli3Image from '../assets/profile/elli3.png'
import logoutImage from '../assets/profile/logout.png'

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })

async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        resolve(reader.result)
      }
    }, 'image/jpeg')
  })
}

const Profile = () => {
  const [scale, setScale] = useState(1)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [profileImage, setProfileImage] = useState(() => {
    const saved = localStorage.getItem('profileImage')
    return saved || elli3Image
  })
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [showCropper, setShowCropper] = useState(false)
  const [imageToCrop, setImageToCrop] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [showEventsModal, setShowEventsModal] = useState(false)
  const videoRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const fileInputRef = React.useRef(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const handleCropSave = async () => {
    try {
      const croppedImage = await getCroppedImg(imageToCrop, croppedAreaPixels)
      setProfileImage(croppedImage)
      localStorage.setItem('profileImage', croppedImage)
      setShowCropper(false)
      setImageToCrop(null)
      setShowUploadModal(false)
    } catch (e) {
      console.error('Error cropping image:', e)
    }
  }

  const handleCropCancel = () => {
    setShowCropper(false)
    setImageToCrop(null)
    setCrop({ x: 0, y: 0 })
    setZoom(1)
  }

  useEffect(() => {
    const calculateScale = () => {
      const baseWidth = 1550 // Actual content width (1500 + gap + margin)
      const padding = 80
      const scaleX = (window.innerWidth - padding) / baseWidth
      
      const newScale = Math.max(0.4, Math.min(scaleX, 1.5))
      setScale(newScale)
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  // Sample pass data
  const passes = [
    { type: 'VIP Pass', quantity: 2, verified: 'Yes' },
    { type: 'General Pass', quantity: 5, verified: 'Yes' },
    { type: 'Workshop Pass', quantity: 3, verified: 'No' },
    { type: 'Food Coupon', quantity: 10, verified: 'Yes' },
    { type: 'Food Coupon', quantity: 10, verified: 'Yes' },
  ]

  // Sample events data
  const individualEvents = [
    'Web Development Workshop',
    'AI & Machine Learning',
    'Code Sprint Challenge',
    'Hackathon Finale',
    'Hackathon Finale',
    'Hackathon Finale',
    'Hackathon Finale'
  ]

  const teamEvents = [
    'Capture The Flag',
    'Tech Quiz Competition',
    'Innovation Pitch',
    'Innovation Pitch',
    'Innovation Pitch',
    'Innovation Pitch',
    'Innovation Pitch'
  ]

  const userData = {
    name: 'Jack Duniya Ka Papa',
    blitzId: 'BLITZ2025-7829',
    email: 'duniyakapapa@blitz.com'
  }

  const handleAddClick = () => {
    setShowUploadModal(true)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageData = e.target.result
        setImageToCrop(imageData)
        setShowUploadModal(false)
        setShowCropper(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const startCamera = async () => {
    try {
      setIsCameraActive(true)
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Unable to access camera. Please check permissions.')
      setIsCameraActive(false)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0)
      const imageData = canvas.toDataURL('image/png')
      setImageToCrop(imageData)
      stopCamera()
      setShowUploadModal(false)
      setShowCropper(true)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject
      const tracks = stream.getTracks()
      tracks.forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
    setIsCameraActive(false)
  }

  const closeModal = () => {
    stopCamera()
    setShowUploadModal(false)
  }

  const handleLogout = () => {
    // Clear profile image from localStorage
    localStorage.removeItem('profileImage')
    // Add your logout logic here (e.g., redirect, clear session, etc.)
    console.log('Logout clicked')
    alert('Logout functionality - Add your logout logic here')
  }
  
  return (
    <>
      {/* Events Modal */}
      {showEventsModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'>
          <div className='bg-gray-900 rounded-lg p-6 max-w-3xl w-full mx-4 border-2 border-yellow-400 max-h-[90vh] overflow-y-auto'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-yellow-400'>Registered Events</h2>
              <button 
                onClick={() => setShowEventsModal(false)}
                className='text-yellow-400 hover:text-yellow-500 text-3xl font-bold'
              >
                X
              </button>
            </div>
            
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-xl font-bold text-yellow-400 mb-3'>Individual Events</h3>
                <ul className='text-white space-y-2'>
                  {individualEvents.map((event, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-yellow-400 mr-2'>-</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-bold text-yellow-400 mb-3'>Team Events</h3>
                <ul className='text-white space-y-2'>
                  {teamEvents.map((event, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-yellow-400 mr-2'>-</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

       {/* Image Cropper Modal */}
      {showCropper && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90'>
          <div className='bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 border-2 border-yellow-400'>
            <h2 className='text-2xl font-bold text-yellow-400 mb-4 text-center'>Crop Your Image</h2>
            
            <div className='relative w-full h-96 bg-black rounded-lg mb-4'>
              <Cropper
                image={imageToCrop}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            
            <div className='mb-4'>
              <label className='text-white block mb-2'>Zoom</label>
              <input
                type='range'
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(e.target.value)}
                className='w-full'
              />
            </div>

            <div className='flex gap-4'>
              <button 
                onClick={handleCropSave}
                className='flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors'
              >
                Save Image
              </button>
              <button 
                onClick={handleCropCancel}
                className='flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'>
          <div className='bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4 border-2 border-yellow-400'>
            <h2 className='text-2xl font-bold text-yellow-400 mb-4 text-center'>Update Profile Picture</h2>
            
            {isCameraActive ? (
              <div className='flex flex-col items-center gap-4'>
                <video 
                  ref={videoRef}
                  autoPlay 
                  playsInline 
                  className='w-full rounded-lg border-2 border-yellow-400'
                />
                <canvas ref={canvasRef} className='hidden' />
                <div className='flex gap-4 w-full'>
                  <button 
                    onClick={capturePhoto}
                    className='flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors'
                  >
                    Capture Photo
                  </button>
                  <button 
                    onClick={stopCamera}
                    className='flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className='flex flex-col gap-4'>
                <button 
                  onClick={() => fileInputRef.current.click()}
                  className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                  Upload from Device
                </button>
                <input 
                  ref={fileInputRef}
                  type='file' 
                  accept='image/*' 
                  onChange={handleFileUpload}
                  className='hidden'
                />
                <button 
                  onClick={startCamera}
                  className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 13a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  Take a Photo
                </button>
                <button 
                  onClick={closeModal}
                  className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors'
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Design */}
      <div className='md:hidden block'>
        <div className="bg-cover bg-no-repeat bg-center w-full min-h-screen flex items-center justify-center overflow-x-auto overflow-y-auto p-2" style={{ fontFamily: 'JustFontime', backgroundImage: `url(${bgImage})` }}>
          <div className='flex flex-col w-full max-w-md mx-auto'>
            {/* data section */}
            <div className='w-full relative'>
              <div className="w-full aspect-4/3 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${dataImage})` }} />
              <div className='absolute inset-0 flex flex-col justify-center items-center gap-[4%] text-white'>
                <div className="w-[33%] aspect-square absolute top-[15%] left-1/2 -translate-x-1/2 flex items-center justify-center bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${avatorImage})` }}>
                  <div className="w-[88%] h-[88%] bg-contain bg-center bg-no-repeat rounded-full overflow-hidden">
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    onClick={handleAddClick}
                    className='bottom-[2%] absolute right-[2%] w-[20%] aspect-square bg-contain bg-center bg-no-repeat cursor-pointer hover:scale-110 transition-transform' 
                    style={{ backgroundImage: `url(${addImage})` }} 
                  />
                </div>
                <div className='flex flex-col justify-center items-center gap-1 text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mt-[45%]'>
                  <h1 className='text-2xl font-bold'>{userData.name}</h1>
                  <h2 className='text-lg'>ID: {userData.blitzId}</h2>
                  <h3 className='text-base'>{userData.email}</h3>
                </div>
                <div 
                  onClick={handleLogout}
                  className='w-[25%] aspect-square bg-contain bg-center bg-no-repeat cursor-pointer hover:scale-110 transition-transform mt-4' 
                  style={{ backgroundImage: `url(${logoutImage})` }} 
                />
              </div>
            </div>

            {/* Events and passes */}
            <div className='text-2xl w-full flex flex-col justify-center items-center text-white gap-4'>
              <div className='w-full relative'>
                <div className="w-full aspect-36/20 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${registeredEventsImage})` }} />
                <button 
                  onClick={() => setShowEventsModal(true)}
                  className='absolute top-[8%] right-[8%] w-6 h-6 text-yellow-400 hover:scale-110 transition-transform cursor-pointer z-10'
                >
                  <svg fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/>
                  </svg>
                </button>
                <div className='absolute inset-0 flex items-center justify-center px-[8%] pt-[16%] pb-[12%]'>
                  <div className='flex w-full gap-4'>
                    <div className='flex-1'>
                      <h1 className='text-base font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mb-1'>Individual Events</h1>
                      <ul className='text-xs space-y-0.5 max-h-20 overflow-y-auto'>
                        {individualEvents.map((event, index) => (
                          <li key={index} className='truncate'>• {event}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='flex-1'>
                      <h1 className='text-base font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mb-1'>Team Events</h1>
                      <ul className='text-xs space-y-0.5 max-h-20 overflow-y-auto'>
                        {teamEvents.map((event, index) => (
                          <li key={index} className='truncate'>• {event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full relative'>
                <div className="w-full aspect-36/20 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${passesImage})` }} />
                <div className='absolute inset-0 flex items-center justify-center px-[8%] pt-[16%] pb-[12%]'>
                  <div className='w-full h-full flex flex-col'>
                    {/* Table Header */}
                    <div className='flex w-full text-xs font-bold pb-1 border-b-2 border-yellow-400'>
                      <div className='w-[40%]'>Pass Type</div>
                      <div className='w-[30%] text-center'>Quantity</div>
                      <div className='w-[30%] text-right'>Verified</div>
                    </div>
                    {/* Table Body */}
                    <div className='flex-1 overflow-y-auto mt-1 max-h-64'>
                      {passes.map((pass, index) => (
                        <div key={index} className='flex w-full text-[0.625rem] py-1 border-b border-gray-400'>
                          <div className='w-[40%] truncate'>{pass.type}</div>
                          <div className='w-[30%] text-center'>{pass.quantity}</div>
                          <div className={`w-[30%] text-right ${pass.verified === 'Yes' ? 'text-green-400' : 'text-red-400'}`}>
                            {pass.verified}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className='hidden md:block'>
        <div className="bg-cover bg-no-repeat bg-center w-full min-h-screen flex items-center justify-center overflow-auto p-4" style={{ fontFamily: 'JustFontime', backgroundImage: `url(${bgImage})` }}>
          <div 
            className='flex gap-2'
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease',
              minWidth: '1500px'
            }}
          >
            {/* data section */}
            <div className='w-150 min-w-150 shrink-0 relative -mr-5'>
              <div className="w-full aspect-3/4 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${dataImage})` }} />
              <div className='absolute inset-0 flex flex-col justify-center items-center gap-[5%] text-white'>
                <div className="w-[35%] aspect-square absolute top-[10%] left-[3%] flex items-center justify-center bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${avatorImage})` }}>
                  <div className="w-[88%] h-[88%] bg-contain bg-center bg-no-repeat rounded-full overflow-hidden">
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    onClick={handleAddClick}
                    className='bottom-[2%] absolute right-[2%] w-[15%] aspect-square bg-contain bg-center bg-no-repeat cursor-pointer hover:scale-110 transition-transform' 
                    style={{ backgroundImage: `url(${addImage})` }} 
                  />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mt-[40%]'>
                  <h1 className='text-3xl font-bold'>{userData.name}</h1>
                  <h2 className='text-xl'>ID: {userData.blitzId}</h2>
                  <h3 className='text-lg'>{userData.email}</h3>
                </div>
                <div 
                  onClick={handleLogout}
                  className='absolute bottom-[5%] right-[5%] w-[25%] aspect-square bg-contain bg-center bg-no-repeat cursor-pointer hover:scale-110 transition-transform' 
                  style={{ backgroundImage: `url(${logoutImage})` }} 
                />
              </div>
            </div>

            {/* Events and passes */}
            <div className='w-225 min-w-225 shrink-0 flex flex-col text-white'>
              <div className='flex-1 relative -mb-25'>
                <div className="w-full aspect-9/4 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${registeredEventsImage})` }} />
                <button 
                  onClick={() => setShowEventsModal(true)}
                  className='absolute top-[8%] right-[8%] w-8 h-8 text-yellow-400 hover:scale-110 transition-transform cursor-pointer z-10'
                >
                  <svg fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/>
                  </svg>
                </button>
                <div className='absolute inset-0 flex items-center justify-center px-[8%] py-[10%]'>
                  <div className='flex w-full gap-8'>
                    <div className='flex-1'>
                      <h1 className='text-2xl font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mb-4'>Individual Events</h1>
                      <ul className='text-lg space-y-2 max-h-50 overflow-y-auto'>
                        {individualEvents.map((event, index) => (
                          <li key={index} className='truncate'>• {event}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='flex-1'>
                      <h1 className='text-2xl font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mb-4'>Team Events</h1>
                      <ul className='text-lg space-y-2 max-h-50 overflow-y-auto'>
                        {teamEvents.map((event, index) => (
                          <li key={index} className='truncate'>• {event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-1 relative'>
                <div className="w-full aspect-90/43 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${passesImage})` }} />
                <div className='absolute inset-0 flex items-center justify-center px-[12%] py-[10%]'>
                  <div className='w-full h-full flex flex-col'>
                    {/* Table Header */}
                    <div className='flex w-full text-2xl font-bold pb-3 border-b-2 border-yellow-400'>
                      <div className='w-[40%]'>Pass Type</div>
                      <div className='w-[30%] text-center'>Quantity</div>
                      <div className='w-[30%] text-right'>Verified</div>
                    </div>
                    {/* Table Body */}
                    <div className='flex-1 overflow-y-auto mt-3'>
                      {passes.map((pass, index) => (
                        <div key={index} className='flex w-full text-xl py-3 border-b border-gray-400'>
                          <div className='w-[40%] truncate'>{pass.type}</div>
                          <div className='w-[30%] text-center'>{pass.quantity}</div>
                          <div className={`w-[30%] text-right font-semibold ${pass.verified === 'Yes' ? 'text-green-400' : 'text-red-400'}`}>
                            {pass.verified}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile