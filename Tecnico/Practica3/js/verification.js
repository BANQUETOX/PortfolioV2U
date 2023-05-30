
function validateForm(){
    let name = document.forms["reservation-form"]["name"].value;
    let lastName = document.forms["reservation-form"]["lname"].value;
    let entranceDate = document.forms["reservation-form"]["entrance"].value;
    let exitDate = document.forms["reservation-form"]["exit"].value;
    let roomType = document.forms["reservation-form"]["rooms"].value;

  if (name == "" || lastName == "" || entranceDate == "" || exitDate == "" || roomType == "")  {
    alert("Olvido poner datos!!!");
    return false;
  }

}

