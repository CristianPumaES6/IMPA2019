function validateInputSearch() {


    let partNo = document.getElementById('PartNo').value;
    let Description = document.getElementById('Description').value;

    if (partNo.length >= 4 || Description.length >= 2) {
        document.getElementById("Search").disabled = "";
    } else {
        document.getElementById("Search").disabled = "disabled";
    }
}