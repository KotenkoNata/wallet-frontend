import React from 'react';

import styles from './AppTitle.module.scss';

const AppTitle = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.LoginFrame}>
          <picture className={styles.LoginImage}>
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
        <h1 className={styles.AppName}>Finance App</h1>
      </div>
    </>
  );
};

export default AppTitle;
