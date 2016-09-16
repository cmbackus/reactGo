import React, {PropTypes} from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import styles from 'css/components/sidebar';

const cx = classNames.bind(styles);

const Sidebar=({topics, user})=>{
	var authenticated=user.authenticated;
	var rankedTopics=topics.slice(0);
	var rankedTopics=rankedTopics.sort(function(a, b) {
  		return b.count - a.count;
	});
	rankedTopics=rankedTopics.slice(0,10);
 	const rankedListItems = rankedTopics.map((topic, key) => {
    return (
    	//<li>List Item</li>
    <li className={cx('item')} key={key} type="1">
      <span className={cx('topic')}>{topic.text}</span>
      <span className={cx('count')}>{topic.count}</span>
    </li>
    );
  });
	if(authenticated){
	return(
		    <div className={cx('sidebar')}>
      			<h3 className={cx('header')}>Leaderboard</h3>
      			<ol className={cx('list')}>
      				{rankedListItems}
      			</ol>
    		</div>
		);
	}
	return(
		    <div className={cx('sidebar')}>
      			<h3 className={cx('header')}>Leaderboard</h3>
      			<ol className={cx('list')}>
      				<Link to="/login" >Log in to view the leaderboard</Link>
      			</ol>
    		</div>
		
		);

}
export default Sidebar;