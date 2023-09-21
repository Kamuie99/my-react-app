function ProductItem({ name, price, count, onCountChange}) {
  const handleIncrement = () => {
    onCountChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      onCountChange(count - 1);
    }
  };

  const totalItemPrice = price * count;
  const intPrice = parseInt(price);

  return (
    <div className="product-item">
      <div className="product-info">
        <h3 id="product_name">{name}</h3>
        <h3>{intPrice.toLocaleString()}원</h3>
      </div>
      <div className="product-controls">
        <h5>
          총 가격: {totalItemPrice.toLocaleString()}원
          총 수량: {count}개
        </h5>
        {/* <input type="number" value={count} readOnly /> */}
        <div className="buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;