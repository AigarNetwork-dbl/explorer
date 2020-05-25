
import React from 'react';
import {Link} from 'react-router-dom';

const MixHTTPConnector = require('mix-api').MixConnector;

export default class Exchange extends React.Component {

    render() {

        return <div className="exchange-page row content-page">
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
