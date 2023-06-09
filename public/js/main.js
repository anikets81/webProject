const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getinfo = async(event)=>{
    event.preventDefault(); //to not reload the page 
    let cityVal = cityName.value;
    if(cityVal==="")
    {
        city_name.innerText = `Enter City Name Before Search`;
        datahide.classList.add('data_hide');
    }
    else
    {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=749de2d27b09629a6bc5da91b553eec5`
            const response = await fetch(url);
            const data = await  response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            
            temp_real_val.innerText = arrData[0].main.temp;
        
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68'></i>"
            }
            else if(tempMood == "Clouds")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>"
            }
            else if(tempMood == "Rain")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>"
            }
            else
            {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #f1f2f6'></i>"
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = "Enter Correct City Name"
            datahide.classList.add('data_hide');
        }
       
    }

}
submitBtn.addEventListener('click', getinfo);