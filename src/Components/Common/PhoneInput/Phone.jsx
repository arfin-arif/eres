import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Phone.css"; // Import the custom CSS

const Phone = () => {
  const [phone, setPhone] = useState("+123 456789"); // Define state for the phone number

  return (
    <div>
      <PhoneInput
        country={"us"}
        value={phone} // Use the state variable
        onChange={(phone) => setPhone(phone)} // Update the state variable
        inputClass="phone-input" // Apply the custom style class to the input
        // placeholder="+965 78459452"
        dropdownClass="dropdown"
      />
    </div>
  );
};

export default Phone;
