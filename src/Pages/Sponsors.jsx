import React from 'react'

const Sponsors = () => {
  return (
    <>
      <div className="w-full h-full pt-30 pb-[15%] flex flex-col items-center relative z-20 bg-[url('./assets/sponsors/bg.png')] bg-cover bg-center bg-no-repeat">

        <div className="w-[50%] px-4 h-35 mt-20 bg-[url('./assets/sponsors/sponsors.png')] bg-contain bg-center bg-no-repeat">
        </div>

        {/* Title Sponsor Section */}
        <div className="w-full overflow-visible mt-[5%] bg-[url('./assets/sponsors/title-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ minHeight: 'clamp(8rem, 10vw, 15rem)' }}>
          <div className="w-full h-20 bg-[url('./assets/sponsors/titlesponsor.png')] bg-contain bg-center bg-no-repeat" style={{height: 'clamp(3.5rem, 6vw, 20rem)'}}>
          </div>
        </div>

        {/* Title Sponsor Logos */}
        <div className='w-full mt-[2%] p-[2%]'>
          <div className='flex justify-center items-center gap-[3%]'>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex-1 max-w-55 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat"/>
              </div>
            ))}
          </div>
        </div>

        {/* Co-Title Sponsor Section */}
        <div className="w-full overflow-visible mt-[2%] bg-[url('./assets/sponsors/co-title-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ minHeight: 'clamp(8rem, 13vw, 15rem)' }}>
          <div className="w-full mt-5 bg-[url('./assets/sponsors/co-title.png')] bg-contain bg-center bg-no-repeat" style={{height: 'clamp(3.5rem, 5vw, 20rem)'}}>
          </div>
        </div>

        {/* Co-Title Sponsor Logos */}
        <div className='w-full mt-[2%] p-[2%]'>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(7)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
        </div>

        {/* Driving Partner Section */}
        <div className="w-full overflow-visible mt-[3%] bg-[url('./assets/sponsors/drive-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ minHeight: 'clamp(8rem, 13vw, 15rem)' }}>
          <div className="w-full bg-[url('./assets/sponsors/drive.png')] bg-contain bg-center bg-no-repeat" style={{height: 'clamp(3.5rem, 5vw, 20rem)'}}>
          </div>
        </div>

        {/* Driving Partner Logos */}
        <div className='w-full mt-[2%] p-[2%]'>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(7)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
        </div>

        {/* Food Partner Section */}
        <div className="w-full overflow-visible mt-[3%] bg-[url('./assets/sponsors/food-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ minHeight: 'clamp(8rem, 13vw, 15rem)' }}>
          <div className="w-full mt-5 bg-[url('./assets/sponsors/food.png')] bg-contain bg-center bg-no-repeat" style={{height: 'clamp(3.5rem, 5vw, 20rem)'}}>
          </div>
        </div>

        {/* Food Partner Logos */}
        <div className='w-full mt-[2%] p-[2%]'>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(7)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(7)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <div className="w-[88%] h-[88%] bg-[url('./assets/sponsors/elli3.png')] bg-contain bg-center bg-no-repeat" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full absolute bottom-0 bg-[url('./assets/sponsors/conclusion.png')] bg-cover bg-center bg-no-repeat" style={{ minHeight: 'clamp(4rem, 14vw, 14.5rem)'}}></div>
      </div>

    </>
  )
}

export default Sponsors
