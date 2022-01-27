import "./index.css";
import SearchBar from "../SearchBar";

function TopRibbon() {
  return (
    <div className="container">
      <div className="whitebar">
        <SearchBar />
      </div>
      <div className="graybar"></div>
    </div>
  );
}

export default TopRibbon;
