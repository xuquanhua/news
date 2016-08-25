/** * Created by xuqh on 2016/8/18. *//* * action 类型 *///新闻类型export const NEWS_TYPE = 'NEWS_TYPE';//是否加载export const LOADTYPE = 'LOADTYPE'//新闻内容export const NEWS_CONTENT = 'NEWS_CONTENT'/* * 其它的常量 */export const LOAD = {	LOADING: 'LOADING',	HIDE_LOADING: 'HIDE_LOADING'};/* * action 创建函数 */export function newsType(name) {	return { type: NEWS_TYPE, name }}export function loadType(load) {	return { type: LOADTYPE, load }}export function newsContent(content) {	return { type: NEWS_CONTENT, content }}//异步 actionexport function fetchNewsList(newType) {	return dispatch => {		//从缓存里拿数据		var initData = [];		var dataName = newType+'Data'		var lsData = localStorage.getItem(dataName)		if(lsData && JSON.parse(lsData)) {			dispatch({				type: NEWS_CONTENT,				content: JSON.parse(lsData)			})			dispatch(loadType(LOAD.HIDE_LOADING))		}else{			dispatch(loadType(LOAD.LOADING))			return fetch('http://localhost:8080/json/newsList'+newType+'.js')				.then(res => {					return res.json()				})				.then(json => {					//模拟转圈圈1秒钟					setTimeout(()=>{						dispatch({							type: NEWS_CONTENT,							content: json						})						//加入缓存						localStorage.setItem(dataName , JSON.stringify(json))						dispatch(loadType(LOAD.HIDE_LOADING))					}, 500)				})				.catch(error => console.info('request error: ', error))		}	}}