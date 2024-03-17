// import axios from "axios";
// import { login, logout } from "./login";

// let divDt = document.querySelector("#divData");
// axios
//   .get("https://my-json-server.typicode.com/typicode/demo/posts")
//   .then(function (response) {
//     let fragment = document.createDocumentFragment();
//     for (let d of response.data) {
//       const p = document.createElement("p");
//       p.textContent = d.title;
//       fragment.append(p);
//     }

//     console.log(fragment, divDt);
//     divDt.append(fragment);
//   });

// login("bbb", "aaa");

// logout();

// console.log("hell world");

document.getElementById("availSpecific").addEventListener("click", (e) => {
  fetch("http://localhost:5220/api/Avails/specific", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhcHJvcG8iLCJqdGkiOiJhYmNlMDUxZC0wMDY4LTRlNGQtYTU1Ny02MjhlZjg1YmMzZTYiLCJleHAiOjE3MTAzNjcwMTcsImlzcyI6Imh0dHA6Ly9zaXJva3lncm91cC5jb20iLCJhdWQiOiJodHRwOi8vc2lyb2t5Z3JvdXAuY29tIn0.Inx8MNuMKgM5yA3ymQtd38InogHmgUpSQhupfbD5yo8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      responseURI: "https://www.SAMResponse.com?int_request_id={request}",
      uid_panel: [],
      uid_sales_market: [3],
      uid_media_product: [2216584],
      uid_sales_area: [],
      dte_start: "2022-09-26T00:00:00",
      dte_end: "2022-11-27T00:00:00",
      crmNumber: "2019-0018365",
      advancedFilters: {
        uid_product_category: 0,
        uid_stream: [],
        uid_sales_area: [],
        uid_inactive_asset: [],
        uid_panel_read: [],
        uid_panel_direction: [],
        uid_shelter_size: [],
        boo_exclude_restricted: false,
        boo_sales_characteristics_filter_for_all: true,
        uid_sales_characteristics: [],
      },
    }),
  });
});
