import React from "react";
import { TbDotsVertical } from "react-icons/tb";
import millify from "millify";
import convert from "convert-seconds";
import { Link } from "react-router-dom";

const VideoHomeCard = ({ video }) => {
  return (
    <>
      {video && (
        <div className="cardSize">
          <Link to={`/watch/${video?.videoId}`}>
            <div className="cardFlex">
              <div className="clip">
                {video?.thumbnails[0]?.url && (
                  <section className="previewContainer">
                    <img src={video?.thumbnails[0]?.url} />
                    {video == undefined && (
                      <span className="timeStatus">
                        {convert(video?.lengthSeconds).hours}:
                        {convert(video?.lengthSeconds).minutes < 10
                          ? "0" + convert(video?.lengthSeconds).minutes
                          : convert(video?.lengthSeconds).minutes}
                        :
                        {convert(video?.lengthSeconds).seconds < 10
                          ? "0" + convert(video?.lengthSeconds).seconds
                          : convert(video?.lengthSeconds).seconds}
                      </span>
                    )}
                  </section>
                )}
              </div>
              <section className="contentContainer">
                <h3>{video?.title}</h3>
                {/* <p className="channelName">Rihanna</p> */}
                <div className="viewData">
                  {video?.stats?.views && (
                    <>
                      <p>{millify(video?.stats?.views)} views</p>
                      <span>•</span>
                    </>
                  )}
                  <p>{video?.publishedTimeText}</p>
                </div>
                <p className="desc">{video?.descriptionSnippet}</p>
                {video?.badges.length > 0 &&
                  video?.badges.map((badge, key) => {
                    return (
                      <p key={key} className="badge">
                        {badge}
                      </p>
                    );
                  })}
                {video && (
                  <button className="moreButton">
                    <TbDotsVertical />
                  </button>
                )}
              </section>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default VideoHomeCard;
