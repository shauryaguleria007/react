const reducer = (state, action) => {
  if (action.type === "clear_cart") {
    return { ...state, cart: [] };
  } else if (action.type === "remove_item") {
    const newCart = state.cart.filter((item) => item.id !== action.id);
    return { ...state, cart: newCart };
  } else if (action.type === "increase_item") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.id) return { ...item, amount: item.amount + 1 };
      return item;
    });

    return { ...state, cart: newCart };
  } else if (action.type === "decrease_item") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.id) return { ...item, amount: item.amount - 1 };
        return item;
      })
      .filter((item) => item.amount > 0);
    return { ...state, cart: newCart };
  } else if (action.type === "render_total") {
    let newTotal = 0;
    let newAmount = 0;
    state.cart.map((item) => {
      newTotal += item.amount;
      newAmount += item.price * item.amount;

      return item;
    });
    return { ...state, total: newTotal, amount: newAmount.toFixed(3) };
  } else if (action.type === "loading") {
    return { ...state, loading: true };
  } else if (action.type === "display") {
    return { ...state, loading: false, cart: action.data };
  }
  return new Error("invalid reducer type");
};

export default reducer;
