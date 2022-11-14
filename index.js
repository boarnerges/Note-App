const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote() {
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
        <div class="main hidden"></div>
        <textarea></textarea>
      

  `;
  //Selectors
  // const notesEl = note.querySelector(".notes");
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  //having select the button for editing, an event listener is added.
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  //Event listener to delete attached to a delete btn
  deleteBtn.addEventListener("click", () => {
    note.remove();
  });
  //Event listener t
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}
