import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function GetSingleProductsPage() {
    const { id } = useParams();

    const api_url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const currentId = parseInt(id);

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [api_url]);



    return (
        <div className="container" style={{ paddingTop: "80px" }}>
            <div className="card h-100">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "300px", objectFit: "contain" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} €</p>
                    <div>
                    </div>
                    <p className="mt-3">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate(`/products/${currentId - 1}`)}
                            disabled={currentId <= 1}
                        >
                            Indietro
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/products")}
                        >
                            Torna alla lista
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate(`/products/${currentId + 1}`)}
                            disabled={currentId >= 20}
                        >
                            Avanti
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
