import { useState } from "react";
import { handleLogin, restorePassword } from '../../Connections'
import { Player } from '@lottiefiles/react-lottie-player'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [form, setform] = useState({ email: "", password: "" });
  const [display, setDisplay] = useState(false);
  const [Error, setError] = useState({ email: "", password: "" });
  const [ErrorServer, setErrorServer] = useState({});

  function handleform({ target: { type, value } }) {
    setform((calback) => {
      return { ...calback, [type]: value }
    })
  } function handleDisplay(params) {
    if (params === "success") { window.location.replace("/") } else {
      setDisplay(!display);
    }
  }
  async function handleSubmit(value = {}, jwt = "") {
    const result = Object.keys(value).length > 1 ? value : form;
    const regex = /^[a-zA-Z0-9]+[a-zA-Z0-9._]*@(outlook|hotmail|live|msn|gmail)\.(com|co\.uk)$/;
    if (regex.test(result.email) && ('password' in result ? (result.password >= 3 ? true : false) : true)) {
      handleDisplay();
      const result2 = await handleLogin(result, jwt);
      setErrorServer(result2);
    } else {
      setError(
        {
          email: (regex.test(result.email) ? "" : "لطفا ایمیلی معتبر وارد کنید"),
          // ...('password' in result ? (result.password >= 3 ? { password: "" } : { password: "گذرواژه باید بیشتر از 3 حرف باشد" }) : { password: "" })
          ...('password' in result ? (result.password >= 3 ? { password: "" } : { password: "گذرواژه باید بیشتر از 3 حرف باشد" }) : { password: "" })
        }
      )
    }
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }
  function restorePasswords() {
    if (form.email.length >= 2) {
      restorePassword(form.email)
      toast.success("ایمیل بازیابی رمزعبور ارسال گردید !")
    }
  }
  return (
    <div
      className="flex justify-center flex-col h-screen items-center mx-auto overflow-hidden relative"
      style={{ backgroundImage: "url('./images/backgroun_login.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <ToastContainer rtl={true} position="top-right" style={{ padding: "10px" }} />
      <img
        src="./images/logo.svg"
        alt="poster"
        className="absolute top-20 w-40 cursor-pointer"
        onClick={() => { window.location.replace("/"); }}
      />

      <form
        style={{ boxShadow: "0px 0px 13px 3px black" }}
        className="md:w-1/4 w-11/12 p-4 backdrop-blur-xl rounded-xl max-h-96"
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
            className={"rounded-md p-2 opacity-0 my-1 cursor-pointer w-full transition-opacity duration-300 " + (('code' in ErrorServer) && (ErrorServer.code === 200 ? 'bg-green-600 opacity-100' : "bg-orange-400  opacity-100"))}
            value={ErrorServer.code === 200 ? "ورود به صفحه اصلی" : "چیزی را اشتباه وارد کردید ؟"}
            onClick={() => { ErrorServer.code === 200 ? handleDisplay('success') : handleDisplay() }}
          />
          <input
            type="button"
            className={"rounded-md p-2 opacity-0 mt-1 cursor-pointer w-full transition-opacity duration-300 " + (('code' in ErrorServer) && (ErrorServer.code === 200 ? 'hidden' : "bg-violet-500  opacity-100 block"))}
            value="گذرواژه خود را فراموش کردید ؟"
            onClick={() => { restorePasswords() }}
          />
        </div>
        <div className={display ? 'hidden' : "block"}>

          <div>
            <label className="block mb-2">نام کاربری (ایمیل)</label>
            <input
              className={"border rounded-md bg-transparent p-2 w-full " + (Error.email.length > 0 ? "border-red-600 " : "border-sky-500 focus:ring-sky-600")}
              type="email"
              onFocus={() => { setError((obj) => { return { ...obj, email: "" } }) }}
              onKeyDown={handleKeyDown}
              onChange={handleform}
            />
            <p className={Error.email.length > 0 ? "text-red-500 text-sm font-bold mt-1 block" : "hidden"}>{Error.email}</p>
          </div>
          <div>
            <label className="block my-2">گذرواژه</label>
            <input
              className={"border rounded-md bg-transparent p-2 w-full " + (Error.password.length > 0 ? "border-red-600 " : "border-sky-500 focus:ring-sky-600")}
              type="password"
              onFocus={() => { setError((obj) => { return { ...obj, password: "" } }) }}
              onKeyDown={handleKeyDown}
              onChange={handleform}
            />
            <p className={Error.password.length > 0 ? "text-red-500 text-sm font-bold mt-1 block" : "hidden"}>{Error.password}</p>
          </div>
          <input
            type="button"
            className="bg-teal-500 rounded-md p-2  my-2 cursor-pointer w-full"
            value="ورود / ثبت نام"
            onClick={() => { handleSubmit() }}

          />
          <GoogleOAuthProvider clientId="166052930912-1efj39514fjq6jg1mp0hsi9kfitgndi9.apps.googleusercontent.com">
            <GoogleLogin

              onSuccess={credentialResponse => {
                var decoded = jwt_decode(credentialResponse.credential);
                handleSubmit(decoded, credentialResponse.credential)
              }}
              onError={() => {
                toast.error("خطایی رخ داده است ، لطفا چند دقیقه بعد امتحان کنید")
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </form>
    </div>
  );
}
