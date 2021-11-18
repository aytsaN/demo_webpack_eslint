// import json from './assets/json/data';

const body = document.body;
// const body2 = document.body;

async function getData() {
  const response = await fetch('./assets/json/data.json');
  let json = await response.json();
  console.log('commits', json);

  json.forEach((element) => {
    const myImage = new Image(100, 200);
    const myImage2 = new Image(100, 200);
    myImage.src = `./assets/image-data/full/${element.imageNum}full.jpg`;
    myImage2.src = `./assets/image-data/img/${element.imageNum}.jpg`;
    body.appendChild(myImage);
    body.appendChild(myImage2);
  });
  // console.log('json', ...json)
}

export { getData };
