import React from 'react';
import { Japan } from './Japan';

export class Banner extends React.Component {
    constructor(){
        super();
        this.state = {
            isBannerDisplayed: true,
            pageDisplayed: '',
        }

    }

    displayBanner = () => {
        this.setState( { pageDisplayed: '' } )
        this.setState( { isBannerDisplayed: true } )
    }
    displayPage = (pageName) => {
        this.setState( { pageDisplayed: pageName } )
        this.setState( { isBannerDisplayed: false} )
    }
    handleChildClick = (event) => {
        this.displayBanner()
    }
    renderBanners(){
        if (this.state.isBannerDisplayed){
            return  (
                <div>
                    <div class ="banner banner5" id=""></div> 
                    <div onClick={ this.displayPage.bind(this, 'japan') } class ="banner banner4" id="Japan"></div>
                    <div class ="banner banner3" id="Sneakers"></div> 
                    <div class ="banner banner2" id="Sport"></div>
                    <div class ="banner banner1" id ="Travel"></div>
                </div>
                )
            }
        }
        render() {
            return (
                <main>
                { this.renderBanners() }
                { this.state.pageDisplayed === 'japan' ? <Japan goBack= { this.displayBanner } /> : null }
                
            </main>
        )
    }
}