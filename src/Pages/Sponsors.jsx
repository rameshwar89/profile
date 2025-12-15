import React from 'react'

const sponsorImages = import.meta.glob('../assets/sponsors/elli*.png', { eager: true, import: 'default' })

const Sponsors = () => {
  const getImage = (filename) => {
    const path = `../assets/sponsors/${filename}`
    return sponsorImages[path]
  }

  // Define sponsor logo data - replace with actual sponsor logo filenames
  const titleSponsors = [
    'elli1.png',
    'elli2.png',
    'elli3.png',
    'elli4.png'
  ];

  const coTitleSponsorsRow1 = [
    'elli5.png', 'elli6.png', 'elli7.png', 'elli8.png', 'elli9.png', 'elli10.png', 'elli11.png'
  ];

  const coTitleSponsorsRow2 = [
    'elli12.png', 'elli13.png', 'elli14.png', 'elli15.png', 'elli16.png', 'elli17.png'
  ];

  const drivingPartnersRow1 = [
    'elli18.png', 'elli19.png', 'elli20.png', 'elli21.png', 'elli22.png', 'elli23.png', 'elli24.png'
  ];

  const drivingPartnersRow2 = [
    'elli25.png', 'elli26.png', 'elli27.png', 'elli28.png', 'elli29.png', 'elli30.png'
  ];

  const foodPartnersRow1 = [
    'elli31.png', 'elli32.png', 'elli33.png', 'elli34.png', 'elli35.png', 'elli36.png', 'elli37.png'
  ];

  const foodPartnersRow2 = [
    'elli38.png', 'elli39.png', 'elli40.png', 'elli41.png', 'elli42.png', 'elli43.png'
  ];

  const foodPartnersRow3 = [
    'elli44.png', 'elli45.png', 'elli46.png', 'elli47.png', 'elli48.png', 'elli49.png', 'elli50.png'
  ];

  const foodPartnersRow4 = [
    'elli51.png', 'elli52.png', 'elli53.png', 'elli54.png', 'elli55.png', 'elli56.png'
  ];

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
            {titleSponsors.map((logo, index) => (
              <div key={index} className="flex-1 max-w-55 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
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
            {coTitleSponsorsRow1.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {coTitleSponsorsRow2.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
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
            {drivingPartnersRow1.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {drivingPartnersRow2.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
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
            {foodPartnersRow1.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {foodPartnersRow2.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {foodPartnersRow3.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center gap-[2%]'>
            {foodPartnersRow4.map((logo, index) => (
              <div key={index} className="w-[calc((100%-12%)/7)] max-w-43 aspect-square relative flex items-center justify-center bg-[url('./assets/sponsors/tea2.png')] bg-contain bg-center bg-no-repeat">
                <img src={getImage(logo)} alt="sponsor" className="w-[88%] h-[88%] object-contain" />
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
