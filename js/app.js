let str = "";
function fakeText() {
    str = document.getElementById('textHere').value;
    str = "";
    document.getElementById('textHere').innerHTML = str;
}