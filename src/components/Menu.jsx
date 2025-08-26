import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import OrderModal from "./OrderModal";
import { addToCart } from "../redux/redux";

function Menu() {
  const menu = useSelector((state) => state.app.menu);
  const cart = useSelector((state) => state.app.cart);
  const dispatch = useDispatch();

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );

  const categorys = Object.keys(menu);

  return (
    <>
      {categorys.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map((item) => (
              <Item
                key={item.id}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}

      {modalOn && (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
          onAddToCart={(selectedItem) => dispatch(addToCart(selectedItem))}
        />
      )}
    </>
  );
}

export default Menu;