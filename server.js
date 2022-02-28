const express = require('express');
const path = require('path')
const app = express();

app.use((req, res, next) => {
    next()
  })

app.use('', express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;
//http://localhost:3000/audio/afve.mp3
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));