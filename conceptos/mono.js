console.log('Hello world');

let i = 0;
setInterval(() => {
  i++;
  console.log(i);
  if (i == 5) {
    console.log('Force Error');
    var a = i + z;
  }
  console.log('In process');
}, 3000);

console.log('Otro proceso');

