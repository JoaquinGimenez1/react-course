import React from "react";
import unsplash from "./api/unsplash";
import "./App.css";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmint = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term
        }
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmint} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
