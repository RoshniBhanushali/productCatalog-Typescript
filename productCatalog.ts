interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  class ProductCatalog {
    private products: Product[];
  
    constructor(products: Product[]) {
      this.products = products;
    }
  
    getProducts(): Product[] {
      return this.products;
    }
  }
  
  class ProductCatalogRenderer {
    private productCatalog: ProductCatalog;
    private container: HTMLElement;
  
    constructor(productCatalog: ProductCatalog, container: HTMLElement) {
      this.productCatalog = productCatalog;
      this.container = container;
    }
  
    render(): void {
      const products = this.productCatalog.getProducts();
  
      const productListElement = document.createElement('ul');
      productListElement.classList.add('product-list');
  
      products.forEach((product) => {
        const productElement = this.createProductElement(product);
        productListElement.appendChild(productElement);
      });
  
      this.container.appendChild(productListElement);
    }
  
    private createProductElement(product: Product): HTMLElement {
      const productElement = document.createElement('li');
      productElement.classList.add('product');
  
      const productImageElement = document.createElement('img');
      productImageElement.src = product.imageUrl;
      productImageElement.alt = product.name;
      productElement.appendChild(productImageElement);
  
      const productNameElement = document.createElement('h3');
      productNameElement.textContent = product.name;
      productElement.appendChild(productNameElement);
  
      const productDescriptionElement = document.createElement('p');
      productDescriptionElement.textContent = product.description;
      productElement.appendChild(productDescriptionElement);
  
      const productPriceElement = document.createElement('p');
      productPriceElement.classList.add('price');
      productPriceElement.textContent = `$${product.price.toFixed(2)}`;
      productElement.appendChild(productPriceElement);
  
      const productButtonElement = document.createElement('button');
      productButtonElement.textContent = 'Add to Cart';
      productElement.appendChild(productButtonElement);
  
      return productElement;
    }
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/100x100',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/100x100',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/100x100',
    },
  ];
  
  const productCatalog = new ProductCatalog(products);
  
  const container = document.getElementById('product-catalog-container');
  if (container !== null) {
    const renderer = new ProductCatalogRenderer(productCatalog, container);
    renderer.render();
  } else {
    console.error('Container element not found.');
  }
  