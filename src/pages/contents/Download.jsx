
export default function Download({ listdl }) {
  const { Files } = listdl[0];
  return (
    <div className='w-11/12 sm:w-5/12 bg-zinc-800 rounded-md p-4'>

      {/* <ul className="sm:w-1/2 w-4/5 m-auto px-3 text-center  items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg flex">

        <li className="w-full">
          <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" />
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">دوبله فارسی</label>
          </div>
        </li>
        <li className="w-full">
          <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" />
            <label for="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900"> زبان اصلی</label>
          </div>
        </li>
      </ul> */}
      <img src="/images/download.png" alt="download" className="m-auto"/>
      {Files.map(({ FileExtension, Description, Quality, Path },index) => {
        const details = FileExtension === 'srt' ? "دانلود زیرنویس " + Description : FileExtension === 'mp4'
          ? "دانلود فیلم با کیفیت" + (Quality === 5 ? 1080 : Quality === 4 ? 720 : Quality === 3 ? 480 : Quality === 2 ? 360 : 240) : null
          ;
        return details ? <a href={Path} target="_blank" rel="noopener noreferrer" className='border-red-600 border-2 p-3 block rounded-lg my-2' key={index}>{details}</a> : null;
      })}
    </div>
  )
}
