// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';

const link = React.cloneElement('a', { href: 'reactjs.org' }, 'Ссылка');

console.log(link);
