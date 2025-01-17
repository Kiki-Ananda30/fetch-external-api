console.log("Hello, world!");

const endpoint = "https://reqres.in/api/users";

fetch(endpoint, {
  method: "post",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    email: "johnDoe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    avatar:
      "https://media.istockphoto.com/id/637234116/id/foto/melakukannya-untuk-cinta-kesuksesan.webp?s=2048x2048&w=is&k=20&c=8YeSi_YX-rRW4pUyZg7P9OkW9rs5i9xsNKxfwcdiyyY=",
    email: "janeDoe@gmail.com",
    firstName: "Jane",
    lastName: "Doe",
  }),
})
  .then((result) => result.json())
  .then((data) => console.log(data));
