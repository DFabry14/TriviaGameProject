import React from 'react';

const ResultsPage = props => (
    <div className="App container">
            <thread>
                <tr>
                    <th> High Score:{props.playerScore}</th>
                </tr>
            </thread>
    </div>
);


export default ResultsPage;