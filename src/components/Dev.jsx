import React from 'react';

export class Dev extends React.Component{
    render(){
        return (
            <div onClick={ this.props.goBack }>
                <img src="img/logo-ITAkademy.jpg" alt="ItAkademy"></img>
            </div>
        )
    }
}