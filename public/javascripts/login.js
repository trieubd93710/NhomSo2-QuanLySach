document.getElementById("sign-in").addEventListener("click", () => {
  let emailValue = document.getElementById("email").value;
  let passValue = document.getElementById("pass").value;

  var url = "http://localhost:3000/login";

  async function postJSON(data) {
    try {
      const response = await fetch(url, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
      localStorage.setItem(result.code.text, result.token);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const data = { email: `${emailValue}`, password: `${passValue}` };
  postJSON(data);
});
