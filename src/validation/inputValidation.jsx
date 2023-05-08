// inputValidation.js

// Check if the Name field is valid
export const isNameValid = (name) => {
    const regex = /^[A-Za-z -]{2,50}$/;
    return regex.test(name);
  }
    
  // Check if the Number type phone number field is valid
  export const isPhoneNumberValid = (phoneNumber) => {
    const regex = /^(?:\+?\d{1,3}\s)?(?:\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(phoneNumber);
  }
  
  // Check if the String type email field is valid
  export const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  }
 
  