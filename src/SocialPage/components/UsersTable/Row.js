import React from 'react';
import "semantic-ui-css/semantic.min.css";

const Row = props => {
    const {name, age, _id, description, photoURL} = props;
    return (
                <div className="ui card">
                    <div className="image">
                        <img src={photoURL}/>
                    </div>
                    <div className="content">
                        <a className="header">{name}</a>
                        <div className="meta">
                            <span className="date">{age}</span>
                        </div>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                            <i className="user icon"></i>
                            22 Friends
                        </a>
                    </div>
                </div>

    );
};

export default Row;
