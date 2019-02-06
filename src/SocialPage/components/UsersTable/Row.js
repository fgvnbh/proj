import React from 'react';
const Row = props => {
    const {name, age, _id, description, photoURL,onItemClick} = props;
    // const onClick=(e) => {
    //     e.preventDefault();
    //     console.log('onItemClick : '+_id);
    //     onItemClick(_id);
    // };
    return (
        <tr>
            <td>
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
                {/*<img src={photoURL} alt="PHOTO"/>*/}
            {/*</td>*/}
            {/*<td>*/}
                {/*<a onClick={onClick}>{name}</a>*/}
            {/*</td>*/}
            {/*<td>*/}
                {/*{description}*/}
            {/*</td>*/}
            {/*<td>*/}
                {/*{age}*/}
            </td>
        </tr>
    );
};

export default Row;
