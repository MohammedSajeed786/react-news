import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, publishedAt, author } = props;
  return (
    <>
      <div className="container my-3">
        <div className="card">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://images.indianexpress.com/2022/01/IND-vs-SA-3rd-ODI.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title : ""}</h5>
            <p className="card-text">{description ? description : ""}</p>
            <span className="badge rounded-pill bg-secondary">
              {author ? author : "Unknown"}
            </span>
            <p className="card-text my-1">
              <small className="text-muted">
                {publishedAt
                  ? new Date(publishedAt).toGMTString()
                  : "Time not specified"}
              </small>
            </p>
            <a
              href={newsUrl ? newsUrl : ""}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsItem;
