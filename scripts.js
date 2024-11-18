const productImages = [
  "1.jpg",
  "2.jpg",
  "4.jpg",
  // Añade más URLs de imágenes aquí
];

function generateProducts(count) {
  let products = "";
  for (let i = 1; i <= count; i++) {
    const imageUrl = productImages[i % productImages.length]; // Cicla a través de las imágenes
    products += `
      <div class="product-item">
        <div class="product-image" style="background-image: url('${imageUrl}');"></div>
        <h3>Producto ${i}</h3>
        <p>Descripción del producto ${i}.</p>
        <p>Precio: $${generateRandomNumber(5, 100)}</p>
      </div>
    `;
  }
  return products;
}

function generateRandomProducts(count, discount = false) {
  let products = "";
  for (let i = 1; i <= count; i++) {
    const imageUrl = productImages[i % productImages.length]; // Cicla a través de las imágenes
    let price = generateRandomNumber(5, 100);
    if (discount) {
      price = (price * 0.9).toFixed(2);
    }
    products += `
      <div class="product-item">
        <div class="product-image" style="background-image: url('${imageUrl}');"></div>
        <h3>Producto ${i}</h3>
        <p>Descripción del producto ${i}.</p>
        <p>Precio: $${price}</p>
      </div>
    `;
  }
  return products;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Añadir productos al DOM
document.getElementById("product-list").innerHTML = generateProducts(50);
document.getElementById("best-sellers-list").innerHTML =
  generateRandomProducts(3);
document.getElementById("offers-list").innerHTML = generateRandomProducts(
  3,
  true
);
