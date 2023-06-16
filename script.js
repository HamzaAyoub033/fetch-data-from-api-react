fetch("https://fakestoreapi.com/products").then((data)=>{
    // console.log(data);   //JSON Format
    return data.json();  //Json convert to Object 
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td>${values.image}</td>
      </tr>`;
    });
document.getElementById("table_body")
.innerHTML=tableData;

}).catch((err)=>{
     console.log(err);
})