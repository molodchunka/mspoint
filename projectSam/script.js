function guess() {
    var trNumber = 5;
    var ourNumber = prompt("Введите число");

    if (ourNumber > trNumber) {
        alert("число должно быть меньше");
        return guess();
    } else if (ourNumber == trNumber) {
        return alert("вы угадали юху");
    } else {
        alert("число должно быть больше");
        return guess();
    }

}

function reminder(){
    alert("ты здесь слишком долго")
    window.close();
}

//setTimeout(reminder,3000);


function valideForm(){
    alert("ПРОВЕРКА ФОРМЫ");
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    //console.log(name);
    //console.log(password);
    
    var reg_name=/^[а-яa-z]+$/i;
    var reg_password =/^[a-z0-9]{5,100}$/i; 
    
    if (reg_name.test(name) == false){
        alert("Ошибка в поле ФИО");
    }
        
    if (reg_password.test(password) == false){
        alert("Ошибка в поле пароль");
    }
        
}

document.querySelector(".button").addEventListener("click", valideForm);











function cvet() {
    var trcvet = "зеленый";
    var tootrcvet = "зелёный";
    var ourcvet = prompt("если смешать синий и жёлтый, какой цвет получится?");

    if (ourcvet == trcvet) {
        alert("вы совершенно правы!");
        
    } else if (ourcvet == tootrcvet) {
        return alert("вы молодец юху");
    } else if (ourcvet=="голубой"){
        alert("к сожалению, вы не правы... слишком ХОЛОДНО");
        return cvet(); 
    } else if (ourcvet== "фиолетовый"){
        alert("к сожалению, вы не правы... слишком ХОЛОДНО");
        return cvet();
    }else if (ourcvet=="красный"){
        alert("к сожалению, вы не правы... слишком ТЕПЛО");
        return cvet();    
    }else if (ourcvet=="оранжевый"){
        alert("к сожалению, вы не правы... слишком ТЕПЛО");
        return cvet();    
    }else if (ourcvet=="бело-сине-красный"){
        alert("вы патриот, но, к сожалению, вы не правы...");
        return cvet();
    }else{
        alert("к сожалению, вы не правы")
        return guess();
    }
}

