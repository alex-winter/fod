const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

const PORT = 3000

const ramDatabase = {
  todo: [
    { name: 'Make Breakfast' },
    { name: 'Clean House' },
    { name: 'Eat Lunch' },
  ]
}

app.get('/api/todo', (req, res) => {
  const todos = ramDatabase.todo;

  res.status(200).json(todos);
});

app.post('/api/todo', (request, response) => {
  const data = request.body

  ramDatabase.todo.push(data)

  response.status(200).json({ message: "Success" })
})

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'website.html'))
})

app.get('/code-snippet/{fileName}', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'code-snippet', request.params.fileName))
})

app.get('/example*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'example.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
