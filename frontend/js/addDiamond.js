document
.getElementById("diamondForm")
.addEventListener(
"submit",
async (e) => {

    e.preventDefault();

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

    alert(data.message);
});