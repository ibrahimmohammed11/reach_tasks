export function fetchDataSuccess(videos) {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: videos,
  };
}

export function setSearch(value) {
  return (dispatch) => dispatch({ type: "SETSEARCH", payload: value });
}
