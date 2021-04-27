const addToList = () => {
  let userData = document.querySelector("#userData").value;
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    //
    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    //
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    //
    doneButton.classList.add("done");
    newLi.appendChild(newContainer);
    //
    const check = () => newLi.classList.toggle("completed");
    //
    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Enter text first please";
  }
};

// PRESS ENTER KEY TO TRIGGER BUTTON
document.getElementById("userData").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("userDataButton").click();
  }
});
