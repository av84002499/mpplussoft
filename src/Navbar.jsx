import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="!">Mplussoft</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="categories">Categories </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Categoriesadd">Categoriesadd </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='Product' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="View All Products">View All Products</Link></li>
                                <li><Link className="dropdown-item" to="Get a single products">Get a single products</Link></li>
                                <li><Link className="dropdown-item" to="Paginatio Results">Paginatio Results</Link></li>
                                <li><Link className="dropdown-item" to="Add Product">Add Product</Link></li>
                                <li><Link className="dropdown-item" to="Update produ">Update product</Link></li>
                                <li><Link className="dropdown-item" to="Delete product">Delete product</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Productadd">Productadd </Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
