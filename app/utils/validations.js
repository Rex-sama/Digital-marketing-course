export const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
};

export const formatNumber = (number) => {
    return ("0" + number).slice(-2)
}

export const calculateAge = (dobString) => {
    const today = new Date();
    const dob = new Date(dobString);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      age--; 
    }
    return age;
  }