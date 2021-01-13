const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
// const texts = require('./notes.js')

// create add command

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      }  ,
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
});

//create remove command 

yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    builder: {
    title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
    }
    },
    handler(argv){
        console.log('Removing a new note');
        notes.removeNote(argv.title)
    }
});

//create a read command 
yargs.command({
    command: 'read',
    description: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        } ,
    handler(argv){
        // console.log('Reading a new note');
        notes.readNote(argv.title)

    }
});

// create a list command
yargs.command({
    command: 'list',
    description: 'List your notes',
    handler(){
        // console.log('Listing out all notes');
        notes.listNotes()
    }
});


// console.log(process.argv);
console.log(yargs.argv);


