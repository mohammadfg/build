import { useState } from "react";
import { handleLogin } from '../../Connections'
import { Player } from '@lottiefiles/react-lottie-player'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setform] = useState({ email: "", password: "" });
  const [display, setDisplay] = useState(false);
  // const [Error, setError] = useState({ email: "", warning: "" });
  const [ErrorServer, setErrorServer] = useState({});

  function handleform({ target: { type, value } }) {
    setform((calback) => {
      return { ...calback, [type]: value }
    })
  } function handleDisplay(params) {
    if (params === "success") { navigate("/"); } else {
      setDisplay(!display);
    }
  }
  async function handleSubmit() {
    const { email } = form;
    const regex = /^[a-zA-Z0-9]+[a-zA-Z0-9._]*@(outlook|hotmail|live|msn|gmail)\.(com|co\.uk)$/;
    if (regex.test(email)) {
      handleDisplay();
      const result = await handleLogin(form);
      setErrorServer(result);
    }
  }

  return (
    <div
      className="flex justify-center flex-col h-screen items-center mx-auto"
      style={{ backgroundImage: "url('./images/backgroun_login.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <img
        src="./images/logo.svg"
        alt="poster"
        className="absolute top-20 w-40 cursor-pointer"
        onClick={() => { navigate("/"); }}
      />

      <form
        style={{ boxShadow: "0px 0px 13px 3px black" }}
        className="md:w-1/4 w-11/12 p-4 backdrop-blur-xl rounded-xl max-h-80"
      >

        <div className={!display ? 'hidden' : "block text-center "}>
          <Player
            autoplay
            loop
            src={('code' in ErrorServer) && ErrorServer.code === 205 ? "./animation/sendemail.json" :
              ErrorServer.code === 200 ? "./animation/login.json" : ErrorServer.code === 101 ? "./animation/notfound.json" : "./animation/loading.json"}
            style={{ height: "200px", width: "200px" }}

          ></Player>
          <p>{ErrorServer.message ?? ""}</p>
          <input
            type="button"
            className={"rounded-md p-2 opacity-0 my-2 cursor-pointer w-full transition-opacity duration-300 " + (('code' in ErrorServer) && (ErrorServer.code === 200 ? 'bg-green-600 opacity-100' : "bg-orange-400  opacity-100"))}
            value={ErrorServer.code === 200 ? "ورود به صفحه اصلی" : "چیزی را اشتباه وارد کردید ؟"}
            onClick={() => { ErrorServer.code === 200 ? handleDisplay('success') : handleDisplay() }}
          />
        </div>
        <div className={display ? 'hidden' : "block"}>

          <div>
            <label className="block mb-2">نام کاربری (ایمیل)</label>
            <input
              className="border border-sky-500 rounded-md bg-transparent p-2 focus:ring-sky-600 w-full focus:ring"
              type="email"
              onChange={handleform}
            />
          </div>
          <div>
            <label className="block my-2">گذرواژه</label>
            <input
              className="border border-sky-500 rounded-md bg-transparent p-2 focus:ring-sky-600 w-full focus:ring"
              type="password"
              onChange={handleform}
            />
          </div>
          <input
            type="button"
            className="bg-teal-500 rounded-md p-2  my-2 cursor-pointer w-full"
            value="ورود / ثبت نام"
            onClick={handleSubmit}
          />
          <a
            href="/"
            className="bg-white rounded-md text-black p-2 block text-center"
          >
            Sing uo with Google
            <img src="/icons/google.svg" alt="google" className="inline" />
          </a>
        </div>

      </form>
    </div>
  );
}
