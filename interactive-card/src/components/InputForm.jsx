import { useState } from "react";

function InputForm({ cardData, setCardData, isConfirmed, setIsConfirmed, onReset }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // 1. Cardholder Name Validation
    if (!cardData.name.trim()) {
      newErrors.name = "Can't be blank";
    } else if (!/^[a-zA-Z\s'-]+$/.test(cardData.name.trim())) {
      newErrors.name = "Wrong format, letters only";
    }

    // 2. Card Number Validation
    const cleanCardNumber = cardData.cardNumber.replace(/\s/g, "");
    if (!cleanCardNumber) {
      newErrors.cardNumber = "Can't be blank";
    } else if (/[^\d]/.test(cleanCardNumber)) {
      newErrors.cardNumber = "Wrong format, numbers only";
    } else if (cleanCardNumber.length !== 16) {
      newErrors.cardNumber = "Must be 16 digits";
    }

    // 3. Exp Month Validation
    if (!cardData.month.trim()) {
      newErrors.month = "Can't be blank";
    } else if (!/^\d+$/.test(cardData.month)) {
      newErrors.month = "Wrong format, numbers only";
    } else {
      const monthNum = parseInt(cardData.month, 10);
      if (monthNum < 1 || monthNum > 12) {
        newErrors.month = "Must be a valid month (01-12)";
      }
    }

    // 4. Exp Year Validation
    if (!cardData.year.trim()) {
      newErrors.year = "Can't be blank";
    } else if (!/^\d+$/.test(cardData.year)) {
      newErrors.year = "Wrong format, numbers only";
    } else if (cardData.year.length < 2) {
      newErrors.year = "Must be 2 digits";
    }

    // 5. CVC Validation
    if (!cardData.cvc.trim()) {
      newErrors.cvc = "Can't be blank";
    } else if (!/^\d+$/.test(cardData.cvc)) {
      newErrors.cvc = "Wrong format, numbers only";
    } else if (cardData.cvc.length < 3) {
      newErrors.cvc = "Must be 3 digits";
    }

    return newErrors;
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    setCardData((prev) => ({ ...prev, name: val }));
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleCardNumberChange = (e) => {
    const raw = e.target.value.replace(/\s+/g, "");
    const truncated = raw.slice(0, 16);
    const formatted = truncated.match(/.{1,4}/g)?.join(" ") || truncated;

    setCardData((prev) => ({ ...prev, cardNumber: formatted }));
    if (errors.cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: "" }));
    }
  };

  const handleMonthChange = (e) => {
    const val = e.target.value.slice(0, 2);
    setCardData((prev) => ({ ...prev, month: val }));
    if (errors.month) {
      setErrors((prev) => ({ ...prev, month: "" }));
    }
  };

  const handleYearChange = (e) => {
    const val = e.target.value.slice(0, 2);
    setCardData((prev) => ({ ...prev, year: val }));
    if (errors.year) {
      setErrors((prev) => ({ ...prev, year: "" }));
    }
  };

  const handleCvcChange = (e) => {
    const val = e.target.value.slice(0, 4);
    setCardData((prev) => ({ ...prev, cvc: val }));
    if (errors.cvc) {
      setErrors((prev) => ({ ...prev, cvc: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsConfirmed(true);
    }
  };

  const handleContinue = () => {
    setErrors({});
    if (onReset) {
      onReset();
    } else {
      setIsConfirmed(false);
    }
  };

  return (
    <div className="w-full max-w-95">
      {!isConfirmed ? (
        <form onSubmit={handleSubmit} noValidate className="grid gap-5">
          {/* Cardholder Name */}
          <div>
            <label
              htmlFor="cardholder-name"
              className="block text-xs uppercase tracking-[0.15em] font-medium text-Purple-950 mb-2 cursor-pointer"
            >
              Cardholder Name
            </label>
            <div className={`custom-input-wrapper ${errors.name ? "has-error" : ""}`}>
              <input
                id="cardholder-name"
                name="name"
                type="text"
                placeholder="e.g. Jane Appleseed"
                value={cardData.name}
                onChange={handleNameChange}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="custom-input"
              />
            </div>
            {errors.name && (
              <p id="name-error" className="text-Red-400 text-xs mt-1.5 font-medium" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Card Number */}
          <div>
            <label
              htmlFor="card-number"
              className="block text-xs uppercase tracking-[0.15em] font-medium text-Purple-950 mb-2 cursor-pointer"
            >
              Card Number
            </label>
            <div className={`custom-input-wrapper ${errors.cardNumber ? "has-error" : ""}`}>
              <input
                id="card-number"
                name="cardNumber"
                type="text"
                maxLength={19}
                placeholder="e.g. 1234 5678 9123 0000"
                value={cardData.cardNumber}
                onChange={handleCardNumberChange}
                aria-invalid={errors.cardNumber ? "true" : "false"}
                aria-describedby={errors.cardNumber ? "card-number-error" : undefined}
                className="custom-input"
              />
            </div>
            {errors.cardNumber && (
              <p
                id="card-number-error"
                className="text-Red-400 text-xs mt-1.5 font-medium"
                role="alert"
              >
                {errors.cardNumber}
              </p>
            )}
          </div>

          {/* Exp Date & CVC row */}
          <div className="flex gap-3">
            {/* Exp Date */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="exp-month"
                className="block text-xs uppercase tracking-[0.15em] font-medium text-Purple-950 mb-2 cursor-pointer truncate"
              >
                Exp. Date (MM/YY)
              </label>
              <div className="flex gap-2">
                <div
                  className={`custom-input-wrapper flex-1 ${errors.month ? "has-error" : ""}`}
                >
                  <input
                    id="exp-month"
                    name="month"
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    value={cardData.month}
                    onChange={handleMonthChange}
                    aria-label="Expiration Month"
                    aria-invalid={errors.month ? "true" : "false"}
                    aria-describedby={
                      errors.month || errors.year ? "exp-date-error" : undefined
                    }
                    className="custom-input text-center px-2"
                  />
                </div>
                <div
                  className={`custom-input-wrapper flex-1 ${errors.year ? "has-error" : ""}`}
                >
                  <input
                    id="exp-year"
                    name="year"
                    type="text"
                    maxLength={2}
                    placeholder="YY"
                    value={cardData.year}
                    onChange={handleYearChange}
                    aria-label="Expiration Year"
                    aria-invalid={errors.year ? "true" : "false"}
                    aria-describedby={
                      errors.month || errors.year ? "exp-date-error" : undefined
                    }
                    className="custom-input text-center px-2"
                  />
                </div>
              </div>
              {(errors.month || errors.year) && (
                <p
                  id="exp-date-error"
                  className="text-Red-400 text-xs mt-1.5 font-medium"
                  role="alert"
                >
                  {errors.month || errors.year}
                </p>
              )}
            </div>

            {/* CVC */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="card-cvc"
                className="block text-xs uppercase tracking-[0.15em] font-medium text-Purple-950 mb-2 cursor-pointer"
              >
                CVC
              </label>
              <div className={`custom-input-wrapper ${errors.cvc ? "has-error" : ""}`}>
                <input
                  id="card-cvc"
                  name="cvc"
                  type="text"
                  maxLength={4}
                  placeholder="e.g. 123"
                  value={cardData.cvc}
                  onChange={handleCvcChange}
                  aria-invalid={errors.cvc ? "true" : "false"}
                  aria-describedby={errors.cvc ? "cvc-error" : undefined}
                  className="custom-input text-center px-3"
                />
              </div>
              {errors.cvc && (
                <p id="cvc-error" className="text-Red-400 text-xs mt-1.5 font-medium" role="alert">
                  {errors.cvc}
                </p>
              )}
            </div>
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            className="mt-3 w-full rounded-lg bg-Purple-950 py-3.5 text-White text-base font-medium tracking-wide hover:opacity-90 active:scale-[0.99] transition cursor-pointer"
          >
            Confirm
          </button>
        </form>
      ) : (
        <div className="grid place-items-center text-center py-4">
          <img
            src="/images/icon-complete.svg"
            alt="Completed successfully"
            className="w-20 h-20 mb-6"
          />
          <h2 className="text-2xl lg:text-3xl font-medium tracking-[0.2em] text-Purple-950 uppercase mb-3">
            Thank you!
          </h2>
          <p className="text-Gray-400 text-base mb-8">
            We've added your card details
          </p>
          <button
            type="button"
            onClick={handleContinue}
            className="w-full rounded-lg bg-Purple-950 py-3.5 text-White text-base font-medium tracking-wide hover:opacity-90 active:scale-[0.99] transition cursor-pointer"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default InputForm;
