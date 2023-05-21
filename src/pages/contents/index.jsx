import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeadHome from "../../Components/Header";
import Footer from "../../Components/Footer";
import Header from "./Header";
import Main from "./Main";
import Lists from "../../Components/Lists";
import { Api } from "../../Api";
import Founder from "../Founder";

export default function Index() {
  const { pathname } = useLocation();
  //------- Get and Set data form api
  const [contentapi, setcontentapi] = useState({});
  const [related, setRelated] = useState();
  const [pageIndex, setPageIndex] = useState(25);

  const valueParameter = pathname.substring(10);

  async function uri(urlparameter, pageIndex) {
    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    const id = urlparameter.substring(10);
    const result = await Promise.all([Api(id, pageIndex), isNumber(id) && Api("Related", id)]);
    setcontentapi((value) => ({ ...value, ...result[0] }));
    setRelated(result[1]);
  }
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const valueParameter = pathname.substring(10);
    if (scrollTop + clientHeight >= scrollHeight && ["History", "Mystery"].includes(valueParameter)) {
      setPageIndex((value) => value + 30);
    }
  };
  useEffect(() => {
    uri(pathname, pageIndex);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, pageIndex]);

  if (('Result' in contentapi)) {
    const { Result } = contentapi;
    return (
      <>
        <HeadHome />

        {('AttachmentList' in Result) ? (
          <Header headerValue={Result} />
        ) : null}

        {["Kids", "Movies", "Crime", "Actions", "Adventure", "History", "Horror", "Mystery"].includes(valueParameter) && Array.isArray(Result.Sections) ? (
          <div className="pt-20">
            {Result.Sections.map(({ Title, ContentSummaryRows, Image }, index) => {
              if (!Title.includes("اسلایدر") && ContentSummaryRows.some(({ ZoneId }) => ZoneId === 4)) {
                return (
                  <Lists
                    key={index}
                    title={Title}
                    listValue={ContentSummaryRows}
                    background={Image}
                    sectionsCount={Result.Sections.length}
                  />
                );
              }
            })}
          </div>
        ) : ('AttachmentList' in Result) && (
          <><Main mainValue={Result} relatedContent={related} /><Footer /></>
        )}


      </>
    );
  } else if (Object.keys(contentapi) === 0) {
    return <Founder loading />
  }
}
