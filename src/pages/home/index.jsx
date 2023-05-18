import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Slider from "./Slider";
import Lists from "../../Components/Lists";
import Footer from "../../Components/Footer";
import { Api } from '../../Api'
import { Link } from 'react-router-dom'

export default function Home() {
  //------- Get and Set data form api
  const [apidata, setapidata] = useState({});

  async function uri() {
    const Result = await Api('Movies');
    setapidata(Result);
  }

  useEffect(() => {
    uri();
  }, []);

  let category = [
    { title: "انیمیشن", link: "Kids", images: "https://tv.filmnet.ir/images/79/2e/792e3ab8a8554650869a4951f9316921.jpg?w=500" },
    { title: "اکشن", link: "Actions", images: "https://tv.filmnet.ir/images/43/fa/43fa79fb37fe48f3af910845d99a0c3b.jpg?w=500" },
    { title: "ماجراجویی", link: "Adventure", images: "https://tv.filmnet.ir/images/3d/15/3d152cdb004d46aea72a44eca9e630e5.jpg?w=500" },
    { title: "تاریخی", link: "History", images: "https://tv.filmnet.ir/images/33/36/3336d2d374984d5aa95d4811ff29e0b8.jpg?w=500" },
    { title: "ترسناک", link: "Horror", images: "https://tv.filmnet.ir/images/5a/c7/5ac79b71c73e47f2b044b1623da0bd0d.jpg?w=500" },
    { title: "جنایی", link: "Crime", images: "https://tv.filmnet.ir/images/22/d6/22d6bdb83e864fddbd28f68f04ecb324.jpg?w=500" },
    { title: "معمایی", link: "Mystery", images: "https://tv.filmnet.ir/images/30/76/3076e55fdf1e4db7b52c399cbd50bb79.jpg?w=500" },

  ];
  if (apidata.Status === 200) {
    if ('Sections' in apidata.Result) {
      const { Result: { Sections } } = apidata;
      return (
        <>
          <header>
            <Header />

            <Slider sliderValue={Sections[0]} />
            {/** Zhanr ha */}
            <div className="relative top-[-54px] z-[1]">
              <h3 className="text-3xl mb-2 px-5">ژانر</h3>

              <div className="lists overflow-x-scroll">
                <div className="flex sm:justify-center  sm:w-11/12 w-[720px] mx-5 flex-wrap gap-2">
                  {
                    category.map(({ title, images, link }, index) => {

                      return (<Link key={index} to={"/contents/" + link} className="w-52">
                        <img
                          src={images}
                          alt={title}
                          className="rounded "
                        />
                      </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </header>

          {Sections.map(({ Description, ContentSummaryRows, Image, SectionId, Title, Total }) => {
            const titleSite = Total > 1 ? Title : Description;

            if (!titleSite.includes("اسلایدر")) {
              // let filtertitle = Description.includes("تک بنر") ? "" : Description;
              //const titleSite = Total > 1 ? Title : Description;
              let filtertitle = titleSite.includes("گپ فیلم") ? titleSite.replace("گپ فیلم", "نت فیلم") : titleSite;
              return (
                <Lists
                  key={SectionId}
                  title={filtertitle}
                  listValue={ContentSummaryRows}
                  background={Image}
                />
              );
            }
          })}
          <Footer />
        </>
      );
    } else {
      return (<h2 className="h-screen flex justify-center items-center" dir="ltr">خطایی رخ داده است . بزودی آن را برسی می کنیم</h2>)
    }
  } else {
    return (<h2 className="h-screen flex justify-center items-center" dir="ltr">{apidata.message}</h2>)
  }
}
