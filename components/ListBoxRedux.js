/**
 * Created by xuqh on 2016/7/19.
 */
import React from 'react';
import List from './List.js';
import { loadType , LOAD } from '../actions/news'
import { store  } from '../store/news'
import { fetchNewsList } from '../actions/news'

class ListBoxRedux extends React.Component {
    constructor(props){
        super(props);
		this.doRefresh = this.doRefresh.bind(this);
    }
	doRefresh(newsType){
		store.dispatch(fetchNewsList(newsType))
	}
    componentWillMount(){
		console.log('componentWillMount')
		console.log(this.props)
		this.doRefresh(this.props.newsType)
    }
    render() {
        return (
            <List className="list" datas={this.props.lists} newsType={this.props.newsType} ></List>
        )
    }
    componentDidMount(){
        //console.log('componentDidMount')
    }
	componentWillReceiveProps(nextProps){
		//nextProps 是新的 props
		// console.log('componentWillReceiveProps')
		// console.log(nextProps.newsType)
		//this.doRefresh(nextProps.newsType)
		//多点一下才有反应， this.props是上次的 props
		//this.doRefresh(this.props.myparams.newType)
	}
	shouldComponentUpdate(nextProps){
		//nextProps 是新的 props
		//bug2 首次加载bug
		console.log('nextProps.newsType')
		console.log(nextProps.newsType)
		console.log(this.props.newsType)
		//return nextProps.newsType !== this.props.newsType;
		//return true;
		if(nextProps.newsType !== this.props.newsType) this.doRefresh(nextProps.newsType)
		return true;
	}

}
exports.ListBoxRedux = ListBoxRedux;


