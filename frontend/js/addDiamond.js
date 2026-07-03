const API =
    "http://localhost:5000/api/diamonds";

document
.getElementById("diamondForm")
.addEventListener(
"submit",
async (e) => {

    e.preventDefault();
      console.log("Add Diamond button clicked");

    const token =
        localStorage.getItem("token");

    console.log("Token:", token);

    const diamond = {
        stockId:
            document.getElementById(
                "stockId"
            ).value,

        shape:
            document.getElementById(
                "shape"
            ).value,

        carat:
            document.getElementById(
                "carat"
            ).value,

        color:
            document.getElementById(
                "color"
            ).value,

        purity:
            document.getElementById(
                "purity"
            ).value,

        cut:
            document.getElementById(
                "cut"
            ).value,

        lab:
            document.getElementById(
                "lab"
            ).value,

        totalPrice:
            document.getElementById(
                "totalPrice"
            ).value
    };

    console.log(diamond);

    const response =
        await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
                "Authorization":
                    `Bearer ${token}`
            },
            body:
                JSON.stringify(
                    diamond
                )
        });

    const data =
        await response.json();
        console.log(data);
    alert(data.message);
});