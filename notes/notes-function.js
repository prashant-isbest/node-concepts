const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return loadNotes();
};

const getNotesTitle = function () {
  const notes = loadNotes();
  notes.forEach((note, index) => {
    console.log(chalk.yellow(index + 1), chalk.green(note.title));
  });
};

const addNote = function (title, body) {
  const notes = loadNotes();
  var duplicate = 0;

  debugger;
  notes.forEach((element) => {
    if (element["title"] === title) {
      duplicate = 1;
    }
  });

  if (duplicate == 1) {
    console.log(chalk.red("title already exist"));
    return;
  }

  notes.push({ title: title, body: body });
  saveNotes(notes);
  console.log(chalk.green("new note added"));
};

const saveNotes = function (notes) {
  dj = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dj);
};

const loadNotes = function () {
  try {
    const db = fs.readFileSync("./notes.json");
    dj = db.toString();
    d = JSON.parse(dj);
    return d;
  } catch (e) {
    return [];
  }
};

const deleteNote = function (title) {
  const notes = loadNotes();
  var deletedNote;
  var noteExist = 0;

  const neededNotes = notes.filter((note) => {
    if (note.title === title) {
      deletedNote = note;
    }
    return note.title !== title;
  });

  if (JSON.stringify(neededNotes) === JSON.stringify(notes)) {
    console.log(chalk.red("there is no note with given title"));
    return;
  }

  saveNotes(neededNotes);
  console.log(chalk.green("note deleted"));
  console.log(deletedNote);
};

module.exports = {
  getNotes,
  addNote,
  deleteNote,
  getNotesTitle,
};
