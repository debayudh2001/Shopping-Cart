import React from 'react'
import list from '../list'
import Card from './Card'

const Products = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Products


