import Parse from 'parse/dist/parse.min.js';
const APPLICATION_ID = "PCFt5CTwZhu8qWl0mXGAAoHqL3I5R53iefKu7ZKr";
Parse.initialize(APPLICATION_ID, "J594GmROMXF0u83jr1Wy11tSitNWNcfT5nv12HNp"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

//Saving your First Data Object on Back4App
async function handleLogin(values, jwt) {
  const { email, password } = values;
  const user = new Parse.User();
  user.set("username", email);
  user.set("email", email);

  if ('iss' in values) {
    try {
      //   authData: { id: "userGoogleId", id_token: "userTokenId" },
      await user.linkWith('google', {
        authData: { id: values.sub, id_token: jwt },
      });
      return { code: 200, message: "با موفقیت ثبت نام و وارد شدید" };

    } catch (error) {
      if (error.code === 202) {

        // const userToLink = await Parse.User.current();
        // let loggedInUser = await userToLink.linkWith('google', {
        //   authData: { id: values.sub, id_token: jwt }
        // });
        localStorage.setItem('Parse/' + APPLICATION_ID + '/currentUser', JSON.stringify({ "username": email, "email": email, "emailVerified": true, "ACL": { "*": { "read": true }, "Wk1i7R3EEe": { "read": true, "write": true } }, "objectId": "Wk1i7R3EEe", "className": "_User" }));

        return { code: 200, message: "با موفقیت وارد شدید" };
      }
      return { code: 205, message: "تلاش ناموفق بود لطفاْ از روش دیگری امتحان کنید" };

    }
  } else {
    user.set("password", password);
    try {
      await user.signUp();
      await Parse.User.logOut();
      return { code: 205, message: "برای تکمیل ثبت نام ایمیل خود را تایید کنید" };
    } catch (error) {
      try {
        await Parse.User.logIn(email, password);
        return { code: 200, message: "با موفقیت وارد شدید" };
      } catch (error) {
        if (error.code === 101 || error.code === 202) {
          return { code: 101, message: "نام کاربری یا گذرواژه نامعتبر است" };
        } else if (error.code === 205) {
          return { code: 205, message: "لطفا ایمیل خود را تایید کنید" };
        } else {
          return { message: error.message };
        }
      }
    }
  }
}

async function checkLoggedInUser() {
  return await Parse.User.currentAsync();
}
async function logOut() {
  try {
    await Parse.User.logOut();
    return { code: 200, message: "با موفقیت خارج شدید" };
  } catch (error) {
    return { code: 205, message: "خطایی رخ داده است" };
  }

}
async function restorePassword() {
  try {
    await Parse.User.requestPasswordReset("mohamadfg822@gmail.com");
    alert(`Success! Please check  to proceed with password reset.`);
    return true;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(`Error! ${error}`);
    return false;
  }
}
export { handleLogin, checkLoggedInUser, logOut, restorePassword };
// export const saveNewPerson = async function () {
//   // Call the "hello" function from the back-end
//   Parse.Cloud.run("setUsersAcls", { test: "test" })
//     .then(function (response) {
//       console.log(response); // Prints "Hello world!" to the console
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
/*
function setUsersAclsNow() {
if (Parse.User.current()) {
    const cloudParams = { test: "test" };
    Parse.Cloud.run("setUsersAcls", cloudParams)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}
}

*/
// Note that these values come from state variables that we've declared before
// const usernameValue = 'salam ';
// const passwordValue = '123';
// try {
//   // Since the signUp method returns a Promise, we need to call it using await
//   const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
//   alert(
//     `Success! User ${createdUser.getUsername()} was successfully created!`
//   );
//   return true;
// } catch (error) {
//   // signUp can fail if any parameter is blank or failed an uniqueness check on the server
//   alert(`Error! ${error}`);
//   return false;
// }
//};
//Reading your First Data Object from Back4App
// async function retrievePerson() {
//   const query = new Parse.Query("Person");

//   try {
//     const person = await query.get("mhPFDlCahj");
//     const name = person.get("name");
//     const age = person.get("age");

//     alert(`Name: ${name} age: ${age}`);
//   } catch (error) {
//     alert(`Failed to retrieve the object, with error code: ${error.message}`);
//   }
// }