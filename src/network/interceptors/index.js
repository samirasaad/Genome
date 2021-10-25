import { Unuthorized } from "./erorrCases";
// import { CryptoJSAesDecrypt } from "./../../utils/Shared";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
  ? false
  : true;
};

export const isSeparatedToken = (config = {}) => {
  return config.hasOwnProperty("isSeparatedToken") && !config.isSeparatedToken
    ? false
    : true;
};

export const withOutLoader = (config = {}) => {
  return config.hasOwnProperty("withOutLoader") && !config.withOutLoader
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    if (withOutLoader(request) === false) {
      // store.dispatch(loader(true));
      document.getElementById("root").classList.add("loading-indicator");
    }else{
      document.getElementById("root").classList.remove("loading-indicator");
    }
    let token =
      localStorage.getItem("userRole") === "contributor"
        ? localStorage.getItem("contributorToken")
        : localStorage.getItem("smeToken");
    request.headers["Authorization"] = `Bearer ${token}`;
  }
//    else if (isSeparatedToken(request)) {
//     let ciphertext = `"${
//       store.getState().sme.rateDetails.sme_access_token.ciphertext
//     }"`;
//     let iv = `"${store.getState().sme.rateDetails.sme_access_token.iv}"`;
//     let salt = `"${store.getState().sme.rateDetails.sme_access_token.salt}"`;
//     request.headers["Authorization"] = `Bearer ${CryptoJSAesDecrypt(
//       "monshaat-rating",
//       `{
// "ciphertext": ${ciphertext},
// "iv": ${iv},
// "salt": ${salt}
// }`
//     )}`;
//   }
//   return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    // store.dispatch(loader(false));
    document.getElementById("root").classList.remove("loading-indicator");
  }
  return response;
};

export const errorHandler = (error) => {
  console.log(error)
  if (isHandlerEnabled(error.config)) {
    // store.dispatch(loader(false));
    document.getElementById("root").classList.remove("loading-indicator");
    if (error.response && error.response.status === 401) {
      Unuthorized();
    }
  }
  return Promise.reject({ ...error });
};
