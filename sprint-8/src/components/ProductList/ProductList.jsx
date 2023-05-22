import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProducList.css'

export default function ProductList() {

    const [state, setState] = useState({});

    const apiInfo = async () => {
        const json = await axios.get('http://localhost:3001/api/products')
        setState(json.data);
    };

    useEffect(() => {
        apiInfo();
    }, []);

    console.log(state.products)

    return (
        <div className='product-list'>
            <h2>Listado De Productos</h2>
            {
                state && state.products?.map((e,i) => {
                    return(
                        <div key={i}>
                            <ul>
                                <li key={i}>
                                    Producto {i}: {e.Referencia}
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
