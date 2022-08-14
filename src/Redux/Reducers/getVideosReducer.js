let initialStore = {
  videos: [],
};

export function fetchDataReducer(prevState = initialStore, action) {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        videos: { ...prevState, videos: action.payload },
      };
    default:
      return prevState;
  }
}
