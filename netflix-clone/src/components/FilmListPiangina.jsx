import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class FilmListPercy extends React.Component {
  state = {
    films: [],
  };
  componentDidMount = () => {
    this.HarryPotter();
  };

  HarryPotter = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a452cd0&s=harry%20potter");
      const data = await response.json();
      const harryPotter = data.Search;
      console.log(data.Search);
      this.setState({ films: harryPotter });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container-fluid px-4 mx-3">
        <h4 className="d-flex justify-content-start text-secondary mt-5">Trending Now</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 py-4 flex-nowrap no-gutters"
          style={{ overflow: "hidden" }}
        >
          {this.state.films.map((film) => {
            return (
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid d-flex "
                  style={{ height: "13em", width: "13em" }}
                  src={film.Poster}
                  alt="filmImg"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FilmListPercy;
