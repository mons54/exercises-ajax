const express = require('express')
const app = express()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/user', function (req, res) {
  if (!req.body.name) {
    return res.status(500).send("Le nom n'est pas valide !");
  }

  let sex, type

  if (req.body.sex == 1) {
    sex = "Homme"
  } else if (req.body.sex == 2) {
    sex = "Femme"
  }

  if (!sex) {
    return res.status(500).send("Le sexe n'est pas valide !");
  }

  if (req.body.type == 1) {
    type = "FrontEnd"
  } else if (req.body.type == 2) {
    type = "BackEnd"
  } else if (req.body.type == 2) {
    type = "FullStack"
  }

  if (!type) {
    return res.status(500).send("Le type n'est pas valide !");
  }

  res.send(`
    <div class="bg-light p-2 rounded">
      <div><strong>Name</strong> : ${req.body.name}</div>
      <div><strong>Sexe</strong> : ${sex}</div>
      <div><strong>Type</strong> : ${type}</div>
    </div>
  `)
});

app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
})
