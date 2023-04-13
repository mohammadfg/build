import { checkLoggedInUser } from '../../Connections'
import { useState, useEffect } from 'react'
import Player from './Player';
import Download from './Download';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header({ headerValue }) {
  const {
    Title,
    EnglishBody,
    LandscapeImage,
    TrailerList,
    AttachmentList,
    ContentID,
    Properties
  } = headerValue;

  const [loginState, setloginState] = useState();
  const [display, setDisplay] = useState(false);
  const [displaydownload, setdisplaydownload] = useState(false);
  const [ip, setip] = useState(false);


  async function country() {
    const ip = "https://api.linkirani.ir/apiv1/client/current";
    try {
      const { ipCountryCode = 'ir' } = await fetch(ip).json();
      setip(ipCountryCode === "ir" ? true : false);
    } catch (error) {
      setip(true);
    }
  }
  useEffect(() => {
    country();
    checkLoggedInUser().then(res => setloginState(res));
  }, [])

  return (
    <>
      <header>
        <div className="flex sm:flex-row-reverse flex-col">
          <div className="sm:w-3/4 w-full relative">
            <img
              src={"https://cdn.tek-nic.com/image/1280/panel/" + ContentID + "/thumb.jpg"}
              alt="poster"
              className="sm:block hidden"
            />
            <img src={"https://cdn.tek-nic.com/image/850/panel/" + ContentID + "/portrait.jpg"} alt="poster" className="sm:hidden" />
            <div className="sm:visible invisible  w-3/12 h-full right-0 top-0 bg-gradient-to-r from-transparent to-black absolute"></div>

            <div className="w-full h-36 left-0 bg-gradient-to-b from-transparent to-black absolute bottom-[-1px]"></div>
          </div>
          <div className="m-7 mt-0 sm:mt-14 sm:w-2/6">
            <h1 className="text-3xl my-2">{Title}</h1>
            <h2 className="text-xl text-gray-700">{EnglishBody}</h2>
            {
              Properties.map(({ Name, Value }, index) => {
                if (["سال", "رده سنی", "تاریخ اکران", "ژانر", "کارگردان", "زبان", "کشور", "رتبه IMDB"].includes(Name))
                  return (
                    <h3 key={index}>
                      {Name} : {Value}
                    </h3>
                  )
              })
            }
            <div className="mt-3 flex text-center">
              <button
                onClick={() => {
                  if (!loginState || !ip) {
                    toast.warn("برای دانلود لطفاٌ" + (!ip ? "vpn خود را خاموش کنید" : !loginState && " وارد سایت شوید"));
                  } else {
                    setdisplaydownload(true);
                  }
                }}
                className="bg-green-600 rounded-md p-2 px-5 sm:w-auto w-full"
              >
                دانلود و تماشا
              </button>
              {TrailerList.length >= 1 ?
                <button
                  onClick={() => { if (!ip) { toast.warn("لطغا برای مشاهده vpn خود را خاموش کنید") } else { setDisplay(true) } }}
                  className="bg-stone-600 mx-1 rounded-md p-2 px-5 sm:w-auto w-full"
                >
                  پیش نمایش
                </button> :
                <button
                  className="bg-stone-600 mx-1 rounded-md p-2 px-5 sm:w-auto w-full"
                >
                  تریلر بزودی ...
                </button>
              }

            </div>
          </div>
        </div>
      </header>
      {
        TrailerList.length >= 1 && display ?
          <div className={display ? "fixed  z-[3] w-full h-full bg-[#000000ba] top-0" : "hidden"} onClick={() => setDisplay(false)}>
            <button className="text-red-700 top-4 right-4 text-4xl p-2 z-[1] bg-[#4242428a] rounded-full pb-0 m-3" onClick={() => setDisplay(false)}>X</button>

            <Player info={TrailerList[0]} image={LandscapeImage} />  </div>
          : null
      }
      {
        AttachmentList.length >= 1 && displaydownload && loginState ?
          <div className={displaydownload ? "fixed w-full h-full bg-[#000000ba] top-0 flex justify-center items-center z-[3]" : "hidden"} onClick={() => setDisplay(false)}>
            <button className="text-red-700 absolute top-4 right-4 text-4xl p-2 z-[1] bg-[#4242428a] rounded-full pb-0" onClick={() => setdisplaydownload(false)}>X</button>
            <Download listdl={AttachmentList} />
          </div>
          : null
      }
    </>
  );
}
