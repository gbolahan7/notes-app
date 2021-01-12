    const fs = require('fs');

    // const book = {
    //     author: 'Abass',
    //     title: 'BEst Players in the world'
    // }

    // const bookJSON = JSON.stringify(book);
    // fs.writeFileSync('1-json.json', bookJSON);

    // const dataBuffer = fs.readFileSync('1-json.json');
    // const dataJSON = dataBuffer.toString();
    // const data = JSON.parse(dataJSON);
    // console.log(data.title);

    const dataBuffer = fs.readFileSync('1-json.json');
    const dataJSON = dataBuffer.toString();
    const user = JSON.parse(dataJSON);

    user.name = "Cristiano Ronaldo"
    user.age = 25

    const userData = JSON.stringify(user);
    fs.writeFileSync('1-json.json', userData);