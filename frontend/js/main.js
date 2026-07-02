const API_URL =
"http://localhost:5000/api/diamonds/available";

async function loadDiamonds(){

    try{

        const response =
            await fetch(API_URL);

        const diamonds =
            await response.json();

        const container =
            document.getElementById(
                "diamondContainer"
            );

        if(diamonds.length===0){
            container.innerHTML =
            "<p>No diamonds available.</p>";
            return;
        }

        container.innerHTML = "";

        diamonds.forEach((diamond)=>{

            container.innerHTML += `
            <div class="diamond-card">

                <h3>
                    ${diamond.stockId}
                </h3>

                <p>
                    <strong>Shape:</strong>
                    ${diamond.shape}
                </p>

                <p>
                    <strong>Carat:</strong>
                    ${diamond.carat}
                </p>

                <p>
                    <strong>Color:</strong>
                    ${diamond.color}
                </p>

                <p>
                    <strong>Purity:</strong>
                    ${diamond.purity}
                </p>

                <p>
                    <strong>Cut:</strong>
                    ${diamond.cut}
                </p>

                <p>
                    <strong>Lab:</strong>
                    ${diamond.lab}
                </p>

                <p>
                    <strong>Total Price:</strong>
                    ₹${diamond.totalPrice}
                </p>

            </div>
            `;
        });

    }catch(error){

        console.log(error);

        document.getElementById(
            "diamondContainer"
        ).innerHTML =
        "<p>Failed to load diamonds.</p>";
    }
}

loadDiamonds();