var calBtn = document.querySelector('#bmi-btn');
var displayCalBMI = document.querySelector('.result');
var displayBMICategory = document.querySelector('.category');

calBtn.addEventListener('click', function afterClick(e){
    e.preventDefault();

    var height = parseInt(document.querySelector('#height').value);
    var weight = parseInt(document.querySelector('#weight').value);

    if(height === '' || height < 0 || isNaN(height)){
        displayCalBMI.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        displayCalBMI.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else {
        var res = (weight/((height*height)/10000)).toFixed(2);
        displayCalBMI.innerHTML = res;

        if(res < 18.60){
            displayBMICategory.innerHTML = "Under Weight";
        }
        else if(res >= 18.60 && res <= 24.90){
            displayBMICategory.innerHTML = "Normal";
        }
        else{
            displayBMICategory.innerHTML = "Over weight";
        }
    }

    
    


    




})


