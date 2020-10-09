import { getDecryptedSecret } from "./decret-secret";
import { google } from "googleapis";

const googleAuth = new google.auth.GoogleAuth({
  credentials: getDecryptedSecret(),
  scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
});

export default googleAuth;
