import React from 'react';
import './Content.css';

class Content extends React.Component {
    render() {
        return (
            <div className="contentStyle">
                {this.props.children}
            </div>
        );
    }
}

export default Content;