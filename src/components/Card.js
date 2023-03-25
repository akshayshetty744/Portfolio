import { ReactComponent as GitHub } from '../Assets/github.svg'
import { ReactComponent as Hosted } from '../Assets/arrow-up-right-from-square-solid.svg'
import { ReactComponent as Like } from '../Assets/thumbs-up-regular.svg'
import { ReactComponent as Deslike } from '../Assets/thumbs-down-regular.svg'
import React, { useState } from 'react';
export default function Card(props) {
    const [count, setCount] = useState(0);
    const [deslike, setDeslike] = useState(0);
    function increment() {
      setCount(count + 1);
    }
    function decrement() {
        setDeslike(deslike + 1);
    }
    return (
        <div className="card">
            <img className="image" src={props.Image} />
              <a className="titleLink"href={props.Hosted} target='_blank'><div className='title'>{props.title }</div></a>
            <div className='linkIcon'>
            <h1 className='id'>{props.id}</h1>
                <a className='icons' href={props.GitHub} target='_blank'>GitHub <GitHub className='svgGit' /></a>
                <a className='icons' href={props.Hosted} target='_blank'>Link <Hosted className='svgGit'/></a>
            </div>
            <div className='count'>
                <button className='liked' onClick={increment}><Like className="like"/>{ count}Like</button> 
                <button className='desliked' onClick={decrement}><Deslike className="deslike" />{ deslike}deslike</button>
            </div>
        </div>
    )
}