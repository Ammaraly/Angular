const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
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
  res.status(200).json(posts);
})

module.exports = app;
