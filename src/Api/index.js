export async function Api(input, options) {
  let root = "https://core.gapfilm.ir/api/v3.3/GetFirstPageByPlatform?";
  // const ip = "https://api.linkirani.ir/apiv1/client/current";
  let parameter = { PageIndex: 0, PageSize: 8, ContentRows: 21, PlatformId: 1, PageType: 1, PlatformType: 1, ParentType: 2 };
  // try {
  //   const response = await fetch(ip);
  //   const { ipCountryCode = '' } = await response.json();
  //   if (ipCountryCode === 'ir') {
  switch (input) {
    case "Home":
      parameter.PlatformId = 1;
      break;
    case "Movies":
      parameter.ParentEntityId = 6;
      break;
    case "Crime":
      parameter.PlatformId = 7;
      break;
    case "Actions":
      parameter.PlatformId = 10;
      break;
    case "Adventure":
      parameter.PlatformId = 17;
      break;
    case "History":
      parameter.PlatformId = 15;
      break;
    case "Horror":
      parameter.PlatformId = 16;
      break;
    case "Mystery":
      parameter.PlatformId = 7;
      break;
    case "Kids":
      parameter.PlatformId = 9;
      break;
    case "Search":
      root = "https://core.gapfilm.ir/api/v3.2/AdvanceSearchContent?Title=" + options + "&OrderBy=updatedate& Order=desc&PageSize=10&PageIndex=0&AgeRangeId=5";
      parameter = {};
      break;
    case "Related":
      root = "https://core.gapfilm.ir/api/v4.0/Contents/" + options + "/RelatedContents?OrderBy=ContentId&PageSize=12&PageIndex=0&Zones=3,4&AgeRangeId=5";
      parameter = {};
      break;
    default:
      root = "https://core.gapfilm.ir/api/v3.1/GetContent?Id=" + input + "&";
      break;
  }
  try {
    const params = new URLSearchParams(parameter).toString();
    const response = await fetch(root + params, {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "sourceenvironment": "Website"
      }
    });
    return { ...await response.json(), Status: await response.status };
  } catch (error) {
    return { Status: 402, message: "خطایی رخ داده است . لطفا اتصال خود را برسی کنید" };
  }
  // }
  //  return { Status: 400, message: "your ip country is banned !" }

  // } catch (error) {
  //  return { Status: 402, message: "Internet Connection had Problem" }
  // }
}