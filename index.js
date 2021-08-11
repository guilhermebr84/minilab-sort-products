// Seu código aqui!

const products = [


  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
    {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
    {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
    {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];

// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!

function filterProducts(categoria) {
  const newArr = []
  for (let count = 0; count < products.length; count++) {
    if (products[count].tags.includes(categoria)) {
      newArr.push(products[count])
    }
  }
    return newArr
  }
  const produtoApple = filterProducts('apple');
  console.log(produtoApple);