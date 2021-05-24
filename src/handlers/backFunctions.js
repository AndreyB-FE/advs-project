const handleRegistration = (log) => {
  const URL = "http://localhost:8000/users";
  let req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  };

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return isExists(data, log.email);
    })
    .then((isExists) => {
      if (isExists) console.log("Exists");
      else {
        fetch(URL, req)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

function isExists(allUsers, email) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email === email) {
      return true;
    }
  }
  return false;
}

export default handleRegistration;
