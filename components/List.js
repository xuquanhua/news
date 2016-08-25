/**
 * Created by xuqh on 2016/7/19.
 */
/**
 * Created by xuqh on 2016/7/18.
 */
import React from 'react';
import Single from './Single.js';
class List extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
		var _this = this;
		console.log('newsType')
		console.log(this.props.newsType)
		var newsType = this.props.newsType;
        var listNodes = this.props.datas.map(function(item, index) {
            return (
                <Single className="single" news={item} newsType={newsType}></Single>
            )
        })
        return(
            <div className="list" onClick={_this.sing}>
                {listNodes}
            </div>
        )
    }
}
module.exports = List;

