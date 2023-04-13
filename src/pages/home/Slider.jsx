import { Link } from "react-router-dom";


const urlimage = "https://cdn.tek-nic.com/media/images/panel/";

export default function Slider({ sliderValue }) {
  const { ContentSummaryRows } = sliderValue;
  return (
    <div className="relative">
      <swiper-container
        style={{
          "--swiper-navigation-size": "10px",
          "--swiper-navigation-color": "#fff",
        }}
        autoplay-delay="6000"
        navigation={true}
        speed="500"
      >
        {ContentSummaryRows.map(({ ContentId, Title, EnglishTitle, ZoneId }) => {
          if (ZoneId === 4)
            return (
              <swiper-slide key={ContentId}>
                <img
                  src={urlimage + ContentId + "/landscape.jpg"}
                  className="w-screen h-screen object-cover sm:block hidden"
                  loading="lazy"
                  alt="Poster"
                />
                <img
                  src={urlimage + ContentId + "/portrait.jpg"}
                  className="w-screen h-screen object-cover block sm:hidden"
                  loading="lazy"
                  alt="Poster"
                />
                <div className="absolute sm:right-24 top-1/4 text-white sm:text-right w-full text-center">
                  <h1 className="text-2xl font-bold">{Title}</h1>
                  <h1 className="text-xl mb-10 font-bold">{EnglishTitle}</h1>

                  <Link
                    to={"/contents/" + ContentId}
                    className="bg-green-600 text-black rounded-md p-2 mx-3 shadow-md"
                  >
                    تماشا کنید
                  </Link>
                  <Link to={"/contents/" + ContentId} className="bg-slate-200 text-black rounded-md p-2 shadow-md">
                    اطلاعات بیشتر
                  </Link>
                </div>
                <div className="swiper-lazy-preloader"></div>
              </swiper-slide>
            );
        })}
      </swiper-container>
      <div className="w-full h-2/6 left-0 bg-gradient-to-b from-transparent to-black absolute bottom-[-1px] z-[1]"></div>
    </div >
  );
}
