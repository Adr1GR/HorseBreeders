import jwt_decode from "jwt-decode";

/**
 * Verify userJWT from localstorage
 *
 * @returns {boolean} true if userJWT exist and is valid, or false if not
 */
export function verifyUser() {
  const userJWT = localStorage.getItem("userJWT");

  if (userJWT) {
    const decodedToken = jwt_decode(userJWT);
    const expirationTime = decodedToken.exp;

    if (Date.now() / 1000 < expirationTime) {
      // Token is still valid
      return true;
    } else {
      // Token has expired
      return false;
    }
  } else {
    // Token does not exist
    return false;
  }
}
