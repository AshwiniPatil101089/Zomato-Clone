

// alert("hello");
document.getElementById("see_more_or_less").onclick = function () {
    console.log("innertext="+document.getElementById("see_more_or_less").innerText);
    const cardArray = document.getElementsByClassName("hidden_cards");

    if (document.getElementById("see_more_or_less").innerText==="see less >"){
        console.log("seeless clicked");
        Array.from(cardArray).forEach(element => {
            element.removeAttribute("style");
        });
        document.getElementById("see_more_or_less").innerText = "see more >";

    }else if (document.getElementById("see_more_or_less").innerText==="see more >") {
        console.log("seemore clicked");
        Array.from(cardArray).forEach(element => {
            const attr = document.createAttribute("style");
            attr.value = "display:flex";

            element.setAttributeNode(attr);
        });
        document.getElementById("see_more_or_less").innerText = "see less >";
    }
    
    // alert("more clicked");
}