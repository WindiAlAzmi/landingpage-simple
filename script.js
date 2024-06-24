document.addEventListener("DOMContentLoaded", () => {//this code runs after html runs

  //get many data
  const handleGetFormData = () => {
    let getIdName = document.getElementById("name");
    let getIdCity = document.getElementById("city");
    let getIdEmail = document.getElementById("email");
    let getIdZipCode = document.getElementById("zip-code");
    let getIdStatus = document.getElementById("status");

    const data = {
      name: getIdName.value,
      city: getIdCity.value,
      email: getIdEmail.value,
      zipcode: getIdZipCode.value,
      status: getIdStatus.checked,
    };

    return data;
  };

  //check checkbox
  const checkboxIsChecked = (dataStatus) => {
    if (dataStatus) {
      return true;
    } else {
      return false;
    }
  };

  //check zipcode
  const isNumber = (dataZipcode) => {
    if (!isNaN(dataZipcode)) {
      return true;
    } else {
      return false;
    }
  };

  const validateFormData = (data) => {
    let { name, city, email, zipcode, status } = data;    
    const checkStatus =  checkboxIsChecked(status);
    const checkZipcode =  isNumber(zipcode);


    if (
      name !== null &&
      city !== null &&
      email !== null &&
      checkZipcode == true && checkStatus == true
    ) {
      return true;
    } else {
      return false;
    }
  };

  const submit = () => {
    const dataForm = handleGetFormData();
    let getIdWarning = document.getElementById("warning");
    let getIdSuccess = document.getElementById("success");
    const isValidate = validateFormData(dataForm);

    switch (isValidate) {
      case true:
        getIdWarning.style.display = "none";
        getIdSuccess.style.display = "block";
        getIdSuccess.style.backgroundColor = "green";
        getIdSuccess.style.borderRadius="20px";
        setTimeout(() => {
            getIdSuccess.style.display = "none";
          }, 3000);

        break;
      case false:
        getIdWarning.style.display = "block";
        setTimeout(() => {
          getIdWarning.style.display = "none";
        }, 3000);
        break;
    }
  };

  let getIdForm = document.getElementById("submit-form");
  getIdForm.addEventListener("click", (e) => {
    e.preventDefault();
    submit();
  })
  
});
