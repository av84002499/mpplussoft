import React, { useCallback, useEffect, useState } from 'react'
import Categories from './Categories';
import Products from 'component/Product/Products';
import serverCategory from 'handler/categories'
import serverProduct from 'handler/product';

const { getCategories } = serverCategory
const { getAllProduct } = serverProduct
let GlobalProduct = 'not working';

const Home = () => {

  const [category, setCategory] = useState([])
  const [currentProducts, setCurrentProduct] = useState([1, 2])

  const getAllCategries = useCallback(async () => {
    let value = await getCategories()
    setCategory(value.data);
  }, [])

  const getAllProducts = async () => {
    let productValue = await getAllProduct();
    GlobalProduct = productValue.data;
    setCurrentProduct(productValue.data);
  }

  const getProductRelCategory = (categroy_id) => {
    let products = GlobalProduct.filter((product) => {
      return product.category._id === categroy_id;
    })
    setCurrentProduct(products);
  }


  useEffect(() => {
    getAllCategries();
    getAllProducts();
  }, [getAllCategries])

  return (
    <>
      <div className="row bg-body-secondary py-4">
        <div className="col-lg-3 col-md-3 ms-auto me-3 p-3 bg-white rounded">
          <Categories categoryList={category} products={getProductRelCategory} />
        </div>
        <div className="col-lg-8 col-md-8 me-auto p-2">
          <div className="row">
            <Products productlist={currentProducts} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;