const handleRegistration = (log) => {
  let res = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  };
  fetch("http://localhost:8000/users")
    .then((response) => response.json())
    .then((data) => {
      if (isExists(data, log.email)) {
        return "This email alredy exists";
      } else {
        fetch("http://localhost:8000/users", res).then(() => {
          return "You are registred!";
        });
      }
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
