 document.addEventListener(DOMContentLoaded, ()=>{
    const loginForm =document.querySelector("#login")
    const createAccountForm =document.querySelector("#createAccount");

    document.querySelector("linkCreateAccount").addEventListener("click", () =>{
        loginForm.classicList.add("form--hidden");
       createAccountForm.classicList.remove("form--hidden");
    })

    document.querySelector("linkLogin").addEventListener("click", () =>{
        loginForm.classicList.remove("form--hidden");
       createAccountForm.classicList.add("form--hidden");
    })
 })
