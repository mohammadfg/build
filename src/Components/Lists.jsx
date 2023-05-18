import { Link } from "react-router-dom";

export default function Lists({ listValue, title, background }) {

  const urlimage = "https://cdn.tek-nic.com/media/images/panel/";
  if (listValue[0].ZoneId === 4 || listValue.length >= 2)
    return (
      <div
        className={"p-4 pt-0 bg-cover sm:bg-contain" + (background.length > 0 ? " h-80 sm:h-[400px]" : "")}
        style={
          background.length > 0
            ? { backgroundImage: ` url(${(listValue.length > 2) ? background : urlimage + listValue[0].ContentId + '/landscape9x4.jpg'})`, backgroundRepeat: "no-repeat" }
            : null
        }
      // style={
      //   (background + "").length > 0
      //     ? { backgroundImage: `${!(listValue.length > 2) ? 'linear-gradient(to left,rgb(0 0 0 / 100%), rgb(0 0 0 /100%),rgb(0 0 0 /0%)),' : ""}   url("${background}")`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }
      //     : null
      // }
      >
        <h3 className="sm:text-4xl text-2xl pt-2">
          {title}
          {/* <img src="/icons/arrow.svg" alt="arrow" className="w-9 inline" /> */}
        </h3>
        <div className={"relative " + (listValue.length === 1 ? " mt-6" : "mt-2")}>
          {listValue.length >= 2 ?
            <ul className="lists flex flex-nowrap overflow-x-scroll">
              <swiper-container
                update-on-window-resize="true"
                width="130"
                centered-slides="true"
                style={{
                  "--swiper-navigation-size": "20px",
                  "--swiper-navigation-color": "#fff",
                }}
                navigation={true}
              >
                {listValue.map(({ ContentId, Title, Properties, ZoneId, ZoneID, ContentID }) => {
                  if (ZoneId === 4 || ZoneID === 4)
                    return (
                      <swiper-slide key={ContentId ?? ContentID}>
                        <li
                          className="p-1 w-32 flex-shrink-0 mb-2 group"
                          key={ContentId ?? ContentID}
                        >
                          <Link to={`/contents/${ContentId ?? ContentID}`}>
                            <div className="relative">
                              <img
                                loading="lazy"
                                className="rounded-md"
                                src={urlimage + (ContentId ?? ContentID) + "/portrait.jpg"}
                                alt="poster"
                              />
                              <div className="opacity-0 h-full transition group-hover:opacity-100 absolute p-2 leading-loose text-sm bg-[#000000ab] top-0 w-full">
                                {Properties.map(({ Name, Value }, index) => {
                                  if (Name === "سال" || Name === "ژانر") {
                                    return <p key={index}>{Name + ":" + Value}</p>;
                                  } else if (Name === "رتبه IMDB") {
                                    return (<span key={index}>
                                      <img
                                        src="/icons/imdb.svg"
                                        alt="imdb"
                                        className="inline w-1/4"
                                      />
                                      <span className="inline mr-4">{Value}</span>
                                    </span>)
                                  }
                                })}


                              </div>
                            </div>
                            <p className="mt-1 text-xs">{Title}</p>
                          </Link>
                        </li>
                      </swiper-slide>
                    )
                })}
              </swiper-container>
            </ul>
            : (<><Link
              to={"/contents/" + listValue[0].ContentId}
              className="bg-green-600 text-black rounded-md p-2 mx-3"
            >
              تماشا کنید
            </Link>
              <Link to={"/contents/" + listValue[0].ContentId} className="bg-slate-200 text-black rounded-md p-2">
                اطلاعات بیشتر
              </Link></>)}
        </div>
      </div>
    );
}
