import React from 'react';

export class Japan extends React.Component{
    render(){
        return (
            <div onClick={ this.props.goBack }>
                <div className="title">
                    <h1>Souvenir du Japon</h1>
                    <img src="" className="main-photo" alt="" />
                </div>
                <div className="container">
                    <img src="img/voyage/senad-palic-HkpXmncGReQ-unsplash.jpg" className="inline-photo show-on-scroll" alt="manga display" />
                    <div className="descr">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, praesentium! Est nostrum hic magnam modi repellendus pariatur numquam eius incidunt quia eligendi molestias, expedita quam cupiditate fugiat dolorum. Reiciendis, blanditiis!</p>
                    </div>
                    <img src="img/voyage/mandarakeNakanoBroadway.jpeg" className="inline-photo show-on-scroll"alt="" />
                    <div className="descr">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, praesentium! Est nostrum hic magnam modi repellendus pariatur numquam eius incidunt quia eligendi molestias, expedita quam cupiditate fugiat dolorum. Reiciendis, blanditiis!</p>
                    </div>
                    <img src="img/voyage/asakusa.jpeg" className="inline-photo show-on-scroll"alt="" />
                    <div className="descr">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, praesentium! Est nostrum hic magnam modi repellendus pariatur numquam eius incidunt quia eligendi molestias, expedita quam cupiditate fugiat dolorum. Reiciendis, blanditiis!</p>
                    </div>
                    <img src="img/voyage/Fushimi-inari-Bro&I.jpg" className="inline-photo show-on-scroll"alt="" />
                    <div className="descr">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, praesentium! Est nostrum hic magnam modi repellendus pariatur numquam eius incidunt quia eligendi molestias, expedita quam cupiditate fugiat dolorum. Reiciendis, blanditiis!</p>
                    </div>
                    <img src="img/voyage/kinkakuji.jpeg" className="inline-photo show-on-scroll"alt="" />
                    <div className="descr">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, praesentium! Est nostrum hic magnam modi repellendus pariatur numquam eius incidunt quia eligendi molestias, expedita quam cupiditate fugiat dolorum. Reiciendis, blanditiis!</p>
                    </div>
                </div>
            </div>
        );
    }
}