import React, { useState,useRef } from 'react';
import mintImage from '../assets/mint.jpeg';
import normalImage from '../assets/normal.jpeg';
import spicyImage from '../assets/spicy.jpeg';
import sweetImage from '../assets/sweet.jpeg';
import emailjs from "@emailjs/browser";

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
  const [modalQuotePlaced, setModalQuotePlaced] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sending, setSending] = useState(false);
  const formData = useRef();

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const serviceId = "service_uabxijr";
  const templateId = "quote_request";
  const publicKey = "Jt6uIPdI0cvIohGIS";

  try {
    setSending(true);

    const form = formData.current;
    const name = form.elements["buyer-name"].value;
    const email = 'raheesep318@gmail.com';
    const customerEmail = form.elements["customer-email"].value;
    const phone = form.elements["customer-phone"].value;
    const product = form.elements["product-name"]?.value;
    const price = form.elements["product-price"]?.value;
    const units = form.elements["product-qty"]?.value;

    if (!name || !customerEmail || !phone) {
      alert("Please fill in all required fields.");
      setSending(false);
      return;
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        buyer_name: name,
        email,
        customerEmail,
        phone,
        product_name: product,
        price,
        units
      },
      publicKey
    );
    setModalOpen(false);
    setModalQuotePlaced(true);
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setSending(false);
  }
};
 
  return (
    <section id="products"  className="bg-[#f8f8f8] py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10 text-black">Our Products.</h2>

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
            className="
              w-full py-2 rounded
              bg-white text-black
              shadow-md hover:bg-[#d4001a] hover:text-white
              transition-colors duration-200
            "
               >
              Request Quote
              </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedProduct && (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
          <button
            onClick={()=> setModalOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
          >
            &times;
          </button>
            <h3 className="text-xl font-bold mb-4">Request Quote</h3>
            <form ref={formData} onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  name='product-name'
                  value={selectedProduct.name}
                  disabled
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="text"
                  name='product-price'
                  value={selectedProduct.price}
                  disabled
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
               <div>
                <label className="block text-sm font-medium">Product Qty </label>
                <input
                  type="number"
                  name='product-qty'
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
               <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name='buyer-name'
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name='customer-email'
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone (optional)</label>
                <input
                  type="number"
                  name='customer-phone'
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <button className="
              w-full py-2 rounded
              bg-white text-black
              shadow-md hover:bg-[#d4001a] hover:text-white
              transition-colors duration-200
            ">
                {sending ? 'Requesting' :'Request Quote'}
             </button>
            </form>
          </div>
        </div>
      )}

     {modalQuotePlaced && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-full max-w-sm text-center shadow-xl animate-pop-in">
      
      <div className="text-6xl mb-4">✅</div>
      
      <h2 className="text-2xl font-bold mb-2 text-green-700">Thank You!</h2>
      <p className="text-gray-700">
        Your quote has been placed.<br />We’ll contact you shortly.
      </p>

      <button
        onClick={() => setModalQuotePlaced(false)}
        className="mt-6 px-4 py-2 bg-[#d4001a] text-black rounded hover:bg-red-700 transition"
      >
        Close
      </button>
    </div>
  </div>
)}


    </section>
  );
}
