import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import conf from "../Conf/conf";
// import dotenv from "dotenv";
// dotenv.config();

const ShoppingCart = () => {
  const [amount, setAmount] = useState("");
  const [shipping, setShipping] = useState("Standard-Delivery- 40.00");
  const [paymode, setPaymode] = useState("Pay");

  // const loadRazorpayScript = () => {
  //   const script = document.createElement("script");
  //   script.src = process.env.VITE_RAZORPAY_SCRIPT;
  //   script.async = true;
  //   document.body.appendChild(script);
  // };
  
  // useEffect(() => {
  //   loadRazorpayScript();
  // }, []);

  const payNow = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/create-order?amount=${amount}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const options = {
        amount: data.amount,
        order_id: data.id,
        key: conf.razorPayKey,
        currency: "INR",
        name: "My Store",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        handler: function (response) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
          console.log(data);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav@new.com",
          contact: "9999999999",
        },
        notes: {
          address: "My address",
        },
      };
      const razor = new window.Razorpay(options);
      razor.on("payment.failed", function (response) {
        alert(`Payment failed! Error Code: ${response.error.code}`);
        alert(`Description: ${response.error.description}`);
        alert(`Source: ${response.error.source}`);
        alert(`Step: ${response.error.step}`);
        alert(`Reason: ${response.error.reason}`);
        alert(`Order ID: ${response.error.metadata.order_id}`);
        alert(`Payment ID: ${response.error.metadata.payment_id}`);
      });
      razor.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("There was an issue processing your payment.");
    }
  };

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Cotton T-shirt",
      price: 180,
      imageUrl: "https://i.imgur.com/1GrakTl.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Cotton T-shirt",
      price: 220,
      imageUrl: "https://i.imgur.com/ba3tvGm.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Cotton T-shirt",
      price: 440,
      imageUrl: "https://i.imgur.com/pHQ3xT3.jpg",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, change) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = totalPrice === 0 || totalPrice > 2500 ? 0 : 40;
  const finalPrice = totalPrice + shippingCost;

  useEffect(() => {
    setAmount(finalPrice);
  }, [finalPrice]);

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-4xl">
        <div className="w-full lg:w-2/3 p-2 border-r border-gray-300 relative">
          <button className="absolute top-4 right-4 text-sm text-gray-500 sm:hidden hover:text-gray-700">
            <FaTimes className="h-6 w-6" />
          </button>
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xl font-bold">Shopping Cart</h4>
            <span className="text-sm mt-8 text-gray-500">
              {items.length} items
            </span>
          </div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex w-full items-center border-t border-b py-4"
            >
              <div className="w-[20%]">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-14 h-14 ml-2 object-cover"
                />
              </div>
              <div className="w-[40%]">
                <div className="text-sm md:text-base text-gray-500">
                  {item.name}
                </div>
              </div>
              <div className="w-[30%] text-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-2 py-1 h-6 text-sm md:text-base border rounded"
                >
                  <FaMinus className="w-2" />
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 py-1 h-6 text-xs border rounded"
                >
                  <FaPlus className="w-2" />
                </button>
              </div>
              <div className="w-[18%] text-center">
                {item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 p-8 relative">
          <button className="absolute top-4 right-4 text-sm text-gray-500 sm:block hidden hover:text-gray-700">
            <FaTimes className="h-6 w-6" />
          </button>
          <h5 className="text-lg font-bold mb-4">Summary</h5>
          <div className="flex justify-between text-sm mb-2">
            <span>ITEMS {items.length}</span>
            <span>Rs {totalPrice}</span>
          </div>
          <form className="mb-6">
            <div className="flex m-0">
              <p className="text-sm ml-0">SHIPPING COST</p>
              <p className="text-sm ml-auto">{shippingCost}</p>
            </div>
            <select
              value={paymode}
              onChange={(e) => setPaymode(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded mb-4 mt-2"
            >
              <option value="Pay">Pay Now</option>
              <option value="Cash">Cash Now</option>
            </select>
            <p className="text-base text-green-500 mt-2">
              {totalPrice > 2499
                ? "Your order is over Rs 2499, so you get free shipping!"
                : "Standard delivery charge applies."}
            </p>
          </form>
          <div className="flex justify-between text-sm py-2 border-t border-gray-300 mt-6">
            <span>TOTAL PRICE</span>
            <span>Rs {finalPrice}</span>
          </div>
          <button
            className="w-full py-2 mt-6 bg-black text-white font-bold"
            onClick={() => paymode === "Pay" && payNow()}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
