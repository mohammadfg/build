import { useState } from "react";
import Player from './Player';

export default function Download({ listdl, image }) {
  const { Files } = listdl[0];
  const [display, setdisplay] = useState(false);
  if (!display) {
    return (
      <div className='w-11/12 sm:w-5/12 bg-zinc-800 rounded-md p-4'>
        <img src="/images/download.png" alt="download" className="m-auto" />

        {Files.map(({ FileExtension, Description, Quality, Path }, index) => {
          const details = FileExtension === 'srt' ? "دانلود زیرنویس " + Description : FileExtension === 'mp4'
            ? "دانلود فیلم با کیفیت" + (Quality === 5 ? 1080 : Quality === 4 ? 720 : Quality === 3 ? 480 : Quality === 2 ? 360 : 240) : null
            ;
          return details ? <a href={Path} target="_blank" rel="noopener noreferrer" className='border-red-600 border-2 p-3 block rounded-lg my-2' key={index}>{details}</a> : null;
        })}
        <button className='border-red-600 border-2 p-3 block rounded-lg my-2 w-full' onClick={() => { setdisplay(true) }}>👀 تماشا به صورت آنلاین</button>
      </div>
    )
  } else {
    return <Player info={listdl[0]} image={image} />
  }
}
