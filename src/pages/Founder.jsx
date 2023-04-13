import { Player } from '@lottiefiles/react-lottie-player'

export default function Founder(condition) {
  return (
    <div className='flex justify-center flex-col items-center h-screen'>
      <Player src={'loading' in condition ? "/animation/loading.json" : "/animation/404.json"} loop autoplay style={{ width: "150px" }} />
      <h1>{'loading' in condition ? "درحال بارگذاری . . ." : "این صفحه دیگر وجود ندارد"}</h1>
    </div>
  )
}
