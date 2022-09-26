function getRequest() {
   $.ajax({
       url: "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/students",
       method: "GET",
       success: (data) => {
           data.map((data) => createTh(data));
       },
       error: (error) => console.log("data not avaliable", error),
   });
}
getRequest();

let table = document.createElement("table");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
let setButton = document.createElement("button");
let inputName = document.createElement("input");

setButton.addEventListener("click", () => {
   inputName.classList.add("newName");
   let setName = document.querySelector(".newName");
   if (setName !== null) {
       $.ajax({
           url: "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/students",
           type: "POST",
           dataType: "JSON",
           data: {
               name: setName.value,
           },
           success: function (data) {
               console.log(data);
           },
           error: (error) => {
               console.log(error);
           },
       });
       table.innerHTML = " ";
       getRequest();
   }
});

let createTh = (params) => {
   let { name, marks, email, id } = params;
   let tbody = document.createElement("tbody");
   let block = $(".block");
   block.append(table);
   table.append(thead);
   thead.append(tr);

   function getThead(params) {
       for (let i = -1; i < params.length; i++) {
           if (tr.childElementCount <= params.length) {
               let th = document.createElement("th");
               if (tr.childElementCount <= 0) {
                   tr.append(th);
                   th.innerText = " ";
               } else {
                   tr.append(th);
                   th.innerText = `Home Work ${i + 1}`;
               }
           }
       }
   }
   getThead(marks);

   function getTbody(params, marks) {
       for (let key in params) {
           let trs = [];
           let tds = [];
           let gerNewMarks = [];
           let tr1 = document.createElement("tr");
           function createTh(params, marks) {
               for (let i = 0; i < marks.length + 1; i++) {
                   let td = document.createElement("td");
                   tds.push(td);
                   if (tds.length <= 1) {
                       let deleteButton = document.createElement("button");
                       td.innerText = `${params.name}`;
                       td.append(deleteButton);
                       deleteButton.innerText = "Delete";
                       deleteButton.addEventListener("click", () => {
                           $.ajax({
                               url: `https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/students/${id}`,
                               type: "DELETE",
                               dataType: "JSON",
                               success: function (data) {
                                   console.log(data);
                               },
                               error: (error) => {
                                   console.log(error);
                               },
                           });
                           tr1.innerHTML = "";
                       });
                   } else {
                       let input = document.createElement("input");
                       input.setAttribute("value", `${marks[i - 1]}`);
                       td.append(input);
                       input.addEventListener("blur", () => {

                           gerNewMarks = [];
                           for (i = 1; i <= tr1.childElementCount - 1; i++) {
                               gerNewMarks.push(tr1.children[i].children[0].value);
                           }
                           if (trs[0].children[0].firstChild.data === params.name) {
                               $.ajax({
                                   url: `https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/students/${id}`,
                                   type: "PUT",
                                   dataType: "JSON",
                                   data: {
                                       marks: gerNewMarks,
                                   },
                                   success: function (data) {
                                       console.log(data);
                                   },
                                   error: (error) => {
                                       console.log(error);
                                   },
                               });
                           }
                       });
                   }
               }
           }
           createTh(params, marks);

           function getTrs(td) {

               for (let i = 0; i <= td.length-1; i++) {
                     tr1.append(td[i]);
               }
               trs.push(tr1);
           }
           getTrs(tds);
           for (let i = 0; i <= trs.length; i++) {
               if (typeof trs[i] !== "undefined" && tbody.childElementCount === 0) {
                   tbody.append(trs[i]);
               } else {
                   createTh(params, marks);
               }
           }
       }
   }
   table.append(tbody);
   let setPerson = document.querySelector(".set-person")
   setPerson.append(setButton);
   setPerson.append(inputName);
   setButton.innerText = "Set";
   getTbody(params, marks);
};
