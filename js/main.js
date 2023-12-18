let textAreaDiv = document.querySelector('.text-Area');
let icon = document.querySelector('.icon');
let textArea = document.getElementById('TextArea');
let addNotesButton = document.querySelector('.addNote');
let createDiv = document.querySelector('.create');
let textAreaValue = textArea.value;
let container = document.querySelector('.row');
let test2 = document.createElement("p");

let div= document.createElement("div");
let flag = "elementsCreated"

function addYourNotes(){
    textAreaDiv.classList.remove('d-none');
    icon.classList.add('d-none');
    addNotesButton.classList.remove('d-none')

}
createDiv.addEventListener('click',addYourNotes);
let test = []

function AddNotes(){;

$('.row').append(`     <div id="yourNotes" class="col-sm-12 col-md-6  col-lg-3 text-center">
<div class="theNotes ${flag} d-flex justify-content-center align-items-center">
   ${textArea.value}

</div>

</div>`)

}


// let notes=document.querySelector(".theNotes");
    


addNotesButton.addEventListener('click',AddNotes);

$('.elementsCreated').dblclick(function(){
    this.remove();
    console.log("double click from the Notes")
})