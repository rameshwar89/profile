import React, { useState } from 'react'

const Passes = () => {
  // pass data
  const passInfo = {
    cosmic: { passType: 'Cosmic', day: 'All Days', flagship: true, price: 2999 },
    galaxy: { passType: 'Galaxy', day: 'All Days', flagship: true, price: 1999 },
    part: { passType: 'Part', day: 'All Days', flagship: false, price: 1499 },
    day1: { passType: 'Day Pass', day: 'Day 1', flagship: false, price: 799 },
    day2: { passType: 'Day Pass', day: 'Day 2', flagship: false, price: 799 },
    day3: { passType: 'Day Pass', day: 'Day 3', flagship: false, price: 799 }
  }

  // State for quantities
  const [quantities, setQuantities] = useState({
    cosmic: 0,
    galaxy: 0,
    part: 0,
    day1: 0,
    day2: 0,
    day3: 0
  })

  // State for cart
  const [cart, setCart] = useState([])

  // Increase quantity
  const increaseQuantity = (passKey) => {
    setQuantities(prev => ({
      ...prev,
      [passKey]: prev[passKey] + 1
    }))
  }

  // Decrease quantity
  const decreaseQuantity = (passKey) => {
    setQuantities(prev => ({
      ...prev,
      [passKey]: Math.max(0, prev[passKey] - 1)
    }))
  }

  // Add to cart
  const addToCart = (passKey) => {
    const qty = quantities[passKey]
    if (qty === 0) {
      alert('Please select quantity first!')
      return
    }

    const pass = passInfo[passKey]
    const cartItem = {
      passType: pass.passType,
      day: pass.day,
      flagship: pass.flagship,
      qty: qty,
      price: pass.price,
      total: pass.price * qty
    }

    setCart(prev => {
      // Check if item already exists in cart
      const existingIndex = prev.findIndex(
        item => item.passType === cartItem.passType && item.day === cartItem.day
      )
      
      if (existingIndex >= 0) {
        // Update existing item
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          qty: updated[existingIndex].qty + qty,
          total: (updated[existingIndex].qty + qty) * pass.price
        }
        return updated
      } else {
        // Add new item
        return [...prev, cartItem]
      }
    })

    // Reset quantity after adding to cart
    setQuantities(prev => ({ ...prev, [passKey]: 0 }))
    alert(`${qty} x ${pass.passType} (${pass.day}) added to cart!`)
  }

  // Checkout function
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Cart is empty! Please add passes first.')
      return
    }

    console.log('Checkout Data:', cart)
    console.log('Total Amount:', cart.reduce((sum, item) => sum + item.total, 0))
    
    // TODO: Send cart data to your backend/payment gateway
    alert(`Checkout successful! Total items: ${cart.length}\nTotal Amount: ₹${cart.reduce((sum, item) => sum + item.total, 0)}`)
  }

  return (
    <>
      <div className='lg:hidden block relative overflow-x-hidden'>

        <div className='flex flex-col justify-center items-center w-full h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-1.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='relative'>
          <div className='w-120 h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-end items-end bg-[url("./assets/tickets/cosmic.png")] bg-contain bg-center bg-no-repeat'>
          <div className='w-40 h-20 right-6 -bottom-5 relative cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('cosmic')}>
              <div className='flex relative h-fit bottom-3 justify-center items-center gap-3 right-42 rotate-2'>
                <div className='w-20 h-5 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-5 h-5 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('cosmic'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.cosmic}</span>
                <div className='w-5 h-5 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('cosmic'); }} />
              </div>
            </div>
            </div>
        </div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-2.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-1.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='relative'>
          <div className='w-120 h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-end items-end bg-[url("./assets/tickets/galaxy.png")] bg-contain bg-center bg-no-repeat'>
          <div className='w-40 h-20 relative -bottom-5 right-20 -rotate-6 cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('galaxy')}>
              <div className='flex relative h-fit rotate-4 justify-center items-center gap-3 bottom-10 right-25'>
                <div className='w-20 h-5 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-5 h-5 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('galaxy'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.galaxy}</span>
                <div className='w-5 h-5 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('galaxy'); }} />
              </div>
            </div>
            </div>
        </div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-2.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-1.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='relative'>
          <div className='w-120 h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-end items-end bg-[url("./assets/tickets/part.png")] bg-contain bg-center bg-no-repeat'>
          <div className='w-40 h-20 relative right-10 -bottom-5 cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('part')}>
            <div className='flex relative h-fit bottom-3 items-center rotate-3 px-2 gap-3 right-50'>
                <div className='w-20 h-5 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-5 h-5 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('part'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.part}</span>
                <div className='w-5 h-5 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('part'); }} />
              </div>
            </div>
            </div>
        </div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-2.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-1.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='relative'>
          <div className='w-120 h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-end items-end bg-[url("./assets/tickets/day1.png")] bg-contain bg-center bg-no-repeat'>
          <div className='w-40 h-20 relative right-20 -bottom-5 -rotate-6 cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('day1')}>
            <div className='flex relative h-fit bottom-10 items-center rotate-3 px-2 gap-3 right-30'>
                <div className='w-20 h-5 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-5 h-5 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('day1'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.day1}</span>
                <div className='w-5 h-5 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('day1'); }} />
              </div></div>
            </div>
        </div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-2.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-1.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='relative'>
          <div className='w-120 h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-end items-end bg-[url("./assets/tickets/day2.png")] bg-contain bg-center bg-no-repeat'>
          <div className='w-40 h-20 relative right-10 -bottom-5 cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('day2')}>
            <div className='flex relative h-fit bottom-10 rotate-3 items-center px-2 gap-3 right-45'>
                <div className='w-20 h-5 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-5 h-5 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('day2'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.day2}</span>
                <div className='w-5 h-5 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('day2'); }} />
              </div></div>
            </div>
        </div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-2.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='flex flex-col justify-center w-screen h-90 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-1.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>

        <div className='relative'>
          <div className='w-120 h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-end items-end bg-[url("./assets/tickets/day3.png")] bg-contain bg-center bg-no-repeat'>
          <div className='w-40 h-20 relative right-20 -bottom-5 -rotate-5 cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('day3')}>
            <div className='flex relative h-fit bottom-10 rotate-3 items-center px-2 gap-3 right-30'>
                <div className='w-20 h-5 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-5 h-5 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('day3'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.day3}</span>
                <div className='w-5 h-5 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('day3'); }} />
              </div></div>
            </div>
        </div>

        <div className='w-50 h-40 absolute right-15 bottom-0 cursor-pointer bg-[url("./assets/tickets/checkout.png")] bg-contain bg-center bg-no-repeat' onClick={handleCheckout}></div>

        <div className='flex flex-col justify-center w-screen h-100 px-5 py-5 gap-4 bg-[url("./assets/tickets/bg-2.jpg")] bg-size-[120vw] bg-no-repeat bg-center'></div>


      </div>

      <div className='hidden lg:block'>
        <div className='flex justify-center items-center w-fit h-fit px-20 pt-40 pb-20 bg-[url("./assets/tickets/bg-1.jpg")] bg-size-[1850px] bg-no-repeat bg-center'>
          <div className='flex gap-2 w-350'>
          <div className='w-180 h-180 flex relative justify-end items-end bg-[url("./assets/tickets/cosmic.png")] bg-contain bg-center bg-no-repeat'>
            <div className='w-50 h-20 -right-6 -bottom-3 relative cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('cosmic')}>
              <div className='flex relative h-fit bottom-5 justify-center items-center gap-3 right-55 rotate-2'>
                <div className='w-30 h-10 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-10 h-10 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('cosmic'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.cosmic}</span>
                <div className='w-10 h-10 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('cosmic'); }} />
              </div>
            </div>
          </div>
          <div className='w-180 h-180 flex relative justify-end items-end left-5 bg-[url("./assets/tickets/galaxy.png")] bg-contain bg-center bg-no-repeat'>
            <div className='w-50 h-20 relative right-8 -rotate-6 cursor-pointer -bottom-3 bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('galaxy')}>
              <div className='flex relative h-fit bottom-15 rotate-4 justify-center items-center gap-3 right-40'>
                <div className='w-30 h-10 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-10 h-10 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('galaxy'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.galaxy}</span>
                <div className='w-10 h-10 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('galaxy'); }} />
              </div>
            </div>
          </div>
          <div className='w-180 h-180 flex relative justify-end items-end top-10 bg-[url("./assets/tickets/part.png")] bg-contain bg-center bg-no-repeat'>
            <div className='w-50 h-20 relative bottom-2 cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('part')}>
            <div className='flex relative h-fit bottom-5 items-center rotate-3 px-2 gap-3 right-55'>
                <div className='w-30 h-10 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-10 h-10 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('part'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.part}</span>
                <div className='w-10 h-10 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('part'); }} />
              </div>
            </div>
          </div>
          </div>
        </div>


        <div className='flex justify-center items-center w-fit h-fit px-20 pt-15 pb-60 relative bg-[url("./assets/tickets/bg-2.jpg")] bg-size-[1850px] bg-no-repeat bg-center'>
          <div className='flex w-350'>
          <div className='w-180 h-180 flex relative justify-end items-end bg-[url("./assets/tickets/day1.png")] bg-contain bg-center bg-no-repeat'>
            <div className='w-50 h-20 relative right-10 -rotate-6 cursor-pointer -bottom-3 bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('day1')}>
            <div className='flex relative h-fit bottom-15 items-center rotate-3 px-2 gap-3 right-15'>
                <div className='w-30 h-10 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-10 h-10 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('day1'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.day1}</span>
                <div className='w-10 h-10 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('day1'); }} />
              </div></div>
          </div>
          <div className='w-180 h-180 right-5 top-5 flex relative justify-end items-end bg-[url("./assets/tickets/day2.png")] bg-contain bg-center bg-no-repeat'>
            <div className='w-50 h-20 relative -right-3 -bottom-3 cursor-pointer bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('day2')}>
            <div className='flex relative h-fit bottom-5 rotate-3 items-center px-2 gap-3 right-55'>
                <div className='w-30 h-10 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-10 h-10 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('day2'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.day2}</span>
                <div className='w-10 h-10 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('day2'); }} />
              </div></div>
          </div>
          <div className='w-180 h-180 flex relative justify-end items-end bg-[url("./assets/tickets/day3.png")] bg-contain bg-center bg-no-repeat'>
            <div className='w-50 h-20 relative right-10 -rotate-5 cursor-pointer -bottom-4 bg-[url("./assets/tickets/addtocart.png")] bg-contain bg-center bg-no-repeat' onClick={() => addToCart('day3')}>
            <div className='flex relative h-fit bottom-12 rotate-3 items-center px-2 gap-3 right-15'>
                <div className='w-30 h-10 bg-[url("./assets/tickets/qty.png")] bg-contain bg-center bg-no-repeat' />
                <div className='w-10 h-10 bg-[url("./assets/tickets/plus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); increaseQuantity('day3'); }} />
                <span className='text-yellow-500 text-2xl font-[JustFontime] [text-shadow:2px_2px_0px_rgba(2,2,2,0.5)]'>{quantities.day3}</span>
                <div className='w-10 h-10 bg-[url("./assets/tickets/minus.png")] bg-contain bg-center bg-no-repeat cursor-pointer' onClick={(e) => { e.stopPropagation(); decreaseQuantity('day3'); }} />
              </div></div>
          </div>
          </div>
          <div className='w-80 h-45 absolute bottom-0 right-60 cursor-pointer bg-[url("./assets/tickets/checkout.png")] bg-contain bg-center bg-no-repeat' onClick={handleCheckout}>
          </div>
        </div>
      </div>
    </>
  )
}

export default Passes