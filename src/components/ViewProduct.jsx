import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios, { Axios } from 'axios'

const ViewProduct = () => {
    const [data,changeData]=useState(
        {
            "products":[]
        }
    )
        const fetchData=()=>{
            axios.get("https://dummyjson.com/products").then(
                (response)=>{
                    console.log(response.data)
                    changeData(response.data)
                }
            ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                           {data.products.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src={value.images} class="card-img-top" alt="..." height="200px"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.id}</h5>
                                            <p class="card-text">{value.title}</p>
                                            <p class="card-text">{value.price}</p>
                                        </div>
                                </div>
                            </div>
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct