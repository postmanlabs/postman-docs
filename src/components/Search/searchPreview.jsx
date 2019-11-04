import React from 'react';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';

import './_search.scss';


const SearchBox = ({ currentRefinement, refine }) => (
  <div className="ais-SearchBox">
    <form noValidate action="" role="search" className="ais-SearchBox-form">
      <input
        className="ais-SearchBox-input"
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
  </div>
);

export const CustomSearchBox = connectSearchBox(SearchBox);

// on page load do not display
const Hits = ({ hits }) => (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.length < 1 ? <li>No search results found</li> : ''}
    {hits.map((hit) => (
      <li key={hit.title}>
        <a href={hit.fields.slug}>
          <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
          <p dangerouslySetInnerHTML={{ __html: hit._snippetResult.excerpt.value }} />
        </a>
      </li>

      //  Work on highlighting
      // /////////////////////////////////////////////////
      // <li key={hit.title}>
      //   <a href={hit}>
      //     <Highlight attribute="title" hit={hit} />
      //   </a>
      // </li>
      // ////////////////////////////////////////////////
    ))}
  </ul>
);

export const CustomHits = connectHits(Hits);
