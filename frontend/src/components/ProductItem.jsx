import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,name,image,price}) => {

    const {currency} = useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer border-2 border-gray-500 rounded p-2' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='rounded-2xl hover:scale-110 transition ease-in-out' src={image[0]}/>
        </div>
        <p className='pt-3 pb-1 text-sm font-bold'>{name}</p>
        <p className='text-sm font-medium'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem