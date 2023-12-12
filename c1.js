
let enddate="23 Oct 2023 04:37 AM"
document.getElementById("end-date").innerText=enddate;
// Date is now dynamic

// Now the time for Inputs
const inputs=document.querySelectorAll("input")

function clock (){
    const end =new Date(enddate)
    const now=new Date()
    console.log(end);
    console.log(now);

    // Her ethe values comes in mili second so will converting it into seconds
  const diff=(end-now)/1000;
console.log(diff);

// first we will go with days;
// converting the difference  into days
inputs[0].value=Math.floor(diff/3600/24);


inputs[1].value=Math.floor(diff/3600)%24


inputs[2].value=Math.floor(diff/60)%60


inputs[3].value=Math.floor(diff)%60;
}
clock()

// setInterval(clock,1000 )
