import Lists from "../../Components/Lists";
import Comments from "./comments";

export default function Main({ mainValue, relatedContent }) {
  // if (!Array.isArray(mainValue)) {
  const { Body, StarsList, CommentTemplateList } = mainValue;
  const { Result: { RelatedContents } } = relatedContent;

  return (
    <main className="px-2 sm:px-5">
      <div>
        <h2 className="text-lg my-4 break-words text-yellow-400 text-center">🎊 حجم مصرفی اینترنت از دانلود و مشاهده فیلم ها نیم بها و تا یک سوم آن نیز محاسبه خواهد شد </h2>
        <h2 className="text-3xl my-4 break-words">چکیده داستان :</h2>
        <p dangerouslySetInnerHTML={{ __html: Body }}></p>
      </div>
      <div>
        <h2 className="text-3xl my-4  break-words">عوامل :</h2>
        <div>
          {/*ref={scrollRef} */}
          <div className="relative">
            <ul className="flex flex-nowrap gap-3">
              <swiper-container
                update-on-window-resize="true"
                width="360"
                slides-per-view="3"
                style={{
                  "--swiper-navigation-size": "10px",
                  "--swiper-navigation-color": "#fff",
                }}
                navigation={true}
              >
                {StarsList.map(({ PersianName, AvatarUrl }, index) => (
                  <swiper-slide key={index}>
                    <li className=" w-28 text-center flex-shrink-0 ">
                      <img
                        src={AvatarUrl || "/icons/user.svg"}
                        alt="stars"
                        className="w-28 rounded-2xl"
                      />
                      <h5>{PersianName}</h5>
                    </li>
                  </swiper-slide>
                ))}
              </swiper-container>
            </ul>
          </div>
          {/* 
          <button
            className="absolute left-0"
            onClick={() => {
              handleClick("left");
            }}
          >
            {"-->"}
          </button>
          <button
            className="absolute right-0"
            onClick={() => {
              handleClick("right");
            }}
          >
            {"<--"}
          </button> */}
        </div>
      </div>
      {
        RelatedContents.length > 1 &&
        <Lists
          title="فیلم های مرتبط :"
          listValue={RelatedContents}
          background="" />
      }
      <div>
        <h2 className="text-3xl my-4 break-words">نظرات کاربران :</h2>
        <Comments commentValue={CommentTemplateList} />
      </div>
    </main>
  );
  //  }
}
