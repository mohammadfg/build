import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export default function Verify() {
  return (
    <div className='flex text-white text-center justify-center flex-col ' dir='rtl'>
      <Player autoplay loop src="./animation/email_verify.json" style={{ "width": "280px", "margin-top": "10px" }} />
      <h2 className='mt-0'>🎉تبریک ! عملیات با موفقیت انجام شد</h2>
    </div>
  )
}
