function newItem() {

let list = $('#list');
let li = $('<li></li>');
let inputValue = $('input').val();

li.append(inputValue);

    //1. Adding a new item to the list of items:

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        list.append(li);
    };

};