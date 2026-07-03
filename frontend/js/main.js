const API =
"http://localhost:5000/api/diamonds/available";

async function loadDiamonds() {
    const response =
        await fetch(API);

    const diamonds =
        await response.json();

    const container =
        document.getElementById(
            "diamondContainer"
        );

    container.innerHTML = "";

    diamonds.forEach((diamond) => {
        container.innerHTML += `
            <div>
                <h3>${diamond.stockId}</h3>
                <p>${diamond.shape}</p>
                <p>${diamond.carat} ct</p>
                <p>₹${diamond.totalPrice}</p>
            </div>
        `;
    });
}

loadDiamonds();