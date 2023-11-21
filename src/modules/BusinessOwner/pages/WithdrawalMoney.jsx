import React, { useRef, useState } from "react";
import RecipientInformation from "../components/RecipientInformation.jsx";
import './WithdrawalMoney.css'
const WithdrawalMoney = () => {
  const [recipientInfo, setRecipientInfo] = useState({
    recipientName: "",
    paymentMethod: "",
    amountWithdrawn: "",
    recipientNumber: "",
    recipientAddress: "",
    password: "",
  });
  const chiledRef = useRef();
  return (
    <div className="ms-wm-main">
      <p className="ms-wm-title">Confirm Payment</p>
      <p className="ms-wm-des">
        Please pay the required amount of 25,000 SYP for posting a job
        advertisement, and then attach the payment receipt number to confirm the
        process.
      </p>
      <RecipientInformation
        recipientInfo={recipientInfo}
        setRecipientInfo={setRecipientInfo}
        ref={chiledRef}
      />
      <div className="ms-wm-buttuns">
        <div className="ms-wm-cancel-btn">Cancel</div>
        <div
          className="ms-wm-confirm-btn"
          onClick={() => {
            let isAllFill = true;

            for (const key of Object.keys(recipientInfo)) {
              if (recipientInfo[key] == "") {
                isAllFill = false;
                if (key == "recipientName") {
                  chiledRef.current.changeError();
                } else if (key == "paymentMethod") {
                  chiledRef.current.changeError1();
                } else if (key == "amountWithdrawn") {
                  chiledRef.current.changeError2();
                } else if (key == "recipientNumber") {
                  chiledRef.current.changeError3();
                } else if (key == "recipientAddress") {
                  chiledRef.current.changeError4();
                } else if (key == "password") {
                  chiledRef.current.changeError5();
                }
              }
            }
            if (isAllFill) {
              console.log(JSON.stringify(recipientInfo));
            } else {
            }
          }}
        >
          Confirm Payment
        </div>
      </div>
    </div>
  );
};

export default WithdrawalMoney;
