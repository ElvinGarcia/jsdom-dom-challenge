// counter's controllers
let minus = document.getElementById("minus");
let plus  = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let likes = document.getElementsByClassName("likes")[0];

let counter = document.getElementById("counter"); // gets the counter element
let list = document.getElementById("list");
let commentForm = document.getElementById("comment-form");

function runTheCounter(){    
let parseText  = parseInt(counter.innerText); // converts the innerText string value to integer
    counter.innerText = parseText + 1; // increments the inner value by 1 and sets it
   }



  let incrementer = setInterval(runTheCounter,900); // starts the counter
     

pause.addEventListener("click", function(){
      clearInterval(incrementer);
      pause.textContent = "start";
    });


  minus.addEventListener("click", function(){
       let parseText = parseInt(counter.innerText);
       counter.innerText = parseText - 1;
  });
  
  plus.addEventListener("click", function(){
    runTheCounter();  
  });

  heart.addEventListener("click", function(){
        let li = createElement("li", `you liked number ${counter.innerText}`);
       likes.appendChild(li);
  });


// Comment function

function createElement(element, comment) {
  let listItem = document.createElement(element);
  listItem.textContent = comment;
  return listItem;
}

function addToCommentList(comment) {
  let listItem = createElement("li", comment);
  if (list.getElementsByTagName("ul").length) {
    let listIndex = list.getElementsByTagName("ul").length - 1; // index where the order or unorder list exist
    let ul = list.getElementsByTagName("ul")[listIndex]; // comment list  or/and unorder list
    ul.appendChild(listItem); // attach the listItem to the existing 'ul' tag
  } else {
    let ul = createElement("ul", ""); // create a 'ul' tag and attach it
    list.appendChild(ul); // attaches list to the div
    ul.appendChild(listItem); // attaches the listItem to the list
  }
}

function logSubmit(event) {
  event.preventDefault(); // prevents form from making an actuall request
  let comment = event.target[0].value.trim(); // clears trailing  spaces
  addToCommentList(comment); // self descriptive
  commentForm.reset(); // clears the input box
  comment.focus(); // places the cursor on the input field
}

commentForm.addEventListener("submit", logSubmit);


