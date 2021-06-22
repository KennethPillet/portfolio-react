import React from 'react';

export class Sneakers extends React.Component{
    render(){
        return (
            <div onClick={ this.props.goBack }>
                <a href="https://histoire-airmax.netlify.app" target="_blank"rel="noopener noreferrer">Site fais avec Bootstrap lors d'une formation d'initiation au codage</a>
                <img src="img/snkrs/nike-sb-dunk-low-pro-purple-lobster-release-date.jpg" alt=""></img>
            </div>
        )
    }
}