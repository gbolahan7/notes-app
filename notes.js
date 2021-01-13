const fs = require('fs');
const chalk = require('chalk');


const getNotes = () => {
    return 'Your Notes'
}

const addNote = (title, body) => {
   const notes = loadNotes()
   const duplicateNotes = notes.filter((note) => note.title === title)
      
   if (duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}