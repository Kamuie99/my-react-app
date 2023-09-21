import React, { useState } from 'react';
import ProductItem from '../components/basket';
import '../styles/basket.css';


const AppBasket =() =>  {
  const [product1, setProduct1] = useState({count:0, price:13500});
  const [product2, setProduct2] = useState({count:0, price:42000});

  const totalProductCount = product1.count + product2.count;
  const totalProductPrice = product1.count * product1.price + product2.count * product2.price;

  return (
    <div className="App">
      <h1>장바구니</h1>
      <div className="cart-header">
        <p>총 상품 개수: {totalProductCount} 개</p>
        <p>총 가격: {totalProductPrice.toLocaleString()} 원</p>
      </div>
      <ProductItem
        name="세제"
        price="13500"
        count={product1.count}
        onCountChange={(newCount) => setProduct1({ ...product1, count: newCount})}
      />
      <ProductItem
        name="리액트 기술"
        price="42000"
        count={product2.count}
        onCountChange={(newCount) => setProduct2({ ...product2, count: newCount})}       
      />
    </div>
  );
}

export default AppBasket;





