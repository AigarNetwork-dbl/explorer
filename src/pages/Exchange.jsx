
import React from 'react';
import {Link} from 'react-router-dom';

const MixHTTPConnector = require('mix-api').MixConnector;

export default class Settings extends React.Component {

    constructor() {

        super();

        this.mixConnector = new MixHTTPConnector();

        this.state = {
            metaMaskExists : (typeof web3 !== 'undefined'),
            nodeUri : localStorage.getItem('mix-node-uri') || 'http://178.57.222.100:8080/'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateURI = this.updateURI.bind(this);

    }

    handleInputChange(event) {

        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        this.setState({
            [name]: value
        });

    }

    updateURI(ev) {

        ev.preventDefault();

        // If the input is blank, the uri is being deleted
        if(!this.state.nodeUri){

            localStorage.removeItem('mix-node-uri');

            this.setState(
                {
                    uriUpdated : true
                }
            );


            setTimeout(
                ()=>{

                    this.setState(
                        { uriUpdated : false }
                    )

                }, 3000
            );

            return;

        }


        // Test the connection
        let connection = null;

        try{

            connection = this.mixConnector.blockchainConnect(this.state.nodeUri);

        }catch(err){

            console.error(err.message);

        }

        if(!connection || !connection.isConnected()){

            this.setState(
                {
                    configBad : true
                }
            );


            setTimeout(
                ()=>{

                    this.setState(
                        { configBad : false }
                    )

                }, 4000
            );

            return;

        }

        // Config good. Store it and show notification.
        localStorage.setItem('mix-node-uri', this.state.nodeUri);

        this.setState(
            {
                connectionGood : true
            }
        );

        setTimeout(
            ()=>{

                this.setState(
                    { connectionGood : false }
                )

            }, 4000
        );


    }

    render() {

        return <div className="settings-page row content-page">
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Exchanges</div>
                    <div className="panel-body">
                        <p>
                            Exchanges that trade AGR:
                        </p>
                        <ul>
                            <li>
                                Exchange BITEXBOOK. Trading pair - <a href="https://bitexbook.com/en/trading/agrbtc" target="_blank">AGR/BTC</a>
                                </li>
                            </ul>


                        </div>
                        </div>
                    </div>
                </div>

        }

    };
