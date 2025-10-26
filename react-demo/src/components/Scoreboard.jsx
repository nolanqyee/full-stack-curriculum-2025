import {React, useEffect, useState} from 'react'

const Scoreboard = (props) => {
    const [team1Score, setTeam1Score] = useState(0) // allows u to set team1 score
    const [team2Score, setTeam2Score] = useState(0)
    return (
        <div>
            {props.team1} vs {props.team2}
            <div>
                <button onClick={() => setTeam1Score(team1Score + 1)}>Add 1 to {props.team1}</button>
                <button onClick={() => setTeam1Score(team1Score + 1)}>Add 1 to {props.team2}</button>
            </div>
            <div>
                <p>{props.team1}: {team1Score}</p>
                <p>{props.team2}: {team2Score}</p>
            </div>
        </div>
    )
}

export default Scoreboard