import {API_BASE_URL} from "../api-config";

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
        credentials: 'include', //쿠키 전달을 위해
    };
    if (request) {
        // GET method
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 403) {
            return response;
        } else {
            new Error(response);
        }
    }).catch((error) => {
        console.log("http error");
        console.log(error);
    });
}

/*
 * 로그인
 */
export function signIn(userDTO) {
    return call("/auth/login", "POST", userDTO)
        .then((response) => {
            return response;
        });
}

/*
 * 회원가입
 */
export function signUp(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}

/*
 * 로그아웃
 */
export function signOut() {

}