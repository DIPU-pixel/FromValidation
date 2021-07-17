let form = document.getElementById('form');
let username =document.getElementById('username');
let password =document.getElementById('password');
let btn = document.getElementById('btn');
form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInput();
});
//function hoisting is working
function checkInput() {
    let usernameValue =username.value;
    let passwordValue = password.value;
    if (usernameValue === "" || usernameValue === null){
        //show error 
        //add error class
         setErrors(username, 'username is Required');
    }else{
        setSuccess(username);

    }
    if (passwordValue ==="" || passwordValue===null){
        setErrors(password ,'password is required')
    }else{
        setSuccess(password);

    }
    if (passwordValue.length < 6) {
        setErrors(password,"password should be minimum 6 charcters");
    }else {
        setSuccess(password);
    }
}
function setErrors(input, message){
    let formControl = input.parentElement;
    let small =formControl.querySelector("p");
    small.innerHTML = message;
    formControl.className = "form-control error";
}
function setSuccess(input){
    let formControl = input.parentElement;
    formControl.className ="form-control success";
};