 
  
  
 
 async function  handleSum () {
  const principal  = document.getElementById("param1").value;
  const rate = document.getElementById("param2").value;
  const time = document.getElementById("param3").value;

  const total = document.getElementById("total")
  const interest = document.getElementById("interest")

   const apiResult = await fetch(`http://localhost:8000/interest?principal=${principal}&rate=${rate}&time=${time}`)
   const data = await apiResult.json()
   
   console.log(data)
   total.innerHTML = data.total
   interest.innerHTML=data.interest

  }