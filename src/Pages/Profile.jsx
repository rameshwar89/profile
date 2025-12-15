import React, { useState, useEffect } from 'react'

const Profile = () => {
  const [scale, setScale] = useState(1)

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
  
  return (
    <>
      {/* Mobile Design */}
      <div className='md:hidden block'>
        <div className="bg-[url('./assets/profile/bg.png')] bg-cover bg-no-repeat bg-center w-full min-h-screen flex items-center justify-center overflow-x-auto overflow-y-auto p-2" style={{ fontFamily: 'JustFontime' }}>
          <div className='flex flex-col w-full max-w-md mx-auto'>
            {/* data section */}
            <div className='w-full relative'>
              <div className="w-full aspect-4/3 bg-[url('./assets/profile/data.png')] bg-contain bg-center bg-no-repeat" />
              <div className='absolute inset-0 flex flex-col justify-center items-center gap-[4%] text-white'>
                <div className="w-[33%] aspect-square absolute top-[15%] left-1/2 -translate-x-1/2 flex items-center justify-center bg-[url('./assets/profile/avator.png')] bg-contain bg-center bg-no-repeat">
                  <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
                  <div className='bottom-[2%] absolute right-[2%] w-[20%] aspect-square bg-[url("./assets/profile/add.png")] bg-contain bg-center bg-no-repeat' />
                </div>
                <div className='flex flex-col justify-center items-center gap-1 text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mt-[45%]'>
                  <h1 className='text-lg font-bold'>Username</h1>
                  <h2 className='text-base'>Email</h2>
                </div>
              </div>
            </div>

            {/* Events and passes */}
            <div className='text-2xl w-full flex flex-col justify-center items-center text-white gap-4'>
              <div className='w-full relative'>
                <div className="w-full aspect-36/20 bg-[url('./assets/profile/registeredEvents.png')] bg-contain bg-center bg-no-repeat" />
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
                <div className="w-full aspect-36/20 bg-[url('./assets/profile/passes.png')] bg-contain bg-center bg-no-repeat" />
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
        <div className="bg-[url('./assets/profile/bg.png')] bg-cover bg-no-repeat bg-center w-full min-h-screen flex items-center justify-center overflow-auto p-4" style={{ fontFamily: 'JustFontime' }}>
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
              <div className="w-full aspect-3/4 bg-[url('./assets/profile/data.png')] bg-contain bg-center bg-no-repeat" />
              <div className='absolute inset-0 flex flex-col justify-center items-center gap-[5%] text-white'>
                <div className="w-[35%] aspect-square absolute top-[10%] left-[3%] flex items-center justify-center bg-[url('./assets/profile/avator.png')] bg-contain bg-center bg-no-repeat">
                  <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
                  <div className='bottom-[2%] absolute right-[2%] w-[15%] aspect-square bg-[url("./assets/profile/add.png")] bg-contain bg-center bg-no-repeat' />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mt-[40%]'>
                  <h1 className='text-3xl font-bold'>Username</h1>
                  <h2 className='text-2xl'>Email</h2>
                </div>
              </div>
            </div>

            {/* Events and passes */}
            <div className='w-225 min-w-225 shrink-0 flex flex-col text-white'>
              <div className='flex-1 relative -mb-25'>
                <div className="w-full aspect-9/4 bg-[url('./assets/profile/registeredEvents.png')] bg-contain bg-center bg-no-repeat" />
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
                <div className="w-full aspect-90/43 bg-[url('./assets/profile/passes.png')] bg-contain bg-center bg-no-repeat" />
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