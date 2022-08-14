import React, { useRef, useState } from "react";
import desktopLogo from "../../images/youtube-desk.png";
import mobLogo from "../../images/395128.png";
import { connect } from "react-redux";

import { Link, useSearchParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { setSearch } from "../../Redux/ActionCreators/actions";

const Navbar = ({ search, setSearch, handleSubmitForm }) => {
  const [show, setShow] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const formRef = useRef();

  return (
    <nav className="desktopNav">
      <div className="navContainer">
        <div className="navFlex">
          <Link to="/">
            {window.innerWidth > 700 ? (
              <img
                src={desktopLogo}
                alt="desktopLogo"
                className="desktopLogo"
              />
            ) : (
              <img src={mobLogo} alt="mobLogo" className="mobLogo" />
            )}
          </Link>
          {!show && <p className="searchText">{search}</p>}
          {window.innerWidth > 700 ? (
            <form
              className="searchBar"
              onSubmit={(e) => {
                e.preventDefault();
                setSearchParams({ query: search });
                handleSubmitForm();
              }}
            >
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>
                <AiOutlineSearch onClick={() => setShow(!show)} />
              </button>
            </form>
          ) : (
            <div className="mobSearchBar">
              {show && (
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchParams({ query: search });
                    handleSubmitForm();
                  }}
                  className="mobForm"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mobInput"
                  />
                </form>
              )}
              <AiOutlineSearch
                onClick={() => setShow(!show)}
                className="mobIcon"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.setSearchReducer.search,
  };
};
export default connect(mapStateToProps, { setSearch })(Navbar);
