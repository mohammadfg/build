import { Player } from '@lottiefiles/react-lottie-player'

export default function Notfound() {
  return (
    <div className='flex justify-center items-center flex-col h-screen text-center'>
      <h1 className='font-bold text-3xl mt-10'></h1>
      <Player src="/animation/404.json" loop style={{ width: "250px" }} autoplay />
    </div>
  )
}
