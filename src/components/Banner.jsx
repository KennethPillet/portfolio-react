import React from 'react';
import { Dev } from './Dev';
import { Japan } from './Japan';
import { Sneakers } from './Sneakers';
import { Sport } from './Sport';
import { Travel } from './Travel';

export class Banner extends React.Component {
    constructor(){
        super();
        this.state = {
            isBannerDisplayed: true,
            pageDisplayed: '',
        }
    }

    displayBanner = () => {
        this.setState( { 
            isBannerDisplayed: true,
            pageDisplayed: '' 
        } )
    }
    displayPage = (pageName) => {
        this.setState( { 
            isBannerDisplayed: false,
            pageDisplayed: pageName
        } )
    }
    
    renderBanners(){
        if (this.state.isBannerDisplayed){
            return  (
                <div>
                    <div onClick={ this.displayPage.bind(this, 'japan') } className ="banner banner4" id="japan"></div>
                    <div onClick={ this.displayPage.bind(this, 'sneaker') } className ="banner banner3" id="sneakers"></div> 
                    <div onClick={ this.displayPage.bind(this, 'sport') } className ="banner banner2" id="sport"></div>
                    <div onClick={ this.displayPage.bind(this, 'travel') } className ="banner banner1" id ="travel"></div>
                    <div onClick={ this.displayPage.bind(this, 'dev') } className ="banner banner5" id="dev"></div> 
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                { this.renderBanners() }
                { this.state.pageDisplayed === 'japan' ? <Japan goBack= { this.displayBanner } /> : null }
                { this.state.pageDisplayed === 'sneaker' ? <Sneakers goBack= { this.displayBanner } /> : null }
                { this.state.pageDisplayed === 'sport' ? <Sport goBack= { this.displayBanner } /> : null }
                { this.state.pageDisplayed === 'travel' ? <Travel goBack= { this.displayBanner } /> : null }
                { this.state.pageDisplayed === 'dev' ? <Dev goBack= { this.displayBanner } /> : null }
            </div>
        )
    }
}