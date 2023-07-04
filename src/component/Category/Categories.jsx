import React from 'react'

export default function Categories({categoryList, products}) {
    return (
        <>
            <h3>Categories</h3><hr />
            <div className="m-2">
                {categoryList.map((category) => {
                    return <a key={category._id} className="btn text-start border-0 w-100 bg-transparent btn-active" onClick={() => products(category._id)}>{category.name}</a>
                })}
            </div>
        </>
    )
}
