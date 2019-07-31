function generalTableLista(item, iLv1, iLv2, iLv3, iIt) {


    let lv1 = level1[iLv1];
    level2 = Object.keys(objData[lv1]);
    let lv2 = level2[iLv2];
    level3 = Object.keys(objData[lv1][lv2]);
    let lv3 = level3[iLv3];

    let html = `
        <tr onclick="setData('${iLv1}', '${iLv2}', '${iLv3}', '${iIt}')">
            <td>
                ${item.D}
            </td>
            <td>
                ${item.E}
            </td>
            <td>
                ${item.F}
            </td>
            <td>
                ${item.G}
            </td>
            <td>
                ${item.H}
            </td>
        </tr>
        `;
    return html;
}

function addOpen(element, iLv1) {


    if (!lookLv) {
        lookLv = true;
        let html = ``;


        if (!element.className) {

            let lv1 = level1[iLv1];
            document.getElementById("level1").innerText = lv1;
            element.className = "lv1-open";


            // para que la carga no sea mucha.
            /*
            generarLevel(lv1).forEach(lv2 => {
                generarLevel(lv1, lv2).forEach(lv3 => {
                    generarLevel(lv1, lv2, lv3).forEach(items => {
                        html += generalTableLista(item, iLv1, iLv2, iLv3, iIt);
                    });
                });
            });
            */
            document.getElementById("listTable").innerHTML = html;

        } else {
            element.className = "";
        }

        setTimeout(() => lookLv = false, 500);
    }
}

function addOpen2(element, iLv1, iLv2) {


    if (!lookLv) {
        lookLv = true;
        let html = ``;


        if (!element.className) {

            let lv1 = level1[iLv1];
            document.getElementById("level1").innerText = lv1;
            level2 = Object.keys(objData[lv1]);
            let lv2 = level2[iLv2];
            document.getElementById("level2").innerText = lv2;
            element.className = "lv2-open";

            generarLevel(lv1, lv2).forEach((lv3, iLv3) => {
                generarLevel(lv1, lv2, lv3).forEach(
                    (item, iIt) => {
                        html += generalTableLista(item, iLv1, iLv2, iLv3, iIt);
                    });
            });

            document.getElementById("listTable").innerHTML = html;

        } else {
            element.className = "";
        }
        console.log('un click 2');
        setTimeout(() => lookLv = false, 500);
    }
}

function addOpen3(element, iLv1, iLv2, iLv3) {


    if (!lookLv) {
        lookLv = true;
        let html = ``;
        if (!element.className) {

            let lv1 = level1[iLv1];
            document.getElementById("level1").innerText = lv1;
            level2 = Object.keys(objData[lv1]);
            let lv2 = level2[iLv2];
            document.getElementById("level2").innerText = lv2;
            level3 = Object.keys(objData[lv1][lv2]);
            let lv3 = level3[iLv3];
            document.getElementById("level3").innerText = lv3;

            element.className = "lv3-open";

            generarLevel(lv1, lv2, lv3).forEach((item, iIt) => {
                html += generalTableLista(item, iLv1, iLv2, iLv3, iIt);
            });

            document.getElementById("listTable").innerHTML = html;

        } else {
            element.className = "";
        }
        console.log('un click 3');
        setTimeout(() => lookLv = false, 500);
    }
}


function search() {

    let countSearch = 0;
    let partNo = document.getElementById('PartNo').value;
    let Description = document.getElementById('Description').value;

    if (!lookLv) {
        lookLv = true;
        let html = ``;

        level1.forEach(
            (lv1, iLv1) => {
                generarLevel(lv1).forEach(
                    (lv2, iLv2) => {
                        generarLevel(lv1, lv2).forEach(
                            (lv3, iLv3) => {
                                generarLevel(lv1, lv2, lv3).forEach(
                                    (item, iIt) => {

                                        if (countSearch <= 250) {

                                            if ((partNo && String(item.D).indexOf(partNo) >= 0) || (Description && (String(item.E).indexOf(Description) >= 0 || String(item.E).indexOf(Description.toUpperCase()) >= 0))) {
                                                html += generalTableLista(item, iLv1, iLv2, iLv3, iIt);
                                                document.getElementById("listTable").innerHTML = html;
                                                countSearch++;
                                            }
                                        } else {
                                            return false;
                                        }
                                    }
                                );
                            }
                        )
                    }
                )
            }
        );

        setTimeout(() => lookLv = false, 500);
    }
}

function setData(iLv1, iLv2, iLv3, iIt) {



    let lv1 = level1[iLv1];
    document.getElementById("level1").innerText = lv1;

    level2 = Object.keys(objData[lv1]);
    let lv2 = level2[iLv2];
    document.getElementById("level2").innerText = lv2;

    level3 = Object.keys(objData[lv1][lv2]);
    let lv3 = level3[iLv3];
    document.getElementById("level3").innerText = lv3;


    let obj = objData[lv1][lv2][lv3][iIt];
    document.getElementById("PartNo").value = obj.D;
    document.getElementById("Description").value = obj.E;
}