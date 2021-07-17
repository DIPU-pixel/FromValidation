// first step:::::::::
let form = document.getElementById('form');
let username = document.getElementById('username');
let password = document.getElementById('password');



//prevent default:
// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. 
// For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.
//form event type:
form.addEventListener("submit" , e=>{
    e.preventDefault();
    // console.log(e);
    let userErrorMess =[];
    if(username.value === "" || username.value === null){
       userErrorMess.push(`<p> username is Required </p>`);
    }
    if (username.value.length <6){
        userErrorMess.push(`<p>username is minimum 6 chacter....../p>`);
    }
    if ( userErrorMess.length > 0){
        document.getElementById("user_error").innerHTML =userErrorMess.join("");
        
    }

    // end username
   
   if(password.value === "" || password.value === null) {
        document.getElementById("password_error").innerHTML = `password is Required`;
 }
 if(username.value.length >= 6 && password.value.length >=6){
    window.location.assign("./sucees.html");
 }
});
//enable sumbit button
form.addEventListener("input" , e=>{
    if (username.value.length > 0 && password.value.length > 0){
        btn.removeAttribute("disabled");
        btn.style.cursor = "pointer";
        btn.style.opacity =1;
    }
})



