// event listeners listen to the events that occur in the Web Page like clicking, scrolling, typing
// then they respond to them as written in the code
let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph was clicked!");
}
// this function won't get executed by "ourselves"
// instead we hand this function over to the browser through the event listener.
// so this function get executed when the event listener occurs.
// these kind of functions are known as "callback functions".

paragraphElement.addEventListener("click", changeParagraphText);
// This is a code to change what's on the paragraph when clicking on it.
// First define the type of the listener, like whether it's a click or hover over or something like that
// Then we define what to do when that event occurs.
// but that should be inserted using a function
// but we don't type () in there as it's a callback function.
// If we add () after the function name, then it get executed by ourselves. But callback functions doesn't get executed by ourselves.

// THIS EVENT LISTENERS WILL BE VERY USEFUL WHEN WE NEED TO PRANK THE USERS
// THIS EVENT LISTENERS WILL ALSO BE USEFUL WHEN WE WANT TO COLLECT DATA ABOUT WHAT THE USERS ARE ACTUALLY DOING
// (EX: EVENT LISTENERS MIGHT BE USEFUL WHEN WE NEED TO FIND OUT WHAT IMAGES DOES THE USERS STAY STARED AT THE MOST!)

let inputElement = document.querySelector("input");

function characterCount(eventParameter) {
  let enteredText = inputElement.value;
  console.log(enteredText);
  // When we press a key, the above code code console logs every character that has already been typed

  console.log("Characters were typed!");
  // The above code is just to confirm that some characters were typed!

  console.log(eventParameter);
  // when we type something inside the parenthesis of functions which we plan to connect to events,
  // the browser will automatically create an "object" by that name.
  // that object holds a bunch of properties.
  // these are known as "event objects"
  // event objects are created for every eventListener
  // but the properties of that object will depend on the kind of event.

  let againEnteredText = eventParameter.target.value;
  // the above code is actually the same code written in the 29th line.
  // the "target" property of the eventParameter objet holds the element of the html element we target
  // so we can access that element by using this target property.
  // by using this approach, we can get rid of the external inputElement variable we used at the 29th line.
  console.log(againEnteredText);

  let anotherEnteredText = eventParameter.data;
  console.log(anotherEnteredText);
  // this code only console logs the last character which was typed.
  // not all the characters that have already been typed.
}

inputElement.addEventListener("input", characterCount);
// input is the eventListener we use to listen when some text is typed inside <input> element.
// keyup listens to events occur when we release a typed key on the keyboard
// keydown listens to events occur when we "press" a key but still doesn't released it
