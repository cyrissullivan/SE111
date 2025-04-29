//Set up event listener for sumbit button

var sumbitButton = document.querySelector("#get-age");

sumbitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    calculateAnimalAge();
});

function calculateAnimalAge(){
    var firstName = document.querySelector("#first");
    var lastName = document.querySelector("#last");
    var age = document.querySelector("#age");
    var displayInfo = document.querySelector("#display-info");

    //validate form to see nothing is blank
    if(firstName.value === "" || lastName.value === "" || age.value === ""){
        alert("Please enter the missing data");
        return;
    }

    //Calculate the anime years
    var dogYears = (Number(age.value) * 7).toFixed()
    var catYears = (Number(age.value) * 4).toFixed()

    displayInfo.innerHTML = `Here is your info
                            <br>
                            <br>
                            Your Name is: ${firstName.value} ${lastName.value}
                            <br>
                            Your age in dog years: ${dogYears}
                            <br>
                            Your Age in cat years: ${catYears}`
}