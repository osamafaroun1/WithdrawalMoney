import React, { useState, forwardRef, useImperativeHandle } from "react";
import { computeHeadingLevel } from "@testing-library/react";
const RecipientInformation = ({ recipientInfo, setRecipientInfo }, ref) => {
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);

  useImperativeHandle(ref, () => ({
    changeError,
    changeError1,
    changeError2,
    changeError3,
    changeError4,
    changeError5,
  }));
  const changeError = () => {
    setError(true);
  };
  const changeError1 = () => {
    setError1(true);
  };
  const changeError2 = () => {
    setError2(true);
  };
  const changeError3 = () => {
    setError3(true);
  };
  const changeError4 = () => {
    setError4(true);
  };
  const changeError5 = () => {
    setError5(true);
  };

  return (
    <div className="ms-recipient-information-card">
      <p className="ms-ri-card-title">Sender information</p>
      <p className="ms-ri-card-des">
        Enter the recipient's information accurately.
      </p>
      <div className="ms-ri-line"></div>
      <form>
        <div className="ms-ri-card-input-container">
          <div className="ms-ri-card-column">
            <div>
              {error1 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="text"
                required
                onChange={(e) => {
                  e.target.value ? setError1(false) : setError1(true);
                  setRecipientInfo({
                    ...recipientInfo,
                    recipientName: e.target.value,
                  });
                }}
                placeholder="Enter Recipient Full Name"
              />
            </div>
            <div className="ms-ri-payment">
              <label>
                Payment Method{" "}
                {error2 ? (
                  <label className="lbl-error">Can't be empty</label>
                ) : (
                  ""
                )}
              </label>
              <select
                id="payment-method"
                onChange={(e) => {
                  e.target.value ? setError2(false) : setError2(true);
                  setRecipientInfo({
                    ...recipientInfo,
                    paymentMethod: e.target.value,
                  });
                }}
                placeholder="Select"
              >
                <option disabled selected>
                  Select
                </option>
                <option>MTN CASH</option>
                <option>SYRIATEL CASH</option>
                <option>Banque Bemo Saudi Fransi</option>
                <option>AL-HARAM</option>
                <option>FOAD</option>
              </select>
            </div>
            <div>
              {error3 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="number"
                onChange={(e) => {
                  e.target.value ? setError3(false) : setError3(true);
                  setRecipientInfo({
                    ...recipientInfo,
                    amountWithdrawn: e.target.value,
                  });
                }}
                required
                placeholder="The amount withdrawn"
              />
            </div>
          </div>
          <div className="ms-ri-card-column">
            <div>
              {error ? <label className="lbl-error">Can't be empty</label> : ""}
              <input
                type="number"
                onChange={(e) => {
                  e.target.value ? setError(false) : setError(true);
                  setRecipientInfo({
                    ...recipientInfo,
                    recipientNumber: e.target.value,
                  });
                }}
                required
                placeholder="Enter Recipient  Number"
              />
            </div>
            <div>
              {error4 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="text"
                required
                onChange={(e) => {
                  e.target.value ? setError4(false) : setError4(true);
                  setRecipientInfo({
                    ...recipientInfo,
                    recipientAddress: e.target.value,
                  });
                }}
                placeholder="Enter your Address"
              />
            </div>
            <div>
              {error5 ? (
                <label className="lbl-error">Can't be empty</label>
              ) : (
                ""
              )}
              <input
                type="password"
                required
                onChange={(e) => {
                  e.target.value ? setError5(false) : setError5(true);
                  setRecipientInfo({
                    ...recipientInfo,
                    password: e.target.value,
                  });
                }}
                placeholder="The Password for Vorifi"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default forwardRef(RecipientInformation);
