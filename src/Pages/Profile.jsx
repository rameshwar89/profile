import React from 'react'

const Profile = () => {
  return (
    <>
    <div className='bg-[url(./img.jpg)] bg-cover bg-no-repeat bg-center w-full min-h-screen flex justify-center items-center'>
      <div className='flex w-full h-200 justify-center items-center gap-10 p-10'>

      <div className='text-4xl h-full w-[30%] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px] flex flex-col justify-center items-center gap-10 p-20 rounded-3xl text-white'>
        <div className='bg-pink-100 w-40 h-40 rounded-full relative shadow-[0_0px_20px_rgb(0,0,0),0_0_20px_rgba(0,0,0,0.7)]'>
          <img src="./add.png" className='bottom-2 absolute right-2' alt="add" />
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-3xl font-bold'>Username</h1>
          <h2 className='text-2xl' >Email</h2>
        </div>
      </div>
      <div className='text-4xl w-[50%] h-full bg-pink-700 rounded-3xl flex flex-col justify-center items-center gap-10 p-20 text-white'>
        <div className='h-50'>Registered Events</div>
        <div>Passes</div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Profile