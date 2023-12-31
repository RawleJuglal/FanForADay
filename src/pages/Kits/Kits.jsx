import React, {useEffect, useState} from 'react'
import './Kits.css'

const Kits = ()=>{
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <span className={`van-type ${van.type} selected`}>{van.type}</span>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our location options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Kits;