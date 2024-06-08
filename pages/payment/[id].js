import axios from "axios";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const makePayment = async () => {
    if (!razorpayLoaded) return;

    const val = {
      id: router.query?.id,
    };
    const { data } = await axios.post(`/api/razorpay`, val);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Harsha HG",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You !",
      handler: function (response) {},
      prefill: {
        name: "Harsha HG",
        email: "harshahg829656@gmail.com",
        contact: 9980207985,
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  useEffect(() => {
    if (razorpayLoaded) {
      makePayment();
    }
  }, [razorpayLoaded]);

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRazorpayLoaded(true)}
      />
    </>
  );
};

export default Payment;
