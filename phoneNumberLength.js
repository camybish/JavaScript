const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length === validLength) {
      true;
    } else {
      false;
    }
  };


module.exports = isValidLength;
