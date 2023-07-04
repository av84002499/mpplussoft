import React, { useCallback, useEffect, useState } from 'react'
import Categories from './Categories';
import Products from 'component/Product/Products';
import serverCategory from 'handler/categories'

const {getCategories} = serverCategory
const Home = () => {
  
  const [category, setCategory] = useState([])
  // const[productId, setProductId] = useState(null)

  const getAllCategries = useCallback(async() => {
    let value = await getCategories()
    console.log("getting value in return: ", value)
    setCategory(value.data)
  }, [])

  useEffect(() => {
    getAllCategries();
  }, [getAllCategries])

  return (
    <>
      <div className="row bg-body-secondary py-4">
        <div className="col-lg-3 col-md-3 ms-auto me-3 p-3 bg-white rounded">
          <Categories categoryList={category} />
        </div>
        <div className="col-lg-8 col-md-8 me-auto p-2">
          <div className="row">
           <Products />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;