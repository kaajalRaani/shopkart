import React, { useState } from "react";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };


  const showMenu = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle menu visibility
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <p className="logo">ShopKart</p>
        <div>
            <p className="wishlist">WISHLIST(0)</p>
            <p>BAG(0)</p>
        </div>
        <i class={`fa-solid ${isMenuVisible ? "fa-xmark" : "fa-bars"}`} onClick={showMenu}></i>
      </div>
      <ul className={`${isMenuVisible ? "visible" : "hide"}`}>
        {navbar.map((item) => (
          <li key={item.id}>
            {item.id === "product" ? (
              <select value={selectedProduct} onChange={handleProductChange}>
                <option>
                  Our Products
                </option>
                {item.child.map((subItem) => (
                  <option key={subItem.id} value={subItem.id}>
                    {subItem.name}
                  </option>
                ))}
              </select>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
