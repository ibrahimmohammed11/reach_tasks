let initialStore = {
  search: "coldplay",
};
// javaScript
export function setSearchReducer(prevState = initialStore, action) {
  switch (action.type) {
    case "SETSEARCH":
      return { ...prevState, search: action.payload };
    default:
      return prevState;
  }
}
