import { useState, useEffect } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [userRatings, setUserRatings] = useState({}); // { productId: { rating, count } }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    function renderStars(rate, productId) {
        const current = userRatings[productId];
        const currentRating = current ? current.rating : Math.round(rate);

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    style={{ color: i <= currentRating ? "#ffc107" : "#e4e5e9", cursor: "pointer", fontSize: "1.2em" }}
                    onClick={() => handleStarClick(productId, i)}
                >
                    ★
                </span>
            );
        }
        return stars;
    }

    function handleStarClick(productId, rating) {
        setUserRatings(prev => {
            const prevData = prev[productId];
            return {
                ...prev,
                [productId]: {
                    rating,
                    count: prevData ? prevData.count + 1 : 1
                }
            };
        });
    }

    function getDisplayCount(product) {
        const local = userRatings[product.id];
        if (local) {
            return product.rating.count + local.count;
        }
        return product.rating.count;
    }

    return (
        <>
            <main style={{ paddingTop: "80px" }}>
                <h1>this is a Products page</h1>
                <p>Prova</p>
                <div className="row">
                    {products.map(product => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.price} €</p>
                                    <div>
                                        {renderStars(product.rating.rate, product.id)}
                                        <span className="ms-2 text-muted">
                                            ({getDisplayCount(product)} voti)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}