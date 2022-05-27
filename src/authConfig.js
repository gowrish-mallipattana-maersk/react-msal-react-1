export const msalConfig = {
  auth: {
    // sre-pe-platform clientId
    //clientId: "564c69ff-2965-41fb-b2e3-05779f34d581",
    // gowrish-poc clientId
    clientId: "8bed203a-2840-4360-856a-159369ac7306",
    authority: "https://login.microsoftonline.com/05d75c05-fa1a-42e7-9cf1-eb416c396f2d", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000/",
    //redirectUri: "window.location.origin",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    //cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
 scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com"
};
