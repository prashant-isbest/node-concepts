const fs = require("fs");
const yargs = require("yargs");

const {
  getNotesTitle,
  getNotes,
  addNote,
  deleteNote,
} = require("./notes-function");

yargs.command(
  "add",
  "this will add a note",
  {
    title: {
      type: "string",
      demandOption: true,
    },
    body: {
      type: "string",
      demandOption: true,
    },
  },
  function (argv) {
    console.log(argv);
    addNote(argv.title, argv.body);
  }
);

yargs.command(
  "get",
  "this will return title of  all notes",
  {},
  function (argv) {
    console.log(argv);
    getNotesTitle();
  }
);

yargs.command(
  "delete",
  "this will delete a  note",
  {
    title: {
      demandOption: true,
      type: "string",
    },
  },
  function (argv) {
    deleteNote(argv.title);
  }
);

yargs.parse();
