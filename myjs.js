

// alert("hello");
document.getElementById("see_more_or_less").onclick = function () {
    console.log("innertext=" + document.getElementById("see_more_or_less").innerText);
    const cardArray = document.getElementsByClassName("hidden_cards");

    if (document.getElementById("see_more_or_less").innerText === "see less >") {
        console.log("seeless clicked");
        Array.from(cardArray).forEach(element => {
            element.removeAttribute("style");
        });
        document.getElementById("see_more_or_less").innerText = "see more >";

    } else if (document.getElementById("see_more_or_less").innerText === "see more >") {
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

const exploreArray = document.getElementsByClassName("explore_options_card_title");
console.log(exploreArray)
Array.from(exploreArray).forEach((item) => {
    // console.log(element);

    item.addEventListener("click", () => {
        const element = item.nextElementSibling;
        console.log(element);
        if (element.hasAttribute("style")) {
            element.removeAttribute("style");
            const arrow = item.lastElementChild;
            console.log("arrow=" + arrow);
            arrow.removeAttribute("style");
        } else {

            const attr = document.createAttribute("style");
            attr.value = "display:grid;";
            element.setAttributeNode(attr);
            console.log(element);
            const arrow = item.lastElementChild;
            console.log(arrow);
            const attr2 = document.createAttribute("style");
            attr2.value = "transform: rotate(180deg);";
            arrow.setAttributeNode(attr2);
            console.log(arrow);
        }
    });

});


function showEmailInput() {
     const number = document.querySelector(".get_app_input_number");
    
    const email = document.querySelector(".get_app_input .email");
    

    const show = document.createAttribute("style");
    show.value = "display:flex;";
    email.setAttributeNode(show);

    const hide = document.createAttribute("style");
    hide.value = "display:none;";
    number.setAttributeNode(hide);

}

function showNumberInput() {
    const number = document.querySelector(".get_app_input_number");
   const email = document.querySelector(".get_app_input .email");
    
    const show = document.createAttribute("style");
    show.value = "display:flex;";
    number.setAttributeNode(show);

    const hide = document.createAttribute("style");
    hide.value = "display:none;";
    email.setAttributeNode(hide);

}

