const API =
    "http://localhost:5000/api/diamonds/available";

let editId = null;

async function loadDiamonds() {
    try {
        const response = await fetch(API);
        const diamonds = await response.json();

        const container =
            document.getElementById(
                "diamondContainer"
            );

        container.innerHTML = "";

        if (diamonds.length === 0) {
            container.innerHTML =
                "<h2>No Diamonds Found</h2>";
            return;
        }

        diamonds.forEach((diamond) => {
            container.innerHTML += `
                <div class="diamond-card">
                    <h3>${diamond.stockId}</h3>

                    <p>Shape: ${diamond.shape}</p>
                    <p>Carat: ${diamond.carat} ct</p>
                    <p>Color: ${diamond.color}</p>
                    <p>Purity: ${diamond.purity}</p>
                    <p>Price: ₹${diamond.totalPrice}</p>

                    <button onclick="editDiamond('${diamond._id}')">
                        Edit
                    </button>

                    <button onclick="deleteDiamond('${diamond._id}')">
                        Delete
                    </button>
                </div>
            `;
        });

    } catch (error) {
        console.log(error);
    }
}

function editDiamond(id) {
    editId = id;

    fetch(`http://localhost:5000/api/diamonds/${id}`)
        .then(res => res.json())
        .then(data => {

            document.getElementById("edit_stockId").value =
                data.stockId;

            document.getElementById("edit_shape").value =
                data.shape;

            document.getElementById("edit_carat").value =
                data.carat;

            document.getElementById("edit_color").value =
                data.color;

            document.getElementById("edit_purity").value =
                data.purity;

            document.getElementById("edit_cut").value =
                data.cut;

            document.getElementById("edit_lab").value =
                data.lab;

            document.getElementById("edit_totalPrice").value =
                data.totalPrice;

            document.getElementById(
                "editModal"
            ).style.display = "block";
        });
}

function closeModal() {
    document.getElementById(
        "editModal"
    ).style.display = "none";
}

async function deleteDiamond(id) {

    if (!confirm("Delete this diamond?"))
        return;

    const token =
        localStorage.getItem("token");

    try {
        const response =
            await fetch(
                `http://localhost:5000/api/diamonds/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

        const data =
            await response.json();

        alert(data.message);

        loadDiamonds();

    } catch (error) {
        console.log(error);
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "login.html";
}

function goToAdmin() {
    window.location = "admin.html";
}

function goToAddDiamond() {
    window.location = "addDiamond.html";
}

const editForm =
    document.getElementById("editForm");

if (editForm) {
    editForm.addEventListener(
        "submit",
        async (e) => {
            e.preventDefault();

            const token =
                localStorage.getItem(
                    "token"
                );

            const updatedDiamond = {
                stockId:
                    document.getElementById(
                        "edit_stockId"
                    ).value,
                shape:
                    document.getElementById(
                        "edit_shape"
                    ).value,
                carat:
                    document.getElementById(
                        "edit_carat"
                    ).value,
                color:
                    document.getElementById(
                        "edit_color"
                    ).value,
                purity:
                    document.getElementById(
                        "edit_purity"
                    ).value,
                cut:
                    document.getElementById(
                        "edit_cut"
                    ).value,
                lab:
                    document.getElementById(
                        "edit_lab"
                    ).value,
                totalPrice:
                    document.getElementById(
                        "edit_totalPrice"
                    ).value
            };

            const response =
                await fetch(
                    `http://localhost:5000/api/diamonds/${editId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type":
                                "application/json",
                            Authorization:
                                `Bearer ${token}`
                        },
                        body:
                            JSON.stringify(
                                updatedDiamond
                            )
                    }
                );

            const data =
                await response.json();

            alert(data.message);

            closeModal();
            loadDiamonds();
        }
    );
}

loadDiamonds();