const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text = "") {
  // a div was created and a class was added to it to style it properly
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = ` 
  
        
        <div class="tools">
          <button class="edit">
              <i class="fas fa-edit"></i>
          </button>

          <button class="delete">
              <i class="fas fa-trash-alt"></i>
          </button>

        </div>
        <div class="main ${text ? "" : "hidden"} "></div>
        <textarea class="main ${text ? "hidden" : ""} " ></textarea>
      

  `;
  //Selectors
  // const notesEl = note.querySelector(".notes");
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  //having select the button for editing, an event listener is added.
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  //Event listener to delete attached to a delete btn
  deleteBtn.addEventListener("click", () => {
    note.remove();
    UpdateLocalStorage();
  });

  //Event listener to
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
    UpdateLocalStorage();
  });

  main.addEventListener("dblclick", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  document.body.appendChild(note);
}

function UpdateLocalStorage() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
