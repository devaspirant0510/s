let xhttp = new XMLHttpRequest();
console.log(xhttp);

xhttp.open("get","books.json");
xhttp.send();
xhttp.onload = function(){
    xmlString = xhttp.responseText;
    const books = JSON.parse(xmlString)
    
    books.forEach((e)=>{
        console.log(e);
        
     document.body.innerHTML+= e.title+"<br>";
    })
    console.log(books.filter((e)=>e.title==="원딜의 기초")[0]);
    
//     const parser = new DOMParser();
// const xmlDoc = parser.parseFromString(xmlString, "text/xml");
// console.log(xmlDoc);

    

}