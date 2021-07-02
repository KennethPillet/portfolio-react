import React from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';

export class Travel extends React.Component{
    render(){
        return (
            <div>
                <BsArrow90DegLeft id="arrowBack" onClick={ this.props.goBack } />
                <img src="img/voyage/horloge astronomique prague.JPG" alt=""></img>
            </div>
        )
    }
}