import { Japan } from './Japan'
import { Sneakers } from './Sneakers'

export function Main(props){
    if (props.fill === 'Japan') {
        return (
            <Japan />
        )
    } else if (props.fill === 'Sneakers') {
        return (
            <Sneakers />
        )
    } else {
        return (
            <main>
        
                <a href="Dev_ComeUp.html"><div class ="banner banner5"></div></a>
                <a href="Japan.html"><div class ="banner banner4"></div></a>
                <a href="Sport.html"><div class ="banner banner2"></div></a>
                <a href="Snkrs.html"><div class ="banner banner3"></div></a>
                <a href="Travel.html"><div class ="banner banner1"></div></a>

            </main>
        )
    }
}