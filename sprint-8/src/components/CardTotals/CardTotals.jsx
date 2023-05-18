import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './CardTotals.css';
import img1 from '../../assets/images/laptop-code-solid.svg'
import img2 from '../../assets/images/thumbs-up-regular.svg'
import img3 from '../../assets/images/thumbs-down-regular.svg'

export default function CardTotals() {

    const [state, setState] = useState({});

    const apiInfo = async () => {
        const json = await axios.get('http://localhost:3001/api/products')
        setState(json.data);
    };

    useEffect(() => {
        apiInfo();
    }, []);

    //console.log(state);

    return (
        <div>
            <div className='contentRow'>
                <ul>
                    <li key = "1" className='row-movies'>
                        <div className='titu-logo'>
                            <h2>Total Productos </h2>
                            <p>{state.count}</p>
                        </div>
                        <img className='logo' src={img1} alt="" />
                    </li>
                    <li key = "2" className='row-movies'>
                        <div className='titu-logo'>
                            <h2>Total Destacados </h2>
                            <p>{state.countByCategory?.destacado}</p>
                        </div>
                        <img className='logo' src={img2} alt="" />
                    </li>
                    <li key = "3" className='row-movies'>
                        <div className='titu-logo'>
                            <h2>Total No Destacados </h2>
                            <p>{state.countByCategory?.noDestacado}</p>
                        </div>
                        <img className='logo' src={img3}alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
