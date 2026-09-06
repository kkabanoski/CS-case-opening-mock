const responseEL = document.getElementById("response-el")
const footer = document.querySelector("footer")
const keyEl = document.getElementById("key-el")
const rollBtn = document.getElementById("roll-btn")
const unlockingEl = document.getElementById("unlocking-div")


const items = [
    {
        id: 0,
        img: "./src/ak47EliteBuild.webp",
        weapon: "AK-47",
        skin: "Elite Build",
        rarity: "Mil-Spec"
    },
    {
        id: 1,
        img: "./src/mp7ArmorCore.webp",
        weapon: "MP7",
        skin: "Armor Core",
        rarity: "Mil-Spec"
        
    }, {
        id: 2,
        img: "./src/DesertEagleBronzeDeco.webp",
        weapon: "Desert Eagle",
        skin: "Bronze Deco",
        rarity: "Mil-Spec"
    }, {
        id: 3,
        img: "./src/p250Valence.webp",
        weapon: "P250",
        skin: "Valence",
        rarity: "Mil-Spec"
    }, {
        id: 4,
        img: "./src/NegevManOWar.png",
        weapon: "Negev",
        skin: "Man-O'-War",
        rarity: "Mil-Spec"
    }, {
        id: 5,
        img: "./src/SawedOffOrigami.webp",
        weapon: "Sawed Off",
        skin: "Origami",
        rarity: "Mil-Spec"
    }, {
        id: 6,
        img: "./src/AWPWormGod.webp",
        weapon: "AWP",
        skin: "Worm God",
        rarity: "Restricted"
    }, {
        id: 7,
        img: "./src/Mag7Heat.png",
        weapon: "MAG-7",
        skin: "Heat",
        rarity: "Restricted"
    }, {
        id: 8,
        img: "./src/cz75PolePosition.png",
        weapon: "CZ75-Auto",
        skin: "Pole Position",
        rarity: "Restricted"
    }, {
        id: 9,
        img: "./src/UMP-45GrandPrix.png",
        weapon: "UMP-45",
        skin: "Grand Prix",
        rarity: "Restricted"
    }, {
        id: 10,
        img: "./src/FIveSevenMonkeyBusiness.webp",
        weapon: "Five-SeveN",
        skin: "Monkey Business",
        rarity: "Classified"
    }, {
        id: 11,
        img: "./src/GalilArEco.png",
        weapon: "Galil AR",
        skin: "Eco",
        rarity: "Classified"
    }, {
        id: 12,
        img: "./src/FamasDjinn.png",
        weapon: "Famas",
        skin: "Djinn",
        rarity: "Classified"
    }, {
        id: 13,
        img: "./src/M4A1-SHyperBeast.png",
        weapon: "M4A1-S",
        skin: "Hyper Beast",
        rarity: "Covert"
    }, {
        id: 14,
        img: "./src/Mac-10NeonRider.png",
        weapon: "MAC-10",
        skin: "Neon Rider",
        rarity: "Covert"
    }, {
        id: 15,
        img: "./src/Knife.png",
        weapon: "",
        skin: "★Rare Special Item★",
        rarity: "Gold"
    }
]

function getRandomInt() {
    return Math.random()
}


rollBtn.addEventListener("click", function () {


        randomNumber = getRandomInt()
        responseEL.innerHTML = randomNumber
        keyEl.style.display = "none"
        rollBtn.style.display = "none"
        unlockingEl.style.display = "flex"
    randomRarity()
        

})


function renderItems() {
    for (let i = 0; i < items.length; i++) {

        footer.innerHTML += `<div class="item">
                <div class="showcase">
                    <img src="${items[i].img}">
                </div>
                <h3>${items[i].weapon}</h3>
                <p>${items[i].skin}</p>
            </div>`
    }
    footer.innerHTML += `<div id="ignorethisdivpls"></div>`
}
renderItems()


function randomRarity() {
        if (randomNumber <= 0.0026){
            console.log("Gold" + randomNumber)

        }else if (randomNumber <= 0.0064){
            console.log("Covert" + randomNumber)
        }else if (randomNumber <= 0.0320){
            console.log("Classified")
        }else if (randomNumber <= 0.1598){
            console.log("Restricted" + randomNumber)
        }else {
            console.log("Mil-spec" + randomNumber)
        }
}

function randomSkin(rarity) {
    return items.filter(rarity)
} //  zobaczyć jak działa .filter

