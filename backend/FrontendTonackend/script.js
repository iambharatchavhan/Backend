 
  
  
 
 async function  handleSum () {
  const a = document.getElementById("param1").value;
  const b = document.getElementById("param2").value;
   const apiResult = await fetch(`http://localhost:8000/sumOf-Two-Numbers?a=${a}&b=${b}`)
   const data = await apiResult.json()

    const result = document.getElementById("result")
    result.innerHTML= data.result
  }