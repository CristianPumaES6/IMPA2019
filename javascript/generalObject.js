let arrData = objData['Sheet1'];

objData = {};


let level1 = [];
let level2 = [];
let level3 = [];
let list = [];

let filtro = [null, null, null];

let test = 0;

// Funcion que genera el Objeto estructurado.
function generarObj() {
    arrData.forEach((currentValue, index, array) => {
        if (!objData[currentValue.A]) objData[currentValue.A] = [];
        if (!objData[currentValue.A][currentValue.B]) objData[currentValue.A][currentValue.B] = [];
        if (!objData[currentValue.A][currentValue.B][currentValue.C]) objData[currentValue.A][currentValue.B][currentValue.C] = [];

        let obj = {
            D: currentValue.D,
            E: currentValue.E,
            F: currentValue.F,
            G: currentValue.G,
            H: currentValue.H,
            I: currentValue.I,
        }

        objData[currentValue.A][currentValue.B][currentValue.C].push(obj);


        if (index == array.length - 1) {
            level1 = Object.keys(objData);
            console.log(objData);
        }
    });
}

// Retorna el Objeto con su datos segun el leven que buscas.
// esto se podria mejorar para por cada leven retornemos el objeto y no el array que estamos 
//creando con en Object.Key
function generarLevel(lv1, lv2, lv3) {

    if (lv1 && lv2 && lv3) {

        filtro[0] = lv1;
        filtro[1] = lv2;
        filtro[2] = lv3;

        return objData[lv1][lv2][lv3];
    } else if (lv1 && lv2) {
        level3 = Object.keys(objData[lv1][lv2]);

        filtro[0] = lv1;
        filtro[1] = lv2;
        filtro[2] = null;
        test = level1.length + level2.length + level3.length;

        return level3;
    } else if (lv1) {
        level2 = Object.keys(objData[lv1]);

        filtro[0] = lv1;
        filtro[1] = null;
        filtro[2] = null;
        test = level1.length + level2.length + level3.length;

        return level2;
    }

}



function generarHTML() {
    generarObj();

    let html = ``;
    let ol = ``;

    level1.forEach((lv1, iLv1, array) => {
        ol += `
        <li onclick="addOpen(this,'${iLv1}')"> 
            <h1><i class="icon-plus-lv1"></i>${lv1}<img src="./image/labcode/logo-texto.png" class="img-logo"></h1>
            <ol>
                ${generarOl(lv1, iLv1)}
            </ol>
        </li>`;
    });

    document.getElementById('list-lv').innerHTML = ol;
}

function generarOl(lv1, iLv1) {
    let li = ``;
    generarLevel(lv1).forEach((lv2, iLv2, array) => {
        li += `
            <li onclick="addOpen2(this,'${iLv1}','${iLv2}')" >
                <h2><i class="icon-plus-lv2"></i>${lv2}</h2>
                <ol>  
                    ${ generarA(lv1, iLv1, lv2, iLv2)}
                </ol>
            </li>`;
    });
    return li;
}

function generarA(lv1, iLv1, lv2, iLv2) {

    let a = ``;
    generarLevel(lv1, lv2).forEach((lv3, iLv3, array) => {
        a += `
            <li  onclick="addOpen3(this,'${iLv1}','${iLv2}','${iLv3}')"  id='index${iLv1}${iLv2}${iLv3}'> 
                <h3><i class="icon-plus-lv3"></i>${lv3}</h3>
            </li>`;
    });

    return a;

}