
import React from 'react';
import {Link} from 'react-router-dom';

const MixHTTPConnector = require('mix-api').MixConnector;

export default class Exchange extends React.Component {

    render() {

        return <div className="exchange-page row content-page">
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Exchanges that trade AGR:</div>
                    <div className="panel-body">
                        <p>
                            Exchange BITEXBOOK - <a href="https://bitexbook.com/" target="_blank">https://bitexbook.com/</a>
                        </p>
                        <ul>
                            <li>
                                Trading pair - <a href="https://bitexbook.com/en/trading/agrbtc" target="_blank">AGR/BTC</a>
                                </li>
                            </ul>


                        </div>
                        </div>
                    </div>
                </div>

        }

    };
