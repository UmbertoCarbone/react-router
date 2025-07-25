import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GetSingleProductsPage() {
    const { id } = useParams();
    const api_url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [api_url]);



    return (
        <div className="container" style={{ paddingTop: "80px" }}>
            <div className="card mx-auto" style={{ maxWidth: "500px" }}>
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "300px", objectFit: "contain" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} €</p>
                    <div>
                    </div>
                    <p className="mt-3">{product.description}</p>
                    <div className="d-flex justify-content-between">
                        <span>
                            <span style={{ color: "#ffc107" }}>★</span>
                            <span>{product.rating?.rate}</span>
                        </span>
                        <span>{product.rating?.count} voti</span>
                    </div>
                </div>
            </div>
        </div >
    );
}
