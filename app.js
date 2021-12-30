// function highlight(button){
//     button.parentNode.parentNode.className='highlight';
// }

var chk = document.querySelectorAll("table input[type=checkbox]");

for (i = 0; i < chk.length; i++) {
    chk[i].addEventListener("change", function() {
        selectRow(this);
    });
}
function selectRow(elem) {
    if (elem.checked) {
        elem.parentNode.parentNode.style.backgroundColor = 'yellow';
    } else {
        elem.parentNode.parentNode.style.backgroundColor = '';
    }
}