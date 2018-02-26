function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var characters = JSON.parse(xhttp.responseText);
    console.log(characters);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
    //createTable(characters)
    sortingDatas(characters)
    document.getElementById('search').addEventListener("change", function () {
        search(characters);
    });
    document.getElementById('search').addEventListener("change", function () {
        search(characters);
    });
    document.querySelector('.portraits').addEventListener("click", function () {
        char(adat, characters);
    });;
}

// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */

function sortingDatas(characters) {
    var temp;
    var first;
    var second;
    for (var i = 0; i < characters.length - 1; i++) {
        for (var j = i + 1; j < characters.length; j++) {
            first = characters[i]["Név"];
            second = characters[j]["Név"];
            if (first > second) {
                temp = characters[i];
                characters[i] = characters[j];
                characters[j] = temp;
            }
        }
    }
    createTable(characters);
}

function char(adat, characters) {
    for (var i in characters) {
        if (adat == i) {
            console.log(characters[i]["Név"]);
        } else {
            console.log('not working');
        }
    }
    /* 
    Itt volna a kiválasztásos rész, de mivel nem a leg effektívebb módon hoztam létre a táblákat kicsit belekavarodtam.
    Azzal próbálkoztam, hogy minden a táblában létrehozott, karakter char() függvényéhez hozzáadtam egy i-edik számot,
     és ez alapján szerettem volna elérni a karaktert, ahhoz, hogy a jobb oldalra mehessen az info táblába.
    */
    console.log('hi');
}

function search(characters) {
    var input = document.querySelector('#search').value.toLowerCase();
    for (var i in characters) {
        if (characters[i]["Név"].toLowerCase() == input) {
            document.querySelector('#result').innerHTML = '';
            var table = '';
            table += `
                    <img src="${characters[i]["Kép"]}">
                    <h4>${characters[i]["Név"]}</h4> 
                    <img src="..assets/houses/${characters[i].Ház}.png">
                    <p>${characters[i]["Történet"]}</p>
                     `;
            table += '</div>';
            document.getElementById('rightInfo').innerHTML = table;
            break;
        } else {
            document.querySelector('#result').innerHTML = 'Character not found :(';
        }
    }

}



function createTable(characters) {
    var table = '';

    for (var i = 0; i < 8; i++) {

        table += `<div class="portraits"  onclick="char(${i})">
            <img src="${characters[i]["Portrékép"]}">
            <td ">${characters[i]["Név"]}</td></div>  `;
    }
    table += '</tr> ';
    document.getElementById('firstRow').innerHTML = table;
    var table2 = '';
    for (var i = 8; i < 16; i++) {
        table2 += `<div class="portraits" onclick="char()">
            <img src="${characters[i]["Portrékép"]}">
            <td>${characters[i]["Név"]}</td> </div>  `;
    }
    table2 += '</tr>';
    document.getElementById('secondRow').innerHTML = table2;
    var table3 = '';
    for (var i = 16; i < 24; i++) {
        table3 += `<div class="portraits" onclick="char()">
            <img src="${characters[i]["Portrékép"]}">
            <td>${characters[i]["Név"]}</td> </div>`;
    }
    table3 += '</tr>';
    document.getElementById('thirdRow').innerHTML = table3;
    var table4 = '';
    for (var i = 24; i < 32; i++) {
        table4 += `<div class="portraits" onclick="char()">
            <img src="${characters[i]["Portrékép"]}">
            <td>${characters[i]["Név"]}</td> </div>`;
    }
    table4 += '</tr>';
    document.getElementById('fourthRow').innerHTML = table4;
    var table5 = '';
    for (var i = 32; i < 40; i++) {
        table5 += `<div class="portraits" onclick="char()">
            <img src="${characters[i]["Portrékép"]}">
            <td>${characters[i]["Név"]}</td> </div>`;
    }
    table5 += '</tr>';
    document.getElementById('fifthRow').innerHTML = table5;

    var table6 = '';
    for (var i = 40; i < 48; i++) {
        table6 += `<div class="portraits" onclick="char()">
            <img src="${characters[i]["Portrékép"]}">
            <td>${characters[i]["Név"]}</td> </div>`;
    }
    table6 += '</tr>';
    document.getElementById('sixthRow').innerHTML = table6;
    var table7 = '';
    for (var i = 48; i < 51; i++) {
        table7 += `<div class="portraits" onclick="char()">
            <img src="${characters[i]["Portrékép"]}">
            <td>${characters[i]["Név"]}</td> </div>`;
    }
    table7 += '</tr>';
    document.getElementById('seventhRow').innerHTML = table7;
}