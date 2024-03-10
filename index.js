import axios from "axios";
import { login, logout } from "./login";

let divDt = document.querySelector("#divData");
axios
  .get("https://my-json-server.typicode.com/typicode/demo/posts")
  .then(function (response) {
    let fragment = document.createDocumentFragment();
    for (let d of response.data) {
      const p = document.createElement("p");
      p.textContent = d.title;
      fragment.append(p);
    }

    console.log(fragment, divDt);
    divDt.append(fragment);
  });

login("bbb", "aaa");

logout();

// console.log("hell world");
