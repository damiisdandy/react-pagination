import React from "react";
import Paginator from "./component/Paginator";
import Posts from "./component/Posts";
import "./App.css";

const App = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="app">
      <Paginator
        data={posts}
        dataPerPage={3}
        dataMapComponent={Posts}
        navBodyTag={"div"}
        navBodyClass={"navigation"}
        navItemTag={"div"}
        navItemClass={"nav"}
        navItemClassActive={"active"}
        backSymbol={"back"}
        fowardSymbol={"front"}
        backSymbolClass={"back"}
        fowardSymbolClass={"front"}
        navDisableClass={"disabled"}
        both={false}
        navSymbols={true}
        navNumbers={true}
      />
    </div>
  );
};

export default App;
