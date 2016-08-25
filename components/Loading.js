/**
 * Created by xuqh on 2016/7/19.
 */
import React from 'react';
import {mySignal, mySignalShow} from './ListBox.js';
class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {isShow: true};
        //坑 绑定this
        this.hideLoading = this.hideLoading.bind(this);
        this.showLoading = this.showLoading.bind(this);
    }
    hideLoading(){
        console.log('loading hide')
        this.setState({isShow:false})
    }
	showLoading(){
		this.setState({isShow:true})
	}
    componentWillMount(){
		mySignal.add(this.hideLoading);
		mySignalShow.add(this.showLoading);
    }
    render() {
        var _height = window.screen.height;
        var loadingStyle = {
            height: _height
        };
        if(this.state.isShow) {
            return (
                <div className="loading" style={loadingStyle}></div>
            )
        }else{
            return false;
        }
    }
}
module.exports = Loading;
