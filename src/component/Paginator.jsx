import React, { useState } from "react";

const Paginator = (props) => {
  // The Current Page Being Viewed
  const [currentPage, setCurrentPage] = useState(1);

  // Number of Pages pertaining to number of data given
  const numOfPages = Math.ceil(props.data.length / props.dataPerPage);

  // Get Index of Last Post and First Post of That Page
  const LastPost = currentPage * props.dataPerPage;
  const FirstPost = LastPost - props.dataPerPage;

  // Show on Post Within That Index Range
  const newPost = props.data.slice(FirstPost, LastPost);

  // Create An Array Of All Pages
  let pages = [];
  for (let index = 1; index <= numOfPages; index++) {
    pages.push(index);
  }

  const moveBack = () => {
    const newPage = currentPage - 1;
    if (newPage > 0) {
      setCurrentPage(newPage);
    }
  };

  const moveFoward = () => {
    const newPage = currentPage + 1;
    if (newPage <= pages[pages.length - 1]) {
      setCurrentPage(newPage);
    }
  };
  const setPage = (num) => {
    setCurrentPage(num);
  };

  const nav = (
    <props.navBodyTag className={props.navBodyClass}>
      {props.navSymbols ? (
        <props.navItemTag
          className={
            props.navItemClass +
            " " +
            props.backSymbolClass +
            (currentPage === pages[0] ? " " + props.navDisableClass : "")
          }
          onClick={moveBack}
        >
          {props.backSymbol}
        </props.navItemTag>
      ) : null}
      {props.navNumbers
        ? pages.map((page) => (
            // Each Nav Item
            <props.navItemTag
              key={page}
              className={
                props.navItemClass +
                (currentPage === page ? " " + props.navItemClassActive : "")
              }
              onClick={() => {
                setPage(page);
              }}
            >
              {page}
            </props.navItemTag>
          ))
        : null}
      {props.navSymbols ? (
        <props.navItemTag
          className={
            props.navItemClass +
            " " +
            props.fowardSymbolClass +
            (currentPage === pages[pages.length - 1]
              ? " " + props.navDisableClass
              : "")
          }
          onClick={moveFoward}
        >
          {props.fowardSymbol}
        </props.navItemTag>
      ) : null}
    </props.navBodyTag>
  );

  return (
    <>
      {props.both ? nav : null}
      {/* Component Of How All Data Is To Be Displayed With A Data Prop */}
      <props.dataMapComponent posts={newPost} />
      {/* Navigation Body */}
      {nav}
    </>
  );
};

export default Paginator;
