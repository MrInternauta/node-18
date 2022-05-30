import bcrypt from 'bcrypt';

const password = 'password123!';
//bcrypt.hashSync(password) //Block the request (is excecuted in the main theead)
//Solved with callback
// bcrypt.hash(password, 5, (err, hash) => {
//   console.log(hash);
//   bcrypt.compare(password, hash, (error, same) => {
//     console.log(same);
//   });
// })

//WE CAN USE PROMISE TO
bcrypt.hash(password, 5)
  .then((hash) => {
    console.log(hash);
    return bcrypt.compare(password, hash);
  })
  .then((same) => {
    console.log(same);
  })
  .catch(err => {
    console.log(err);
  })
  .catch(err => {
    console.log(err);
  })
