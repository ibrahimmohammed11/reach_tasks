import React from "react";

const ChannelCard = ({ channel }) => {
  return (
    <>
      {channel && (
        <a
          className="channelCard"
          href={`https://www.youtube.com${channel?.canonicalBaseUrl}`}
          target="_blank"
        >
          <div>
            <img src={channel?.avatar[1]?.url} />
          </div>
          <div>
            <h3>{channel?.title}</h3>
            <div className="subscribe">
              {channel?.stats?.subscribersText && (
                <>
                  <p>{channel?.stats?.subscribersText}</p>
                  <span>•</span>
                </>
              )}
              <p>{channel?.stats?.videos}</p>
            </div>
            <p className="desc">{channel?.descriptionSnippet}</p>
          </div>
        </a>
      )}
    </>
  );
};

export default ChannelCard;
