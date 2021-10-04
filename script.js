function compute()
{
    var principal = document.getElementById("principal").value;
    // checks if the Amount is empty or less then or =0
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //calculates the interest Amount
    var interest = principal * years * rate / 100;

    // set the date to new date everytime
    var yearr =  new Date().getFullYear() + parseInt(years);

    // Displays the result
    var display_Res = document.getElementById("result");
    display_Res.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearr + "</span> <br>";
}
// udate the interest range number everytime you drag
function updateRate()
{
    var rateval = document.getElementById("rate").value;
      document.getElementById("rate_val").innerText=rateval;
}  
   