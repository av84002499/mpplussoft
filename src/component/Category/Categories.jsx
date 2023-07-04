import React from 'react'

export default function Categories({categoryList}) {
    return (
        <>
            <h3>Categories</h3><hr />
            <div className="m-2">
                {categoryList.map((category) => {
                    return <div className="p-1">{category.name}</div>
                })}
            </div>
        </>
    )
}
