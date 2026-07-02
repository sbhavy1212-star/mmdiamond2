const user =
    JSON.parse(
        localStorage.getItem("user")
    );

if (!user) {
    window.location =
        "login.html";
}

if (user.role !== "admin") {
    alert("Access Denied");
    window.location =
        "index.html";
}

document.getElementById(
    "welcomeText"
).innerText =
    `Welcome ${user.name}`;

function goToInventory() {
    window.location =
        "index.html";
}

function goToAddDiamond() {
    alert(
        "Add Diamond Page Coming Soon"
    );

    // window.location =
    //     "addDiamond.html";
}

function logout() {

    localStorage.removeItem(
        "token"
    );

    localStorage.removeItem(
        "user"
    );

    window.location =
        "login.html";
}