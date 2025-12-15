import React from 'react'

const Profile = () => {
  return (
    <>
      {/* Mobile Design */}
      <div className='md:hidden block'>
        <div className='bg-[url(./profile/bg.png)] bg-cover bg-no-repeat bg-center w-full min-h-screen flex items-center overflow-x-auto overflow-y-auto p-4' style={{ fontFamily: 'JustFontime' }}>
          <div className='flex flex-col w-full gap-6 mx-auto'>
            {/* data section */}
            <div className='bg-[url(./profile/data.png)] bg-contain bg-no-repeat bg-center text-2xl h-[400px] w-full flex flex-col relative justify-center items-center gap-6 rounded-3xl text-white'>
              <div className="w-[120px] h-[120px] absolute top-[60px] left-1/2 -translate-x-1/2 flex items-center justify-center bg-[url('/profile/avator.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
                <img src="./profile/add.png" className='bottom-1 absolute right-1 w-6' alt="add" />
              </div>
              <div className='flex flex-col justify-center items-center gap-2 text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]'>
                <h1 className='text-2xl font-bold'>Username</h1>
                <h2 className='text-xl'>Email</h2>
              </div>
            </div>
            {/* Events and passes */}
            <div className='text-2xl w-full flex flex-col justify-center items-center text-white gap-4'>
              <div className='flex w-full items-center justify-center bg-[url(./profile/registeredEvents.png)] bg-contain bg-no-repeat bg-center min-h-[250px]'>
                <div className='flex flex-col w-full px-8 gap-2'>
                  <h1 className='text-xl font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]'>Individual Events</h1>
                  <h1 className='text-xl font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]'>Team Events</h1>
                </div>
              </div>
              <div className='flex w-full items-center justify-center bg-[url(./profile/passes.png)] bg-contain bg-no-repeat bg-center min-h-[200px]'>
                <div className='flex w-full px-8 justify-between'>
                  <div className='flex flex-col w-[33%]'>Pass Type</div>
                  <div className='flex flex-col w-[33%] text-center'>Quantity</div>
                  <div className='flex flex-col w-[33%] text-right'>Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className='hidden md:block'>
      <div className='bg-[url(./profile/bg.png)] bg-cover bg-no-repeat bg-center w-full min-h-screen flex items-center overflow-x-auto overflow-y-auto p-4' style={{ fontFamily: 'JustFontime' }}>
        <div className='flex w-350 min-w-350 h-200 shrink-0 mx-auto'>
          {/* data section */}
          <div className='bg-[url(./profile/data.png)] bg-contain bg-no-repeat bg-center text-4xl h-200 w-130 min-w-130 flex flex-col relative justify-center items-center gap-10 rounded-3xl text-white shrink-0'>
            <div className="w-45 h-45 absolute top-25 left-3 flex items-center justify-center bg-[url('/profile/avator.png')] bg-contain bg-center bg-no-repeat">
              <div className="w-[88%] h-[88%] bg-[url('/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              <img src="./profile/add.png" className='bottom-2 absolute right-2' alt="add" />
            </div>
            <div className='flex flex-col justify-center items-center gap-2 text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]'>
              <h1 className='text-3xl font-bold'>Username</h1>
              <h2 className='text-2xl' >Email</h2>
            </div>
          </div>
          {/* Events and passes */}
          <div className='text-4xl w-200 min-w-200 h-full flex flex-col justify-center items-center text-white relative shrink-0'>
            <div className='flex-1 flex w-full top-6 relative items-center justify-center bg-[url(./profile/registeredEvents.png)] bg-contain bg-no-repeat bg-center'>
              <div className='flex flex-col w-160 h-fit'>
                <h1 className='flex-1 text-3xl font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]'>Individual Events</h1>
                <h1 className='flex-1 text-3xl font-bold text-yellow-400 text-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]'>Team Events</h1>
              </div>
            </div>
            <div className='flex-1 flex w-full relative -top-10 items-center justify-center bg-[url(./profile/passes.png)] bg-contain bg-no-repeat bg-center'>
            <div className='flex w-160 h-fit'>
              <div className='flex flex-col w-[33%] h-fit'>Pass Type</div>
              <div className='flex flex-col w-[33%] h-fit'>Quantity</div>
              <div className='flex flex-col w-[33%] h-fit'>Verified</div>
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