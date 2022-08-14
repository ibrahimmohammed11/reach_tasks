import React, { useState } from "react";
import { connect } from "react-redux";
import ChannelCard from "../../components/channelCard";
import SecondHeader from "../../components/SecondHeader";
import VideoHomeCard from "../../components/VideoHomeCard/VideoHomeCard";

const SearchPage = ({ videos }) => {
  const [visible, setVisible] = useState(10);
  const loadMore = () => {
    setVisible(visible + 10);
  };
  return (
    <>
      <SecondHeader videos={videos} />
      {videos !== undefined &&
        videos?.slice(0, visible).map((video, key) => {
          return (
            <div key={key}>
              <ChannelCard channel={video?.channel} />
              <VideoHomeCard video={video?.video} />
            </div>
          );
        })}
      <div className="text-center">
        {visible < videos.length && (
          <button onClick={loadMore} className="loadBtn">
            See more
          </button>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.fetchDataReducer.videos.videos,
  };
};
export default connect(mapStateToProps)(SearchPage);
