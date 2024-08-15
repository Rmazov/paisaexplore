const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB y mostrar un mensaje de éxito o error
mongoose.connect('mongodb://localhost:27017/paisaexplore')
    .then(() => {
        console.log('Conectado a MongoDB correctamente');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

app.get('/api/blogs', async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

app.post('/api/blogs', async (req, res) => {
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
