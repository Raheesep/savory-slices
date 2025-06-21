import React, { useState } from 'react';
import mintImage from '../assets/mint.jpeg';
import normalImage from '../assets/normal.jpeg';
import spicyImage from '../assets/spicy.jpeg';
import sweetImage from '../assets/sweet.jpeg';

const products = [
  {
    id: 1,
    name: "Kerala Banana Chips - Normal",
    flavour: "Normal",
    price: "₹80 / 100g",
    image: normalImage,
  },
  {
    id: 2,
    name: "Kerala Banana Chips - Spicy",
    flavour: "Spicy",
    price: "₹80 / 100g",
    image: spicyImage,
  },
  {
    id: 3,
    name: "Kerala Banana Chips - Mint",
    flavour: "Mint",
    price: "₹80 / 100g",
    image: mintImage,
  },
  {
    id: 4,
    name: "Kerala Banana Chips Sweet",
    flavour: "Sweet",
    price: "₹80 / 100g",
    image: sweetImage,
  },
];

export default function OurProducts() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
      Product: ${selectedProduct.name}
      Price: ${selectedProduct.price}
      Email: ${email}
      Phone: ${phone || 'Not Provided'}
    `;

    window.location.href = `mailto:eeee@yopmail.com?subject=Request Quote - ${selectedProduct.name}&body=${encodeURIComponent(body)}`;

    setModalOpen(false);
    setEmail('');
    setPhone('');
  };

  return (
    <section id="products"  className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Our Products.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 text-left">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="w-full h-48 overflow-hidden mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Flavour:</span> {product.flavour}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Price:</span> {product.price}
            </p>
            <button
              onClick={() => handleOpenModal(product)}
              className="w-full bg-black text-black py-2 rounded hover:bg-[#d4001a] transition"
            >
              Request Quote
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedProduct && (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Request Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  value={selectedProduct.name}
                  disabled
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="text"
                  value={selectedProduct.price}
                  disabled
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone (optional)</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
             <button className="w-full bg-black text-black py-2 rounded hover:bg-[#d4001a] transition-colors duration-200">
                Request Quote
                </button>

            </form>
          </div>
        </div>
      )}
    </section>
  );
}
