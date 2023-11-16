const div = document.getElementById('pasteHere');

const getData = async (url) => {
    try {
        const data = await fetch("https://dog.ceo/api/breeds/image/random")
        const payLoad = await data.json();
        console.log(payLoad);

        let y = `<img src = "${payLoad.message}" width="600" height="400" />`;

        div.innerHTML = y
        // console.log(y)
    } catch (error) {
        console.log(error)
    }
}
getData()