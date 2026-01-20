const html = document.getElementById('textContent');

async function load(){
    //誰も入力せんといてね
    const csvFile = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTF8mFxOzq5hJSPyxjI7N1PbaYy0wZzy_r7XIIsJbm5lFWJ0EauGdmh50vwlS1ivOah6X5q3awclPDn/pub?output=csv');
    const csvtext = await csvFile.text();
    const rows = csvtext.split('\n');
    const csvContent = rows.map((rows) => {
        const column = rows.split(',');
        return{
            タイムスタンプ: column[0],
            日付: column[1],
            内容: column[2]
        }
    })
    csvContent.shift();
    for(const Intext of csvContent){
        html.innerHTML += `
            <div class="texts">
                <p>${Intext.内容}</p>
                <p class="date">${Intext.日付}</p>
            </div>`
    }
}

load();