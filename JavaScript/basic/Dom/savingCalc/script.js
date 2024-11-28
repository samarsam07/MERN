// Initialize Feather icons
feather.replace();

// Roadmap Step 1: Select DOM elements
const goalAmountInput=document.getElementById("goal-amount");
const currentSavingInput=document.getElementById("current-savings");
const monthyContributionInput=document.getElementById("monthly-contribution");
const calculateBtn=document.getElementById("calculate-btn");
const progressBar=document.getElementById("progress-bar");
const result=document.getElementById("result");
// Roadmap Step 2: Add event listener for calculate button
calculateBtn.addEventListener("click",()=>{
 // Roadmap Step 3: Validate user input
 const goalAmount=parseFloat(goalAmountInput.value);
 const savingAmount=parseFloat(currentSavingInput.value);
 const monthlyContribution=parseFloat(monthyContributionInput.value);
 if(isNaN(goalAmount)||isNaN(savingAmount)||isNaN(monthlyContribution)){
    result.textContent="Please enter valid number";
    result.classList.add("show")
    return;
 }
 // Roadmap Step 4: Calculate remaining amount and months to reach goal
 const remainingAmount=goalAmount-savingAmount;
 const monthsToGoal=Math.ceil(remainingAmount/monthlyContribution);
 const progressPercentage=(savingAmount/goalAmount)*100;
// Roadmap Step 5: Update progress bar based on current savings

progressBar.style.width=`${progressPercentage}%`;
// Roadmap Step 6: Display result based on the savings progress
result.classList.remove("show");
// Roadmap Step 7: Handle UI updates and transitions for result display
setTimeout(() => {
    if(savingAmount>=goalAmount){
        result.innerHTML=`"Congrateulations,Your Saving have bloomed to reach your goal!."`
    }else{
        result.innerHTML=`keep nurturing your savings! you will reach your goals in ${monthsToGoal} months.`
    }
    result.classList.add("show");

},100);
})








