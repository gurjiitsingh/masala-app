import React from 'react'
import {
    PayPalButtons,
   
    usePayPalScriptReducer,
  } from "@paypal/react-paypal-js";
  
  import { useRouter, useSearchParams } from "next/navigation";
  import { useCartContext } from "@/store/CartContext";

export default function Checkout(){
 const searchParams = useSearchParams();
   const orderMasterId = searchParams.get("orderMasterId");
  // console.log("orderMasterId in paypal -------------",orderMasterId)

    const [{ options, isPending,isRejected,isResolved, isInitial  }, dispatch] = usePayPalScriptReducer();
    //const [currency, setCurrency] = useState(options.currency);
    console.log("isPending,isRejected,isResolved, isInitial ---------", isPending,isRejected,isResolved, isInitial)
    const router = useRouter();
    const {   endTotalG } = useCartContext();
   
  //  console.log("amount--------------",productTotalCost,typeof(productTotalCost), endTotalG1,typeof(endTotalG1),endTotalG,typeof(endTotalG))
  
    // const onCurrencyChange = ({ target: { value } }) => {
    //   setCurrency(value);
    //   dispatch({
    //     type: "resetOptions",
    //     value: {
    //       ...options,
    //       currency: value,
    //     },
    //   });
    // };

    let customerAddress;
    if (typeof window !== 'undefined') {
     customerAddress = JSON.parse(localStorage.getItem("customer_address") || '""')  ;
    }
  //console.log("cartData ", productTotalCost)
      const onCreateOrder = (data, actions) => {
      return actions.order.create({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              value: endTotalG,
            },
          },
        ], 
        // items: [
        //   {
        //     "name": "All products", /* Shows within upper-right dropdown during payment approval */
        //     "description": "Total amount", /* Item details will also be in the completed paypal.com transaction view */
        //     "unit_amount": {
        //       "currency_code": "EUR",
        //       "value": endTotalG,
        //     },
        //     "quantity": 2
        //   },
        // ],
        // payer: {
        //   name: {
        //     given_name: customerAddress.firstName,
        //     surname: customerAddress.lastName,
        //   },
        //   address:
        //    {
        //     address_line_1: customerAddress.addressLine1,
        //     address_line_2: customerAddress.addressLine2,
        //     admin_area_2: customerAddress.city,
        //     admin_area_1: customerAddress.state,
        //    // postal_code: customerAddress.zipCode,
        //     country_code: "DE",
        //   },
        //   email_address: customerAddress.email,
        //   phone: {
        //     phone_type: "MOBILE",
        //     phone_number: {
        //       national_number: customerAddress.mobNo,
        //     },
        //   },
        // },
      });
    };
  
    const onApproveOrder = (data, actions) => {
      return actions.order.capture().then((details) => {
        //const name = details.payer.name.given_name;
       // alert(`Transaction completed by ${name}`);
      
      // console.log("isPending,isRejected,isResolved, isInitial ---------", isPending,isRejected,isResolved, isInitial)
       router.push(`/complete?paymentType=paypal&status=success&orderMasterId=${orderMasterId}`)
       });
    };

    const onError = (err) => {
      console.log("paypal error--------------- ",err)
      router.push(`/order-fail?paymentType=paypal&status=fail&orderMasterId=${orderMasterId}`)
  }

  const onCancel= (data) => {
    console.log("Payment Cancelled:", data);
    router.push(`/order-cancel?paymentType=paypal&status=cancel&orderMasterId=${orderMasterId}`)
  }
  
    return (<div className="flex container mx-auto px-[30%] items-center justify-center my-[20%] ">
      <div className="checkout">
        {isPending  ? (
          <p>LOADING...</p>
        ) : (
          <>
        
            <PayPalButtons
              message={{
                amount: endTotalG,
                align: "center",
                color: "black",
                position: "top",
              }}
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
              onError={ (err)=> onError(err)}
              onCancel = {(data)=> onCancel(data)}
            />
           
          </>
        )}
      </div></div>
    );
  };
