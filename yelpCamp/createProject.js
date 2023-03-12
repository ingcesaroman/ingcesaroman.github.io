const fs = require('node:fs');
const folderName = process.argv[2] || 'Project'

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')    
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
    console.log('Files has been created!');
} catch (e) {
    console.log("Something went wrong!!!");
    console.log(e);
}