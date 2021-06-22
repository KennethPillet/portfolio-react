import React from 'react';

export class Travel extends React.Component{
    render(){
        return (
            <div onClick={ this.props.goBack }>
                <img src="img/voyage/horloge astronomique prague.JPG" alt=""></img>
            </div>
        )
    }
}