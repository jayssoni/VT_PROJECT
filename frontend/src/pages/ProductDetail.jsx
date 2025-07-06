import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopDataContext } from '../context/ShopContext';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import Loading from '../component/Loading';
import { toast } from 'react-toastify';

function ProductDetail() {
    let { productId } = useParams();
    let { products, currency, addtoCart, loading } = useContext(shopDataContext);
    let [productData, setProductData] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [size, setSize] = useState('');
    const [activeTab, setActiveTab] = useState('description');
    const [showSizeError, setShowSizeError] = useState(false);

    useEffect(() => {
        const product = products.find(item => item._id === productId);
        if (product) {
            setProductData(product);
            setMainImage(product.image1);
        }
    }, [productId, products]);

    const handleAddToCart = () => {
        if (!size) {
            setShowSizeError(true);
            toast.error('Please select a size before adding to cart');
            return;
        }
        addtoCart(productData._id, size);
        toast.success('Item added to cart successfully!');
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        
        return stars;
    };

    if (!productData) return <div className="flex justify-center items-center h-screen"><Loading /></div>;

    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            {/* Product Main Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Product Images */}
                        <div className="md:w-1/2 p-4">
                            <div className="flex flex-row md:flex-col-reverse">
                                {/* Thumbnail Images */}
                                <div className="flex md:flex-row flex-col gap-2 mb-4 mr-4 md:mr-0">
                                    {[productData.image1, productData.image2, productData.image3, productData.image4].map((img, index) => (
                                        <div 
                                            key={index} 
                                            className={`w-16 h-16 border rounded-md cursor-pointer ${mainImage === img ? 'border-blue-500' : 'border-gray-200'}`}
                                            onClick={() => setMainImage(img)}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Main Image */}
                                <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg p-4 h-80">
                                    <img 
                                        src={mainImage} 
                                        alt={productData.name} 
                                        className="h-full w-auto object-contain" 
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="md:w-1/2 p-6 border-l border-gray-200">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{productData.name}</h1>
                            
                            <div className="flex items-center mb-4">
                                <div className="flex mr-2">
                                    {renderStars(4.5)}
                                </div>
                                <span className="text-blue-600 text-sm font-medium">(124 Reviews)</span>
                                <span className="text-green-600 text-sm font-medium ml-4">In Stock</span>
                            </div>

                            <div className="mb-6">
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {currency} {productData.price}
                                </div>
                                <div className="text-sm text-gray-500">
                                    <span className="line-through mr-2">{currency} {productData.price * 1.2}</span>
                                    <span className="text-green-600">20% off</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Description</h3>
                                <p className="text-gray-600">{productData.description}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-800 mb-2">Select Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {productData.sizes.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`px-4 py-2 border rounded-md text-sm font-medium ${
                                                item === size 
                                                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                                    : 'border-gray-300 hover:bg-gray-50'
                                            }`}
                                            onClick={() => {
                                                setSize(item);
                                                setShowSizeError(false);
                                            }}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                                {showSizeError && (
                                    <p className="text-red-500 text-sm mt-2">Please select a size</p>
                                )}
                            </div>

                            <div className="flex gap-4">
                                <button 
                                    className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md ${
                                        !size ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                    onClick={handleAddToCart}
                                    disabled={!size || loading}
                                >
                                    {loading ? <Loading /> : 'ADD TO CART'}
                                </button>
                                <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-md">
                                    BUY NOW
                                </button>
                            </div>

                            <div className="mt-6 p-4 bg-gray-50 rounded-md">
                                <div className="flex items-start mb-2">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span className="text-sm text-gray-700">100% Original Products</span>
                                </div>
                                <div className="flex items-start mb-2">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span className="text-sm text-gray-700">Pay on delivery available</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span className="text-sm text-gray-700">Easy 7 days returns & exchanges</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Content Below Product */}
                <div className="mt-8">
                    {/* Reviews Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                        <div className="flex items-center mb-6">
                            <div className="text-3xl font-bold mr-4">4.5</div>
                            <div>
                                <div className="flex">
                                    {renderStars(4.5)}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Based on 124 reviews</p>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-800">Rahul Sharma</h4>
                                        <div className="flex items-center mt-1">
                                            {renderStars(5)}
                                            <span className="ml-2 text-sm text-gray-500">15 June 2023</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-3">"Excellent product quality. Fits perfectly and very comfortable."</p>
                            </div>
                            
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-800">Priya Patel</h4>
                                        <div className="flex items-center mt-1">
                                            {renderStars(4)}
                                            <span className="ml-2 text-sm text-gray-500">2 July 2023</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-3">"Good fabric but the color is slightly different than shown in pictures."</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Product Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-medium text-gray-800 mb-2">Material & Care</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>100% Premium Cotton</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Machine wash cold</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Do not bleach</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-800 mb-2">Shipping & Returns</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Free delivery on orders over ₹999</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>7-day easy returns</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Cash on delivery available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Similar Products</h2>
                        <RelatedProduct 
                            category={productData.category} 
                            subCategory={productData.subCategory} 
                            currentProductId={productData._id}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;