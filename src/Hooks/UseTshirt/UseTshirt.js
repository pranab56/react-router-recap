import { useEffect, useState } from "react"

const UseTshirt=()=>{
    const [tshirts,settshirt]=useState([])
    useEffect(()=>{
        fetch('t-shirt.json')
        .then(res=>res.json())
        .then(data=>settshirt(data));
    },[])
    return [tshirts,settshirt]
}
export default UseTshirt;