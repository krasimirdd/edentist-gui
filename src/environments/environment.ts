// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {clientId, domain} from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
  // dialogflow: {
  //   eDentistChatbot: 'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCaWuHaeN05ypYG5FuV2485p/wFtl2LhFXGvF7GwkOLEREm2DWmSan/LEnU70dXCmdeP7ZiHIHqrNRu1X1pY4TJFRoNKDMyBOGQ9ohO4n39JLm7mk42caHJQ+mhVY7GHnppUF+I9h7SzuW+k+oi8Hd8sc/Ltv0TPmhO4LG0hmrJX/i6oJiUlH8EqFEOBHptJTxFMoBEurlfMEFI5Vy5CAp3O6H/AQJHx06lK1nL2GCm3fVr2V3L+YQVb1ZJTalW0wdnWrujU2mKg6jwknD0TAGKQrNdcrKDO8BJF+07Uy/Fav90BtHxLdAb77LmN2jP06n9L0Pj5FahHxps1xAFKxiPAgMBAAECggEAE8cWrrT946x0PL3V3lsbpvpB7e7ICFsUgo/FtRdUgDqCRW/pWpKQba8cZrmiHSJVdwYYNcoL+33Zr7nl2ohzOIYI/daWI2VCDHO0/iaXQ3BekWMxfQMNBTTmd/2hJabnbccWoVNSmmsC6msZfRCYFCopw03XGjgiNWPPtp8335rG1vEcRFm8xqLa1UhwRzqZzY+IcSyLRVIdlFnAP91IY0mCKPLwe9zMRyJojZ6n50LYionihl0EGVtgEh5/KRA7vy3Kxm4B6KP1j4vk92vntHUUIAACWqFgtwvIZ+lVIcgyxtm1n/2+M5cwqLA5JdjBlyX/OxnDf/oQGnRG/4viQQKBgQDL0lek/wj7eLtwwP44PnJJg0awzZveQTsqGw9NBjD7mizw5X6QbG2XqRrQehY0kSNdH1DnLZ0X+5DcHwUwvEprtszNcmroaSCWi7i1pRU+YetEcbNdD733Px43589m1DUn/EwSuif3kz2F/20Rp7FEmi3MUfQ8FTMeekDL/1pCqwKBgQDB3rGP/ju6fbW2gr4PoGzXB+A++zyOUSwKDlBaMoyqM732NRNuuQuV29SMu6EpDyQ0OPK5mUDeiJwYr9BwkZwNw+/p1cB/I6WgZFGBU2oq9glKWHnqtfVui0LPTzwCfGN43lm0wdq7oiPHSSGYk8sFN4ZvU2QnvqSveSkKl7whrQKBgDfiT1eU+bCBdNtAfzOKo6lWTh6R8Wep+P/ddX+H8Aw8RJA0TFRq9k179zcsEkSNeuXAfV01W3pE5n4EH1cyeTE5aMP32CorEN1WJ+nd/oohLPGSPzyH4W0WKEHp1Cr8iiqReYY09lpiS58e3pfVo7wMjfwUiGOk6GQ13uhP9j6LAoGAbMKf3mYD4AVyEaebNG0NYjy64tpTCIwlJqcNEOzW2Q0Z/qub8TvCchnXTfRc3wnth5aDJPgC2lTNLVREnUIyx84qI4aU7T50RlzBFMpU/zDz2U91ZeUagR+DJYYP5l0d+MrUjIFMUoMNi1lNjakr9gtGUeH4iAt9nCteiODC3CkCgYBvGWVDe9uMM53bUemG+OGP5PkvolAU/mRcVr1Ew8Yqy6edTxMXdXSS9dwLtPEj9e15g23cXvTlVlMbceDDEscx9Tqr/3xGi6z3NJS6jr7NGcgScfBvZKxkcPyCgjKe1eAJXZMJ+0ds0QLbcVP8QBGB3GxmG9ljdwjyzO1xGgQXJg=='
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
