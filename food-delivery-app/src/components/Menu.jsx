import "./App.css";
function Menu() {
  return (
    <div>
      <div className="search">Search</div>
      <div className="cardbody">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}
function RestaurantCard() {
  return (
    <div className="cardTile">
      <img
        className="food"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wse52fmwiinpkvueeues"
        alt="food"
      />
      <h3>FOODS</h3>
      <h3>Biryani, north indian, asian</h3>
      <h3>4.4 stars</h3>
      <h3>38 minutes</h3>
      {/* <button>Add to cart</button> */}
    </div>
  );
}

export default Menu;
