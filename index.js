import React from 'react';
import ReactDom from 'react-dom';

/* 把app.js页面中的内容挂载到页面上 ,JSX语法 */
import Todolist from './Todolist';

ReactDom.render(<Todolist />,document.getElementById('root'));