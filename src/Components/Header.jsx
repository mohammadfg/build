import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import List from "./Lists2";
import { checkLoggedInUser, logOut } from '../Connections'
import { Api } from '../Api'
import { ToastContainer, toast } from 'react-toastify';
import { Player } from '@lottiefiles/react-lottie-player'


export default function Header() {
  const [element, setelement] = useState(false);
  const [search, setsearch] = useState(false);
  const [searchData, setsearchData] = useState("");
  const [loginState, setloginState] = useState();

  async function handleSearch() {
    if (typeof searchData != 'object') {
      const { Contents } = await Api("Search", searchData);
      setsearchData(Contents);
    }
  }
  useEffect(() => {

    checkLoggedInUser().then(res => {
      setloginState(res)
    });

    handleSearch();


    function handleScroll() {
      if (window.scrollY >= 200) {
        setelement(true);
      } else {
        setelement(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLoguot() {
    logOut();
    setloginState();
    toast.success("با موفقیت از حساب خود خارج شدید");
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  return (
    <>
      <ToastContainer rtl={true} position="top-right" style={{ padding: "10px" }} />
      {/** navbar */}
      <nav
        className={`fixed mt-10 p-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] rounded-xl w-11/12 container transition ${element ? "bg-[#ffffff21]" : "bg-transparent"
          }`}
      >
        <a href="/" className="float-right">
          <img src="/images/logo.svg" alt="logo" className="h-6" />
        </a>
        {/*  <div className="float-right mx-5 sm:block hidden">
          <ul className="flex gap-x-3 float-right">
            <li>
              <Link to="/contents/Movies">فیلم</Link>
            </li>
            <li><Link to="/contents/Kids">انیمیشن</Link></li>
          </ul> 
        </div>*/}
        {
          loginState ?
            <div className="float-left mx-1  p-1 px-3 group">
              <img src="/icons/user.svg" alt="Profile" />

              <button className="absolute rounded-md text-black bg-white group-hover:block hidden py-1 px-4 mt-1 text-xs" onClick={handleLoguot}>خروج</button>
            </div>
            :
            <Link
              to="/login"
              className="float-left bg-slate-200 mx-1 rounded-md p-1 px-3 text-black"
            >ورود</Link>
        }
        <button
          to="/"
          className="float-left m-1 mb-0 mx-3"
          onClick={() => {
            setsearch(true);
          }}
        >
          <img src="/icons/search.svg" alt="search" />
        </button>
      </nav>

      <div
        className={`fixed z-[3] flex bg-[#000000e3]  transition-all duration-300 ease-in-out w-full h-full justify-center items-center ${search ? "visible opacity-100" : "invisible opacity-0"
          }`}
        onClick={() => {
          setsearch(false);
        }}
      >
        <button
          className="text-red-700 absolute top-4 right-4 text-4xl p-2 z-[1] bg-[#4242428a] rounded-full pb-0"
          onClick={() => {
            setsearch(false);
          }}
        >
          X
        </button>
        <div className="flex-col w-full flex items-center h-full overflow-y-scroll">
          <div className="relative w-11/12 mt-32" onClick={(e) => { e.stopPropagation(); }}>
            <input
              type="text"
              placeholder="جستجوی انواع فیلم و انیمیشن"
              className="bg-stone-900 rounded-md p-4 w-full"
              onChange={(e) => {
                setsearchData(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
            <button
              className="absolute mt-[14px] -mr-11"
              onClick={handleSearch}
            >
              <img src="/icons/search.svg" alt="search" />
            </button>
          </div>

          <ul className="p-3 sm:w-4/5 w-full">
            {Array.isArray(searchData)
              ? searchData.length >= 1 ? searchData.map(({ Title, Summary, ContentID, ZoneID }) => {
                if (ZoneID === 4) {
                  return (
                      <List title={Title} summery={Summary} id={ContentID} />
                  );
                }
              }) :
                <Player src='/animation/search.json' loop autoplay style={{ width: "150px" }} />
              : null}
          </ul>
        </div>
      </div>
    </>
  );
}
