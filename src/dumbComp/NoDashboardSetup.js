import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';

const NoDashboardSetup = ({uid, firstSetup}) => (
  <div className="no_dashboard">
    { firstSetup &&
      <div>
        <h4>Awesome! you have created your profle.</h4>
        <p>It's time to share put it on your site</p>
      </div>
    }

    <div className="setup_wiz">
      <h3>
        <span>1</span> Add script tag in on you website in
      </h3>
      <p>
        Copy the following code and paste to the head
      </p>
      <SyntaxHighlighter language="html">
        {`<script src="https://profileme.xyz/client/promime.min.js" async ></script>`}
      </SyntaxHighlighter>
      <h3>
        <span>2</span> Add elment where you want to show your profile
      </h3>
      <p>
        Copy the following code and in the body of the page
      </p>
      <SyntaxHighlighter language="html">
        {`<div id="pf_root" data-user="${uid}"></div>`}
      </SyntaxHighlighter>
      <h3>
        <span>3</span> Deploy you changes changes and refresh the dashboard
      </h3>
      <p>
        Make sure you deploy your code changes and <a onClick={() => { window.location.reload()}}>refresh</a> your dashboard.
      </p>
    </div>
  </div>
)

export default NoDashboardSetup
