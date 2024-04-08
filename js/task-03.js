const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

var styles = `
    img {
        display: block;
    }
    .item {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: flex-start;
    }
    .gallery {
        display: block;
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

const documentElement = document.getElementsByClassName("gallery")[0];

for(let i = 0; i < images.length; i += 1) {
    const listElem = document.createElement('li');
    const imgElem = document.createElement('img');
    listElem.className = "item";
	imgElem.src = images[i].url;
    imgElem.alt = images[i].alt;
    listElem.appendChild(imgElem);
    documentElement.appendChild(listElem);
}
