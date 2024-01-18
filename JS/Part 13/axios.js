let btn = document.querySelector("button");
let p = document.querySelector("#result");

btn.addEventListener("click", async() => {
    let fact = await getFacts();
    p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch {
        console.log("error - ", e);
        return "No fact found"
    }  
}