import {API_BASE_URL,ACCESS_TOKEN} from '../constant/index';


function request(options){
    const url = options.url
    let headers = {
        "Content-type": "application/json"
    }

    if(localStorage.getItem(ACCESS_TOKEN)){
        headers.Authorization = 'Bearer '+ localStorage.getItem(ACCESS_TOKEN)
    }

    options.headers = headers

    return fetch(url, options)
    .then(response => {
        if(!response.ok){
            return Promise.reject(response.json())
        }
        else if(response.status === 204){
            return "success with no content"
        }
        return response.json()
    })
    .then(json => {
        return json;
    })
}

export function createUser(formRequest){
    return request({
        url : API_BASE_URL + '/accounts/register/',
        method : 'POST',
        body:JSON.stringify(formRequest)
    })
}

export function loginRequest(formRequest){
    return request({
        url : API_BASE_URL + '/accounts/api/token/',
        method:'POST',
        body: JSON.stringify(formRequest)
    })
}

export function logoutRequest(formRequest){
    return request({
        url : API_BASE_URL + '/accounts/logout/',
        method:'POST',
        body: JSON.stringify(formRequest)
    })
}

export function currentUser(){
    return request({
        url: API_BASE_URL + '/accounts/current-user/',
        method: 'GET'
    })
}

export function verifyEmail(formRequest){
    return request({
        url : API_BASE_URL + '/accounts/email-verify/?token=' + formRequest.token,
        method:'POST',
    })
}

export function resetPasswordEmail(formRequest){
    return request({
        url: API_BASE_URL + '/accounts/reset-password-email/',
        method: 'POST',
        body: JSON.stringify(formRequest)
    })
}

export function resetPasswordConfirm(formRequest){
    return request({
        url: API_BASE_URL +"/accounts/reset-password-confirm/",
        method: 'PATCH',
        body:JSON.stringify(formRequest)
    })
}

