import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchRestaurants } from '../services/api';
import { getRestaurantImage } from '../utils/imageHelper';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category');
        if (categoryParam) setFilter(categoryParam);

        fetchRestaurants()
            .then(res => {
                setRestaurants(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [location.search]);

    const filtered = restaurants.filter(r => {
        const matchesFilter = filter === 'All' || r.cuisineType?.toLowerCase().includes(filter.toLowerCase());
        const matchesSearch = r.name?.toLowerCase().includes(search.toLowerCase()) || r.cuisineType?.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (loading) {
        return <div className="container" style={{ textAlign: 'center', marginTop: '80px', fontSize: '18px' }}>Loading best restaurants for you... 🍽️</div>;
    }

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                    <h1 className="section-title">Explore Restaurants</h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>{filtered.length} restaurants ready to deliver</p>
                </div>
                <input
                    type="text"
                    placeholder="🔍 Search restaurants or cuisines..."
                    className="form-control"
                    style={{ maxWidth: '320px', borderRadius: '50px', padding: '12px 20px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {['All', 'Italian', 'Fast Food', 'Indian', 'American', 'Biryani'].map(cat => (
                    <button
                        key={cat}
                        className={filter.toLowerCase() === cat.toLowerCase() ? 'btn-primary' : 'btn-outline'}
                        style={{ padding: '8px 18px', borderRadius: '50px' }}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Dynamic Restaurant Cards with Specific Images */}
            <div className="grid">
                {filtered.map(r => (
                    <div className="card" key={r.restaurantID}>
                        <div className="card-img-wrapper">
                            <img
                                src={getRestaurantImage(r)}
                                alt={r.name}
                                className="card-img"
                            />
                        </div>
                        <div className="card-body">
                            <div>
                                <div className="card-title">{r.name}</div>
                                <div className="card-cuisine">{r.cuisineType} • {r.address}</div>
                            </div>
                            <div className="card-meta">
                                <span className="badge-rating">★ {r.rating || '4.2'}</span>
                                <span style={{ color: 'var(--text-light)' }}>⏱️ {r.deliveryTime || 25} mins</span>
                                <Link to={`/menu/${r.restaurantID}`} className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                                    View Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;