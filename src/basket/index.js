import React from "react";
import { useSelector } from "react-redux";
import Inner from "./inner";
import food from '../food.json';

function Basket() {
  // Получаем актуальный счетчик из store
  const counter = useSelector(state => state.counter);

  // Количество типов товаров в корзине
  const redLength = Object.keys(counter).filter(id => counter[id] > 0).length;

  // Создаем массив товаров для показа
  const innerBasket = Object.entries(counter)
    .filter(([id, count]) => count > 0)
    .map(([id, count]) => ({
      ...food[id],
      quantity: count
    }));

  // Подсчет итоговой суммы
  const totalPrice = innerBasket.reduce((sum, item) => {
    return sum + (item.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="container col-lg-3 fs-5">
      <h2>Корзина</h2>
      {redLength === 0 ? (
        <h3>В корзине пусто :(</h3>
      ) : (
        <>
          <table className="table">
            <tbody>
              {innerBasket.map(item => (
                <Inner key={item.id} {...item} quantity={item.quantity}  deleteProps={item.id} />
              ))}
            </tbody>
          </table>
          <hr />
          <table className="table">
            <tbody>
              <tr className="container">
                <td className="col-8"><h3>Итого:</h3></td>
                <td className="col-4 text-end"><h3>{totalPrice} ₽</h3></td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Basket;