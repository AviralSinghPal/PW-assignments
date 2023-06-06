const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// In-memory database of blog posts
let blogPosts = [];

// Get all blog posts
app.get('/posts', (req, res) => {
  res.json(blogPosts);
});

// Get a specific blog post by ID
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const post = blogPosts.find((post) => post.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Blog post not found' });
  }
});

// Create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: Date.now().toString(), title, content };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// Update an existing blog post
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  const postIndex = blogPosts.findIndex((post) => post.id === postId);

  if (postIndex !== -1) {
    blogPosts[postIndex] = { id: postId, title, content };
    res.json(blogPosts[postIndex]);
  } else {
    res.status(404).json({ message: 'Blog post not found' });
  }
});

// Delete a blog post
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const postIndex = blogPosts.findIndex((post) => post.id === postId);

  if (postIndex !== -1) {
    const deletedPost = blogPosts.splice(postIndex, 1);
    res.json(deletedPost[0]);
  } else {
    res.status(404).json({ message: 'Blog post not found' });
  }
});

// Replace a blog post with a new one
app.put('/posts/:id/replace', (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  const postIndex = blogPosts.findIndex((post) => post.id === postId);

  if (postIndex !== -1) {
    blogPosts[postIndex] = { id: postId, title, content };
    res.json(blogPosts[postIndex]);
  } else {
    res.status(404).json({ message: 'Blog post not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

