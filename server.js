const express = require('express');
const bodyParser = require('body-Parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) =>{
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/1',
          'name' : '홍길동',
          'birthday' : '910320',
          'gender' : '남자'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/2',
          'name' : '영미',
          'birthday' : '921220',
          'gender' : '여자'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : '철수',
          'birthday' : '930410',
          'gender' : '남자'
        }
      ])
});

app.listen(port,() =>{ console.log(`Listening on port ${port}` )});