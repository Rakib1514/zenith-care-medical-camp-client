import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PropTypes from "prop-types";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { messageSuccess } from "../../Utils/messageAlert";


const CheckoutForm = ({ camp }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { campFee: price, _id, campName, campId } = camp;

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setBtnLoading(true);
      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (!card) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        setError(error.message);
      } else {
        setError("");
      }

      // confirm payment
      const { paymentIntent, error: confirmsError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        });

      if (confirmsError) {
        setError(confirmsError.message);
      } else {
        // console.log("Payment Intent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          const payInfo = {
            trxId: paymentIntent.id,
            payTime: paymentIntent.created,
            campName: campName,
            campFee: price,
            campId: campId,
            userId: user.uid,
            regId: _id,
          };
          //! Success Flow
          const res = await axiosSecure.post(`/transactions`, payInfo);

          if (!res.data.insertedId) {
            setError(
              "Payment not Confirmed. Please contact customer care if the amount deducted from your account"
            );
            return;
          }

          const statusRes = await axiosSecure.patch(
            `/set-Payment-status/${_id}`
          );

          if (!statusRes.data.modifiedCount) {
            setError(
              "payment status not confirmed. Please contact To customer Care"
            );
            return;
          }
          messageSuccess(`Payment Success. trxID: ${paymentIntent.id}`)
          navigate(`/dashboard/registered-camps/${user.uid}`);
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setBtnLoading(false);
    }
  };

  

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="border  border-primary rounded-sm p-8">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <Button
          loading={btnLoading}
          type="submit"
          disabled={!stripe || !clientSecret}
          variant="outlined"
          size="medium"
          style={{
            backgroundColor: "#0076BA",
            color: "white",
            marginTop: "2rem",
          }}
        >
          Pay
        </Button>
        {btnLoading && (
          <div className="flex items-center mt-3 gap-1">
            <span className="loading loading-spinner loading-sm text-primary " />{" "}
            <span>Payment Processing</span>
          </div>
        )}
        <p className="text-red-600 font-semibold mt-4">{error}</p>
      </div>
    </form>
  );
};

CheckoutForm.propTypes = {
  camp: PropTypes.object,
};

export default CheckoutForm;
