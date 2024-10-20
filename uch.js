let main = document.querySelector('.main')
const API_KEY = "https://razer-api.onrender.com/devices"


async function readAPI() {
    const response = await fetch(API_KEY)
    const data = await response.json()
    console.log(data);
    htmlga3(data);
}
readAPI();



function htmlga3(newData) {
    let html = ''
    newData.slice(40,60).map((el) => {
        html += `
        <div class="card">
        <img src=${el.image}>
        <h2>${el.name}</h2>
        <p>${el.price}$</p>
        </div>
        `;
        main.innerHTML = html;

    });

}