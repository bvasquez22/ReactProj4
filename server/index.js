const express = require('express')
const cors = require('cors')
const { getAllPosts, getCurrentUserPosts, deletePost } = require('./controllers/posts')
const app = express()
const PORT = process.env.Port || 4004

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`Running on Port ${PORT}`))



const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {register, login} = require('./controllers/auth')

app.post('/register', register)
app.post('/login', login)
app.post('/posts', addPost)

app.get('/posts', getAllPosts)
app.get('/userposts/:userId', getCurrentUserPosts)

app.put('posts/:id', editPost)

app.delete('/posts/:id', deletePost)


