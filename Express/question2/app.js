const express = require('express');
const app = express();

const checkAuthentication = (req, res, next) => {
  const { user } = req;
  
  if (user && user.isAuthenticated) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

const getPostData = (req, res) => {
  const postData = {
    id: 1,
    title: 'Sample Post',
    content: 'This is the content of the post.'
  };

  res.json(postData);
};

app.get('/post', checkAuthentication, getPostData);
