import { useState, useEffect } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [userRatings, setUserRatings] = useState({}); 

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    function handleStarClick(productId, rating) {
        setUserRatings(prev => {
            const prevData = prev[productId];
            return {
                ...prev,
                [productId]: {
                    sum: prevData ? prevData.sum + rating : rating,
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

    function getDisplayRate(product) {
        const local = userRatings[product.id];
        if (local) {
            const totalSum = product.rating.rate * product.rating.count + local.sum;
            const totalCount = product.rating.count + local.count;
            return (totalSum / totalCount).toFixed(1);
        }
        return product.rating.rate.toFixed(1);
    }

    function renderStars(rate, productId, product) {
        const displayRate = parseFloat(getDisplayRate(product));
        const rounded = Math.round(displayRate);

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    style={{ color: i <= rounded ? "#ffc107" : "#e4e5e9", cursor: "pointer", fontSize: "1.2em" }}
                    onClick={() => handleStarClick(productId, i)}
                >
                    ★
                </span>
            );
        }
        return stars;
    }

    return (
        <>
            <main>
                <h1>this is a Products page</h1>
                <p>Prova</p>
                <div className="row">
                    {products.map(product => (
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.price} €</p>
                                    <div>
                                        {/* Stelle, rate e count nello stesso div */}
                                        <span>
                                            {renderStars(product.rating.rate, product.id, product)}
                                            <span className="ms-2 text-muted">
                                                {getDisplayRate(product)} / 5 ({getDisplayCount(product)} voti)
                                            </span>
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