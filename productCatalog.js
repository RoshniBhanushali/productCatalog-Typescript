var ProductCatalog = /** @class */ (function () {
    function ProductCatalog(products) {
        this.products = products;
    }
    ProductCatalog.prototype.getProducts = function () {
        return this.products;
    };
    return ProductCatalog;
}());
var ProductCatalogRenderer = /** @class */ (function () {
    function ProductCatalogRenderer(productCatalog, container) {
        this.productCatalog = productCatalog;
        this.container = container;
    }
    ProductCatalogRenderer.prototype.render = function () {
        var _this = this;
        var products = this.productCatalog.getProducts();
        var productListElement = document.createElement('ul');
        productListElement.classList.add('product-list');
        products.forEach(function (product) {
            var productElement = _this.createProductElement(product);
            productListElement.appendChild(productElement);
        });
        this.container.appendChild(productListElement);
    };
    ProductCatalogRenderer.prototype.createProductElement = function (product) {
        var productElement = document.createElement('li');
        productElement.classList.add('product');
        var productImageElement = document.createElement('img');
        productImageElement.src = product.imageUrl;
        productImageElement.alt = product.name;
        productElement.appendChild(productImageElement);
        var productNameElement = document.createElement('h3');
        productNameElement.textContent = product.name;
        productElement.appendChild(productNameElement);
        var productDescriptionElement = document.createElement('p');
        productDescriptionElement.textContent = product.description;
        productElement.appendChild(productDescriptionElement);
        var productPriceElement = document.createElement('p');
        productPriceElement.classList.add('price');
        productPriceElement.textContent = "$".concat(product.price.toFixed(2));
        productElement.appendChild(productPriceElement);
        var productButtonElement = document.createElement('button');
        productButtonElement.textContent = 'Add to Cart';
        productElement.appendChild(productButtonElement);
        return productElement;
    };
    return ProductCatalogRenderer;
}());
var products = [
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
var productCatalog = new ProductCatalog(products);
var container = document.getElementById('product-catalog-container');
if (container !== null) {
    var renderer = new ProductCatalogRenderer(productCatalog, container);
    renderer.render();
}
else {
    console.error('Container element not found.');
}
