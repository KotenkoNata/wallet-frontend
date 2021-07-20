import React from 'react';

import styles from './AppTitle.module.scss';

const AppTitle = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.LoginFrame}>
          <picture className={styles.LoginImage}>
            <source
              srcset="/static/FrameLoginDesktop-1.png 1x, /static/FrameLogin-2.png 2x"
              media="(min-width: 1280px)"
            />
            <source
              srcset="/static/LoginFormBGTablet.png 1x, /static/LoginFormBGTablet-2.png 2x"
              media="(min-width: 768px)"
            />
            <img
              src="/static/FrameDesktopLogin.png"
              alt="Frame Finance App login"
            />
          </picture>
        </div>
        <div className={styles.textFrame}>
          <h1 className={styles.AppName}>Finance App</h1>
        </div>
      </div>
    </>
  );
};

export default AppTitle;
