const text = document.querySelector("#searchKeyword");
const btn = document.querySelector('.btn')
const ul = document.querySelector(".siteList");
const openUrl =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
// 拿到資料

async function txtInfo() {
    const allData = await fetch(openUrl);
    const rawData = await allData.json();

    const roadData = rawData.filter((data) => {
        if (data.ar.includes(text.value)) {
            return data
        }            
    });
    if (text.value !== '') {
        roadData.forEach((data) => {
            const res = `
            <li class="list-group-item fs-5">
            <i class="fas fa-bicycle"></i>${data.sna.replace("YouBike2.0_", "")}(${
            data.sbi})
            <br>
            <small class="text-muted">(${data.ar})</small>
            </li>
            `;
            ul.insertAdjacentHTML("afterbegin", res);
        });
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()

    txtInfo()
    do {
        ul.removeChild(ul.lastChild);
    } while (ul.lastChild);
})  