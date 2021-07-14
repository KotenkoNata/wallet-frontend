import React from 'react';

import './AppTitle.scss';

const Title = () => {
  return (
    <>
      <div className="App-name-container">
        <div className="Login-frame">
          <picture className="Login-image">
            <source
              srcset="/static/FrameLoginDesktop*1.png 1x, /static/FrameLogin*2.png 2x"
              media="(min-width: 1280px)"
            />
            <img
              src="/static/FrameDesktopLogin.png"
              alt="Frame Finance App login"
            />
          </picture>
        </div>
        <h1 className="App-name">Finance App</h1>
      </div>
    </>
  );
};

export default Title;
