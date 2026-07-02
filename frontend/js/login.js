const API =
"http://localhost:5000/api/auth/login";

document
.getElementById("loginForm")
.addEventListener(
"submit",
async (e)=>{

    e.preventDefault();

    const email =
        document.getElementById(
            "email"
        ).value;

    const password =
        document.getElementById(
            "password"
        ).value;

    const response =
        await fetch(API,{
            method:"POST",
            headers:{
                "Content-Type":
                "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });

    const data =
        await response.json();

    if(response.ok){

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );

        alert(
            "Login Successful"
        );

        if (data.user.role === "admin") {
        window.location = "admin.html";
    } else {
        window.location = "index.html";
    }

    }else{

        alert(data.message);
    }
});