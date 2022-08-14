import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Request from "../../Request/Request";
import { useSearchParams, useParams } from "react-router-dom";
import millify from "millify";
import { BiLike } from "react-icons/bi";
import { Loading } from "../../components/Loading/Loading";

const Watch = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [readMore, setReadMore] = useState(false);

  let { id } = useParams();

  const fetchvideoData = () => {
    const options = {
      method: "GET",
      url: "https://youtube138.p.rapidapi.com/video/details/",
      params: { id: id },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    Request.sendRequest(options)
      .then((res) => {
        if (res?.status == 200) {
          setDetails(res.data);
          setLoading(false);
        }
      })
      .catch((er) => setError(er));
  };
  useEffect(() => {
    fetchvideoData();

    const param = searchParams.get("query");
    if (param) {
      searchParams.delete("query");
      setSearchParams(searchParams);
    }
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <div className="watchpage">
        <ReactPlayer
          className="react-player"
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        <div className="videoDetails">
          <div className="keyWords">
            {details?.keywords?.slice(0, 3).map((keyword, key) => {
              return <span key={key}>{`#${keyword} `}</span>;
            })}
          </div>
          <h3>{details?.title}</h3>
          <div className="views_date">
            <span>{millify(details?.stats?.views)} views</span>
            <span>{details?.publishedDate}</span>
            <span>
              <BiLike />
              {millify(details?.stats?.likes)}
            </span>
          </div>
          <p className="description">
            {readMore
              ? details?.description
              : `${details?.description.slice(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              &nbsp;{readMore ? "less" : "more"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Watch;
