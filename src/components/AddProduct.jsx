import React, { useState } from 'react'
import Navbar from './Navbar'

const AddProduct = () => {
    const [data,setData]=useState(
        {
            "id":" ",
            "name":"",
            "description":"",
            "price":"",
            "category":" ",
            "manu":" ",
            "expiri":" "
            
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6">
                            <label htmlFor="" className="form-label">PRODUCT ID</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-12">
                            <label htmlFor="" className="form-label">PRODUCT NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor=" " className="form-label"  >DESCRIPTION </label>
                            <textarea name="description" id="" cols="30" rows="10" className="form-control" value={data.description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-12">
                            <label htmlFor="" className="form-label">PRICE</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-12">
                            <label htmlFor="" className="form-label">CATEGORY</label>
                           <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler} >
                            <option value="ELECTRONIC">ELECTRONIC</option>
                            <option value="BEAUTY">BEAUTY</option>
                            <option value="GROCERY">GROCERY</option>
                           </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-12">
                            <label htmlFor="" className="form-label">MANUFACTURING DATE</label>
                            <input type="date" name="manu" id="" className="form-control" value={data.manu} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-12">
                            <label htmlFor="" className="form-label">EXPIRING DATE</label>
                            <input type="date" name="expiri" id="" className="form-control" value={data.expiri} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-12">
                            <button class="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct