import React, { Component } from 'react';
import Comments from './Comments';

const articles = ['1', '2', '3'];
class Articles extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="articles">
                Articles
                {articles.map((article) => {

                    return <div>
                        <p>Article</p>
                        <div className='row'>{article}</div>
                        <Comments />
                    </div>;
                })
                }
            </div>
        );
    }
}

export default Articles;