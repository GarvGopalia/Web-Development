let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res)
//     return res.json(); 
//     })
//     .then((data) => {
//     console.log(data.fact)
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// });

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res.json();
        console.log(data2.fact);
    } catch {
        console.log("error - ", e);
    }  
}