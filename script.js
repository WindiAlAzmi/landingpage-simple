// Tambahkan kode JavaScript kalian di file ini

const handleGetFormData = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var zipCode = document.getElementById("zip-code").value;
    var status = document.getElementById("status").checked;
  
    let formData = {
      name: name,
      email: email,
      city: city,
      zipCode: zipCode,
      status: status,
    };
  
    return formData;
  };
  
  //check checkbox
  const checkboxIsChecked = () => {
    var status = document.getElementById("status").checked;
    if (status) {
      return true;
    } else {
      return false;
    }
  };
  
  //check zipcode
  const isNumber = (dataZipcode) => {
    if (!isNaN(dataZipcode) && dataZipcode !== "") {
      return true;
    } else {
      return false;
    }
  };
  
  const validateFormData = (data) => {
    let { name, city, email, zipCode, status } = data;
    const checkStatus = checkboxIsChecked(status);
    const checkZipcode = isNumber(zipCode);
  
    if (
      name !== null &&
      name !== "" &&
      city !== null &&
      city !== "" &&
      email !== null &&
      email !== "" &&
      checkZipcode == true &&
      checkStatus == true
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  const submit = () => {
    const dataForm = handleGetFormData();
    let getIdWarning = document.getElementById("warning");
  
    if (validateFormData(dataForm)) {
      getIdWarning.innerHTML = "";
    } else {
      getIdWarning.innerHTML = "Periksa form anda sekali lagi";
    }
  };
  
  let getIdForm = document.getElementById("submit-form");
  getIdForm.addEventListener("click", (e) => {
    e.preventDefault();
    let getIdWarning = document.getElementById("warning");
    const dataForm = handleGetFormData();
    if (checkboxIsChecked(dataForm.status)) {
      submit();
    } else {
      getIdWarning.innerHTML = "Periksa form anda sekali lagi";
    }
  });
  