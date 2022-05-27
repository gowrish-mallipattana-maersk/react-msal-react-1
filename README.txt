=======================
REFERENCES
=======================
https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
https://codesandbox.io/s/il6zk?file=/src/index.js:0-965
https://ahsanshares.wordpress.com/2019/10/14/react-azure-ad-authentication

=======================
NPM INSTALLS
=======================
npm install @azure/msal-react
npm install react-bootstrap
npm install bootstrap


=======================
TROUBLESHOOTING
=======================

-----------------------
AADSTS90102: 'redirect_uri' value must be a valid absolute URI.
-----------------------

For now, in authConfig.js redirect uri has been set to http://localhost:3000/


-----------------------
AADSTS9002326 - authentication only for single-page-applications
-----------------------

SignInButton.jsx:10
        ServerError: invalid_request: 9002326 - [2022-05-27 15:58:27Z]:
        AADSTS9002326: Cross-origin token redemption is permitted only for the
        'Single-Page Application' client-type.

Fix:
- Did not work with the sre-pe-platform app-registration - though added additional "single-page-app"
- WORKED when used another app-registration (gowrish-poc) adding a single-page-app
To the app-registration, added single-page-app -with redirect URL http://localhost:3000/
