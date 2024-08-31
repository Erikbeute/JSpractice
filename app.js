// const SPA = (() => {
   
//     const init = (Data) => {
//         console.log(Data); 
//         // or print on page.. 
//     }

//     return {
//         init: init
//     };
// })();


// const Data = [
//     { name: "Image 1", url: "image1.jpg", photographer: "Photographer 1" },
//     { name: "Image 2", url: "image2.jpg", photographer: "Photographer 2" },
//     { name: "Image 3", url: "image3.jpg", photographer: "Photographer 3" }
// ];


// (() =>{
//    SPA.init(Data);
// })(); 

document.addEventListener('DOMContentLoaded', () => {

const SPA = (() => {
    const init = (Data) => {
        console.log(Data);

        let body = document.querySelector('body');
        let containerDiv = document.createElement('div');

        Data.forEach(item => {
            let itemDiv = document.createElement('div');
            let img = document.createElement('img');
            img.src = item.url;
            img.alt = item.name;

            let namePara = document.createElement('p');
            namePara.textContent = `Name: ${item.name}`;
            let photographerPara = document.createElement('p');
            photographerPara.textContent = `Photographer: ${item.photographer}`;

            itemDiv.appendChild(img);
            itemDiv.appendChild(namePara);
            itemDiv.appendChild(photographerPara);

            // Append the item div to the container div
            containerDiv.appendChild(itemDiv);
        });

        // Append the container div to the body
        body.appendChild(containerDiv);
    };

    return {
        init: init
    };
})();

const Data = [
    { name: "Image 1", url: "SPA/images/Image1.jpeg", photographer: "Photographer 1" },
    { name: "Image 2", url: "SPA/images/Image2.jpeg", photographer: "Photographer 2" },
    { name: "Image 3", url: "SPA/images/Image3.jpeg", photographer: "Photographer 3" }
];

(() => {
   SPA.init(Data);
})();

}); 