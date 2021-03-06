import React, {Component} from 'react'

import './Track.css'

let isRemoval = false

export class Track extends Component {
    constructor(props){
        super(props)

    }

    renderAction = () => {
        return isRemoval ? <button className="Track-action">-</button> : <button className="Track-action">+</button>
    }

    addTrack = () =>{
        this.props.onAdd(this.props.track)
    }

    render(){
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button 
                    className="Track-action"
                    onClick={this.addTrack}
                >
                {this.renderAction()}
                </button>
            </div>
        )
    }
}