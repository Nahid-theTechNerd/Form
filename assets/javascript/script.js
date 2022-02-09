let submit = document.querySelector("#submit");
const formData = new FormData();

submit.addEventListener("click", (e) => {
  e.preventDefault();
  sendData();
});

const sendData = async () => {
  let uname = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#contact").value;
  let url = document.querySelector("#url").value;
  let comment = document.querySelector("#comment").value;
  let myText = document.querySelector(".mytext");
  let formData = {
    name: uname,
    email,
    phone,
    url,
    comment,
  };

  try {
    const rawResponse = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const content = await rawResponse.json();
    let userName = content.json.name.split(/(\s+)/);
    userName = userName[0];
    myText.innerText = `Hey ${userName}, Your work has been submitted!`;
  } catch (error) {
    console.log(error);
  }
};
