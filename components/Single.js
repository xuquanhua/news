/**
 * Created by xuqh on 2016/7/18.
 */
import React from 'react';
import { Link } from 'react-router'
class Single extends React.Component {
    constructor(props){
		super(props);
    }
    render() {
		var newsType = this.props.newsType;
		var toLink = "/detail/10086/"+newsType
        return(
            <div className="single">
                <img src={this.props.news.imageSrc}/>
				<Link to={toLink} ><p>{this.props.news.introduce}</p></Link>
                <div className="from">
                    <span>{this.props.news.from}</span>
                    <em>阅读<i>{this.props.news.count}</i></em>
                </div>
            </div>
        )
    }
}
module.exports = Single;
