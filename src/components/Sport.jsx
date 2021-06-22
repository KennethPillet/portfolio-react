import React from 'react';

export class Sport extends React.Component{
    render(){
        return (
            <div onClick={ this.props.goBack }>
                <img src="img/sport/Rugby.JPG" alt=""></img>
            </div>
        )
    }
}