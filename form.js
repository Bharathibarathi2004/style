let firstname=document.getElementById('firstname')
let lastname=document.getElementById('lastname')
let gender=document.querySelectorAll('[name=gender]')
let qualification=document.querySelectorAll('[name=qualification]')
let state=document.getElementById('state')
let district=document.getElementById('district')
let msg=document.getElementsByClassName('msg')
let form=document.getElementById('form')
let TamilNadu=['Chennai','Kirsnagiri','Dharmapuri','Thuththukodi']
let Goa=['Kadapa','Nellore','Guntur','Prakasam']
let Kerala=['Kochi','Idukki','Kannur','Hanumakonda']
let Rajasthan=['Barma','Ajmer','Jaipur','Alwar']


// let districtValue=()=>{
//     alert("Select The District")
    
//     if(state.value!=""){
//         if(state.value=="TamilNadu")
//             district.innerHTML=""
//             TamilNadu.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//         })
//     }
//         if(state.value=="Goa"){ 
//             district.innerHTML=""
//             Goa.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//         })
//     }
//         if(state.value=="Kerala"){
//             district.innerHTML=""
//             Kerala.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//         })
//     }
//     if(state.value=="Rajasthan") { 
       
//             district.innerHTML=""
//             Rajasthan.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//         })
//     }
// }

let districts_values={
     TamilNadu:['Chennai','Kirsnagiri','Dharmapuri','Thuththukodi'],
     Goa:['Kadapa','Nellore','Guntur','Prakasam'],
     Kerala:['Kochi','Idukki','Kannur','Hanumakonda'],
    Rajasthan:['Barma','Ajmer','Jaipur','Alwar']
}
let districtValue=()=>{
    if(state.value!=""){
        for(let keys in districts_values){
            if(state.value==keys){
                district.innerHTML=""
                districts_values[keys].map((dst)=>{
                    let option=document.createElement('option')
                    option.innerHTML=dst
                    district.appendChild(option)
                })
            }
        }
    }
}


// console.log(firstname)
// console.log(lastname)
// console.log(gender)
// console.log(qualification)
// console.log(state)
// console.log(district)




let formsubmit=(e)=>{
    e.preventDefault()

    if (firstname.value==""){
    }
    if (firstname.value==""){
        msg[0].innerHTML='Please Enter the First Name'
        msg[0].style.marginTop="-28px"
        msg[0].style.color="red"
    }  
    if (lastname.value==""){
        msg[1].innerHTML='Please Enter the Last Name'
         msg[1].style.marginTop="-28px"
        msg[1].style.color="red"
    }
    let gendervalue=0;
    gender.forEach((data)=>{
        // console.log(data.value,data.checked)
        if (data.checked)
            gendervalue+=1;
    })
    if(gendervalue==0){
        msg[2].innerHTML='Please Select Gender'
        msg[2].style.marginTop="-20px"
        msg[2].style.color="red"
    }
    let qualificationvalue=0;
    qualification.forEach((data)=>{
        if (data.checked){
            qualificationvalue+=1;
        }
    })
    if(qualificationvalue==0){
        msg[3].innerHTML='Please Select Qualification'
        msg[3].style.marginTop="-20px"
        msg[3].style.color="red" 
    }
    if(state.value==""){
        msg[4].innerHTML='Please Select State'
        msg[4].style.marginTop="-20px"
        msg[4].style.color="red" 
    }
    if(district.value==""){
        msg[5].innerHTML='Please Select District'
        msg[5].style.marginTop="-20px"
        msg[5].style.color="red" 
    }
      
}
form.addEventListener('submit',formsubmit)