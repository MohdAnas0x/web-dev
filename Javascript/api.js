let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector('.result');
    p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e);
        return "No fact found";
    }
}

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//         return fetch(url);
//     })
//      .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log(data2.fact); 
//     })
//     .catch((err) => {
//         console.log("Error - ", err);
//     });