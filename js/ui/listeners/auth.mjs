
import { onAuth } from "../events/onAuth.mjs";

//Auth Listener
export function setAuthListener() {
    document.forms.auth.addEventListener("submit", onAuth);
}
