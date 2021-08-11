const express = require('express');

const posts = [
  {
    id: "b0336d88-f7e8-461f-913f-941ed69356d0",
    title: "My First Server-Side Post",
    content: "This is my first server-side post here!"
  },
  {
    id: "2f9ee56d-44f2-44f0-ac14-14aa33f20a63",
    title: "My Second Server-Side Post",
    content: "This is my second server-side post here!"
  },
  {
    id: "a8914e90-53ac-4d0f-932d-de5a04b81084",
    title: "My Third Server-Side Post",
    content: "This is my third server-side post here!"
  },
];

const idGenerator = getId();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );

  next();
});

app.post('/api/post', (req, res, next) => {
  let post = {
    id: idGenerator.next(),
    title: req.body.title,
    content: req.body.content
  };
  console.log(post);
  posts.push(post)
  res.status(201).json({
    id: post.id
  });
})

app.get('/api/posts', (req, res, next) => {

  res.status(200).json(posts);
})

module.exports = app;

function* getId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
