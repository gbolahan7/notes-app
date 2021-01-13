const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
   const notes = loadNotes()
//    const duplicateNotes = notes.filter((note) => note.title === title)
   const duplicateNote = notes.find((note) => note.title === title)      
  
   if (!duplicateNote) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);   
    console.log('New Note Added')
} else {
    console.log('Note title taken')
}

}

const listNotes = () => {
    const notes = loadNotes()
    // const notesToDisplay = notes.forEach(note => {
        console.log(chalk.blue.inverse('Your Notes!'))
// }
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const notesToRead = notes.find((note) => note.title === title)

    if(notesToRead) {
        console.log(chalk.inverse(notesToRead.title));
        console.log(notesToRead.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

// const readNotes = (notes) => {
//     const dataJSON = JSON.stringify(notes)
//     fs.readFileSync('notes.json', dataJSON)
// }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}

function removeNote (title) {
// console.log(title); 
const notes = loadNotes()
const notesToKeep = notes.filter((note) => note.title !== title)
if(notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep);
} else {
    console.log(chalk.red.inverse('No note found!'))
}

    
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}