/**
 * Created by xuqh on 2016/7/19.
 */
import React from 'react';
import List from './List.js';
import Signal from 'signals'
let mySignal = new Signal();
let mySignalShow = new Signal();
class ListBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []};
		this.boxSing = this.boxSing.bind(this);
		this.doRefresh = this.doRefresh.bind(this);
    }
	boxSing(){
		console.log('ListBox sing')
	}
	doRefresh(newType){
		var _this = this;
		var initData = [];
		var newType = newType;
		switch(newType){
			case 'recommend':{
				initData = [
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/2.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"305"}
				]
				break;
			}
			case 'shenzhen':{
				initData = [
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/3.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
				]
				break;
			}
			case 'tianxia':{
				initData = [
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/4.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
				]
				break;
			}
			default:{
				initData = [
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
					{"imageSrc": "../img/5.jpg", "introduce": "孩子暑假安全5大隐患如何预防？", "from": "育儿百科", "count":"304"},
				]
			}
		}
		var toData = newType+'Data'
		var lsData = localStorage.getItem(toData)
		if(lsData && JSON.parse(lsData)) {
			this.setState({data: JSON.parse(lsData).initData})
			mySignal.dispatch();
		}else{
			//显示loading
			mySignalShow.dispatch()
			setTimeout(()=> {
				_this.setState({data: initData})
				var recommendData = {}
				recommendData.initData = initData;
				localStorage.setItem(toData , JSON.stringify(recommendData))
				mySignal.dispatch();
			}, 1000)
		}
	}
    componentWillMount(){
		console.log(this.props)
		//this.doRefresh(this.props.myparams.newType)
    }
    render() {
        return (
            <List className="list" datas={this.state.data} boxSing={this.boxSing}></List>
        )
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
	componentWillReceiveProps(nextProps){
		//nextProps 是新的 props
		this.doRefresh(nextProps.myparams.newType)
		//多点一下才有反应， this.props是上次的 props
		//this.doRefresh(this.props.myparams.newType)
	}
	shouldComponentUpdate(nextProps){
		//nextProps 是新的 props
		//bug2 首次加载bug
		//return nextProps.myparams.newType !== this.props.myparams.newType;
		return true;
	}

}
exports.ListBox = ListBox;
exports.mySignal = mySignal;
exports.mySignalShow = mySignalShow;


