const url1 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: {Accept : "applicatio/json"}}
        let res = await axios.get(url1, config);
        console.log(res);
    } catch(err) {
        console.log(err);
    }
}