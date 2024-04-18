import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Button from '../components/Button'
import './Menu.css'

const Menu = () => {
    const [menu, setMenu] = useState([])
        const getMenu = () => {
        axios
        .get("https://api.mudoapi.tech/menus")
        .then((res) => {
            setMenu(res.data.data.Data)
            console.log(res.data.data.Data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMenu()
    }, [])

  return (
    <div>
      <Navbar />
      <div class="container"> 
        <h1>Menu</h1>
            <br></br>
            <div class="menu-items"> 
            {menu.map((item) => (
                <div class="menu-item">
                    <h3>{item.name}</h3>
                    <img src={item.imageUrl} alt="" class="menu-image" /> 
                    <p>{item.priceFormatted}</p>
                    <Button id={item.id} class="button"/>
                    <br></br>
                    <hr></hr>
                </div>
            ))
            }
            </div>
      </div>
      
    </div>
  )
}

export default Menu