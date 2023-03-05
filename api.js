function getAllPosts() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts");
  request.responseType = "json";
  request.setRequestHeader("content-type", "application/json");
  request.setRequestHeader("content-type", "application/json");
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      console.log("Getting Posts successfully");
      posts = request.response;
      for (post of posts) {
        console.log(post.title);
        document.getElementById("title").innerHTML += `<p>${post.title}</p>`;
      }
    } else {
      alert("Bad URL");
    }
  };
}
function getSinglePosts() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  request.responseType = "json";
  request.setRequestHeader("content-type", "application/json");
  request.setRequestHeader("content-type", "application/json");
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
        console.log("Getting a specific Post successfully");
        post = request.response;
        console.log(post.title);
        document.getElementById("title").innerHTML += `<p>${post.title}</p>`;
    } else {
      alert("Bad URL");
    }
  };
}
function getAllWithSpecificUserId() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1");
  request.responseType = "json";
  request.setRequestHeader("content-type", "application/json");
  request.setRequestHeader("content-type", "application/json");
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      console.log("Getting a specific Post successfully with query params");
      posts = request.response;
      for (post of posts) {
        console.log(post.title);
        document.getElementById("title").innerHTML += `<p>${post.title}</p>`;
      }
    } else {
      alert("Bad Request From getAllWithSpecificUserId");
    }
  };
}
function createPost() {
  let request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/posts");
  request.responseType = "json";
  let body = {
    userId: 1,
    title: "Fork for me then observ",
    body: "lorem upsum ",
  };
  request.send(body);
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      console.log(body);
      console.log(request.status);
      console.log("Post was created successfully");
    } else {
      alert("Sorry ERROR 404");
    }
  };
}
function updatePost() {
  let request = new XMLHttpRequest();
  request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
  request.responseType = "json";
  let body = {
    userId: 1,
    title: "Fork for me then observ 222",
    body: "lorem vvvv upsum ",
  };
  request.send(body);
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      console.log(body);
      console.log(request.status);
      console.log("Post was Updated successfully");
    } else {
      alert("Sorry ERROR 404");
    }
  };
}
function deletePost() {
  let request = new XMLHttpRequest();
  request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
  request.responseType = "json";
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      console.log();
      console.log(request.status);
      console.log("Post HAS BEEN Deleted successfully");
    } else {
      alert("Sorry ERROR 404");
    }
  };
}
// getAllPosts(); 
getSinglePosts()
//getAllWithSpecificUserId();
// createPost();
//updatePost()
//deletePost()
