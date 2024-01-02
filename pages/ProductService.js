// ProductService.js

function getProducts() {
    return fetch('/demo/data/products.json')
        .then(res => res.json())
        .then(d => d.data);
}

// function saveProducts(products) {
//     return fetch('/demo/data/products.json', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ data: products }),
//     })
//         .then(res => res.json())
//         .then(d => d.data); ;
//     // const filePath = 'public/data/products.json';
//     // const fs = require('fs');

//     // const jsonProducts = JSON.stringify({ data: products }, null, 2);

//     // fs.writeFile(filePath, jsonProducts, (err) => {
//     //     if (err) {
//     //         console.error(err);
//     //         return;
//     //     }
//     //     console.log('File has been created');
//     // });
// }

export { getProducts };
