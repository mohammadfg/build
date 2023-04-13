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
  const valueParameter = pathname.substring(10);

  async function uri(urlparameter) {
    const id = urlparameter.substring(10);
    const result = await Promise.all([Api(id), typeof +id === "number" && Api("Related", id)]);
    setcontentapi(await result[0]);
    setRelated(await result[1]);
  }

  useEffect(() => {
    uri(pathname);
  }, [pathname]);
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
              if (!Title.includes("اسلایدر")) {
                return (
                  <Lists
                    key={index}
                    title={Title}
                    listValue={ContentSummaryRows}
                    background={Image}
                  />
                );
              }
            })}
          </div>
        ) : ('AttachmentList' in Result) && (
          <Main mainValue={Result} relatedContent={related} />
        )}

        <Footer />
      </>
    );
  } else if (Object.keys(contentapi) === 0) {
    return <Founder loading />
  }
}
