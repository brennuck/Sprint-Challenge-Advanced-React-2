import React from 'react';

const Players = props => {
    console.log("PROPS", props)
    return (
        <div>
            {props.players.map(player => {
                return (
                    <div>
                        <h1> {player.name} </h1>
                        <h2> {player.country} </h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Players;