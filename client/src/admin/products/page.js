import React, { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../../managers/products"
import { NewProduct } from "./add"
import { EditProduct } from "./edit"
import { Link } from "react-router-dom"
export const Products = ({ types }) => {
    // state
    const [products, setProducts] = useState([])
    const [productToEdit, setProductToEdit] = useState({})
    // handle function to get products
    const handleGetProducts = () => {
        getProducts().then(setProducts)
    }
    // handle function to edit product
    const handleProductToEdit = (product) => {
        setProductToEdit(product)
    }
    // handle function to delete product
    const handleDeleteProduct = (productId) => {
        deleteProduct(productId).then(() => {
            handleGetProducts()
        })
    }
    useEffect(() => {
        handleGetProducts()
    }, [])
    return (
        <div className="gap-5 grid grid-cols-[2fr,1fr]">
            <ul className="flex flex-col gap-3 max-h-[80vh] min-h-[80vh] overflow-y-scroll">
                {products.map((product, index) => (
                    <li className="gap-3 grid grid-cols-[2fr,1fr,1fr,1fr] group items-center text-center" key={index}>
                        <div className="bg-white border col-span-2 grid grid-cols-3 items-center rounded-lg shadow">
                            <div className="p-5">
                                <img className="border-2 border-emerald-600 h-20 object-cover rounded-full w-20" src={product.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-medium text-xl truncate">{product.name}</p>
                                <p className="">{types.find((type) => type.id === product.typeId)?.name}</p>
                            </div>
                            <div>
                                <p className="">{product.available ? "Available" : "Not Available"}</p>
                                <Link className="hover:underline text-blue-500 truncate" to={`${product.imageUrl}`}>
                                    View Item
                                </Link>
                            </div>
                        </div>
                        <button className="bg-emerald-700/20 hover:border-2 hover:border-emerald-600 rounded-lg self-stretch text-emerald-800 text-xl" onClick={() => handleProductToEdit(product)}>
                            Edit
                        </button>
                        <button className="bg-red-500/20 hover:border-2 hover:border-red-600 rounded-lg self-stretch text-xl text-red-800" onClick={() => handleDeleteProduct(product.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <div className="gap-5 grid">
                <NewProduct handleGetProducts={handleGetProducts} types={types} />
                <EditProduct handleGetProducts={handleGetProducts} productToEdit={productToEdit} setProductToEdit={setProductToEdit} types={types} />
            </div>
        </div>
    )
}