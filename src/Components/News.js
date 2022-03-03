import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const convert = (r) => {
    return r.charAt(0).toUpperCase() + r.slice(1);
  };
  let apiKey = props.apiKey;
  // document.title = `${this.convert(props.category)} - NewsMonkey`;

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(70);
    //this.setState({ loading: true });
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    setloading(false);
    settotalResults(parsedData.totalResults);

    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${convert(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  // nextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  // prevClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };
  const fetchData = async () => {
    //this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${apiKey}
    &page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    // console.log(this.apiKey);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setloading(false);
    settotalResults(parsedData.totalResults);

    // console.log(this.state.articles);
    //this.updateNews()
  };

  // const { articles } = this.state;
  return (
    <div className="container my-3">
      <div className="text-center my-4">
        <h2 style={{ marginTop: "96px" }}>
          NewsMonkey- Top {convert(props.category)} Headlines
        </h2>
      </div>
      {loading && <Spinner></Spinner>}

      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={totalResults !== articles.length}
        loader={<Spinner></Spinner>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                  ></NewsItem>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
