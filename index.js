
// Add your code here
const body = document.body;

function submitData() {
  return fetch("http://localhost:3000/users", {
    method: 'POST', 
    headers: {
      "content-type": "application/json", 
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Steve",
      email:"steve@steve.com",
    }),
  })
    .then(resp => resp.json())
    .then(object => {
      body.append(object.id);
    })
    .catch(function (error) {
      body.append('Unauthorized Access');
      console.log("no fetch for you until you figure the problem");
    });
}

submitData();

