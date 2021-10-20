import * as global from "./global-variables-for-index"
import validator from "validator";
import * as request from "./serverRequests";

export function createInputFieldsForSignUp(e) {
    if(global.signInSection.children.length) {
        return;
    }
    const enterUserName = createElement('input', [], ['signIn-input'], {placeholder: 'enter user name'});
    const enterPassWord = createElement('input', [], ['signIn-input'], {placeholder: 'enter password'});
    global.createAccountButton.innerText = 'sign in';
    global.signInSection.appendChild(enterUserName);
    global.signInSection.appendChild(enterPassWord);
}

export async function sendSignUpData (e) {
    const userName = document.querySelector('[placeholder="enter user name"]').value;
    const password = document.querySelector('[placeholder="enter password"]').value;
    if(!userName) {
        return;
    }
    if (userName.length < 4) {
        alert ('your user name should be at least 4 digits long');
        return;
    } 
    if (!validator.isStrongPassword(password)) {
        alert('your password is weak - change it');
        return;
    }
    const userObj = {userName, password}
    request.sendSignUpData(userObj);
} 



















function createElement(tagName, children = [], classes = [], attributes = {}) {
    let newEl = document.createElement(tagName);
    for(let child of children){
        if(typeof(child) === "string"){
            child = document.createTextNode(child);
        }
         newEl.append(child);
    }
    for(let cls of classes){
        newEl.classList.add(cls);
    }
    for(let attr in attributes){
        newEl.setAttribute(attr, attributes[attr]);
    }
  
    return newEl
  }