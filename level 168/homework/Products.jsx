function Products() {
  const products = [
    { name: "Apple", price: 3 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 4 },
  ];

  const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>ჯამური ფასი: {totalPrice} ₾</h3>
    </div>
  );
}

export default Products;
