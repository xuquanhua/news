/** * Created by xuqh on 2016/8/11. */import React from 'react';import ReactDOM from 'react-dom';import { Router, Route, hashHistory } from 'react-router';import {NewBox} from '../components/NewBox.js';import Detail from '../components/Detail.js';ReactDOM.render((	<Router history={hashHistory}>		<Route path="/index/:newType" component={NewBox}/>		<Route path="/detail" component={Detail}/>	</Router>), document.getElementById('app'))