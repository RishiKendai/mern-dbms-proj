import React from 'react'
import '../Styles/loading.css';

function Loading() {
  return (
    <div className="loading-div">
      <h3>Page Loading</h3>
      <p>Loading content, please wait...</p>
      <div class="lds-dual-ring"></div>
    </div>
  );
}

export default Loading