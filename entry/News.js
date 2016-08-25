/**
 * Created by xuqh on 2016/7/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {ListBox, mySignal} from '../components/ListBox.js';
import Loading from '../components/Loading.js';
ReactDOM.render(
    <div>
        <Loading></Loading>
        <ListBox ></ListBox>
    </div>,
    document.getElementById('app')
);
