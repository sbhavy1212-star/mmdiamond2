const API =
    "http://localhost:5000/api/diamonds";

const params =
    new URLSearchParams(
        window.location.search
    );

const id =
    params.get("id");

const token =
    localStorage.getItem("token");

loadDiamond();

async function loadDiamond() {

    const response =
        await fetch(`${API}/${id}`);

    const data =
        await response.json();

    document.getElementById("stockId").value =
        data.stockId;

    document.getElementById("shape").value =
        data.shape;

    document.getElementById("carat").value =
        data.carat;

    document.getElementById("color").value =
        data.color;

    document.getElementById("purity").value =
        data.purity;

    document.getElementById("cut").value =
        data.cut;

    document.getElementById("lab").value =
        data.lab;

    document.getElementById("totalPrice").value =
        data.totalPrice;
}

document
.getElementById("editForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const updatedDiamond = {
        stockId: document.getElementById("stockId").value,
        shape: document.getElementById("shape").value,
        carat: document.getElementById("carat").value,
        color: document.getElementById("color").value,
        purity: document.getElementById("purity").value,
        cut: document.getElementById("cut").value,
        lab: document.getElementById("lab").value,
        totalPrice: document.getElementById("totalPrice").value
    };

    const response =
        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(updatedDiamond)
        });

    const result =
        await response.json();

    alert(result.message);

    window.location = "index.html";
});