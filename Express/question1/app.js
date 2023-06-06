const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
  const articles = generateArticles(20);
  res.json(articles);
});

function generateArticles(num) {
  const articles = [];
  for (let i = 1; i <= num; i++) {
    const article = {
      id: i,
      title: `Article ${i}`,
      content: `This is the content of article ${i}`
    };
    articles.push(article);
  }
  return articles;
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
