import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import ScrollIndicator from "scroll-indicator";
import SearchPage from "./views/searchPage";
import { fetchDataSuccess } from "./Redux/ActionCreators/actions";
import Request from "./Request/Request";
import { connect } from "react-redux";
import { Loading } from "./components/Loading/Loading";
import {
  Routes,
  Route,
  Navigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import Watch from "./views/watch";

function App({ search, fetchDataSuccess }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSubmitForm = () => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_BASE_URL,
      params: { q: search },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };
    setLoading(true);

    Request.sendRequest(options)
      .then((res) => {
        if (res?.status == 200) {
          fetchDataSuccess(res.data.contents);
          setLoading(false);
        }
      })
      .catch((er) => setError(er));
  };
  useEffect(() => {
    handleSubmitForm();
  }, []);
  useEffect(() => {
    if (!location.pathname.includes("/watch")) {
      setSearchParams({ query: search });
    }
  }, [location.pathname]);
  return (
    <>
      <div className="layout">
        {/* <ScrollIndicator
          bgColor={window.innerWidth > 700 ? "#ff0000" : "#ffffff"}
          height="2px"
        /> */}
        <Navbar handleSubmitForm={handleSubmitForm} />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route
              path="/search"
              element={
                !loading ? (
                  <SearchPage loading={loading} error={error} />
                ) : (
                  <Loading />
                )
              }
            />
            <Route path="/watch/:id" element={<Watch />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.setSearchReducer.search,
  };
};
export default connect(mapStateToProps, { fetchDataSuccess })(App);
