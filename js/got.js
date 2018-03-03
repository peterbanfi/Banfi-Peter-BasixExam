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
    console.log('heee');
    document.getElementById('search').addEventListener("change", function () {
        search(characters);
    });
    /*     document.getElementById('search').addEventListener("click", function () {
            empty();
        }); */
    /*  document.querySelector('.portraits').addEventListener("click", function () {
         char(adat, characters);
     });; */
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
    //createTable(characters);
    char(characters);
}

function char(characters) {
    for (var i = 0; i < characters.length; i++) {
        if (characters[i]["Halotte"] != 'true') {
            (function createContent(i) {
                var picture = document.createElement('img');
                picture.src = characters[i]["Portrékép"];
                var names = document.createElement('p');
                names.textContent = characters[i]["Név"];

                picture.addEventListener('click', function () {

                    var input = characters[i]["Kép"];
                    var parts = input.split('_');

                    if (parts.length > 1) {
                        var house = parts[1];
                        var result = house.split(".");
                        var houseName = result[0];
                    }
                    /* if (parts.length < 2) {
                                            document.getElementById('house').style.display = "none";
                                            console.log('hé');
                                        } */
                    document.querySelector('#result').innerHTML = '';
                    var table = '';
                    table += `
                        <img src="${characters[i]["Kép"]}">
                        <h4>${characters[i]["Név"]}</h4> 
                        <img id="house" src="assets/houses/${houseName}.png">
                        <p>${characters[i]["Történet"]}</p>
                         `;
                    table += '</div>';
                    document.getElementById('rightInfo').innerHTML = table;


                });
                document.getElementById('firstRow').appendChild(picture);
                document.getElementById('firstRow').appendChild(names);
            })(i);
        }
    }
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
                    <img src="..assets/houses/${characters[i]["Ház"]}.png">
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

function empty() {
    document.querySelector('#search').innerHTML = '';
}

/* function createTable(characters) {
    var table = '';

    for (var i = 0; i < characters.length; i++) {
        if (characters[i]["Halotte"] != 'true') {
            table += `<div class="portraits"  onclick="char(${i})">
            <img src="${characters[i]["Portrékép"]}">
            <p ">${characters[i]["Név"]}</p></div>  `;
        }
    }
    table += '</div> ';
    document.getElementById('firstRow').innerHTML = table;
} */