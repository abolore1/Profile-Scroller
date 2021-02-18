    let data = [
    {
        name: "Otutu Qudus",
        age: 37,
        gender: "male",
        preference:"female",
        location: 'Lagos',
        image:"images/pixone.jpg"
    },
    {
        name: "Micheal Whales",
        age: 37,
        gender: "male",
        preference:"female",
        location: 'Ohio',
        image:"images/pixtwo.jpg"
    },
    {
        name: "Lola Adewunmi",
        age: 22,
        gender: "female",
        preference:"male",
        location: 'Oyo',
        image:"images/ladypix.jpg"
    },
    {
        name:'Angelina Deborah',
        age:32,
        gender:'female',
        preference:'male',
        location:'Boston MA',
        image:"https://randomuser.me/api/portraits/women/65.jpg"
   },
   {
        name:'Sarah Keem',
        age:36,
        gender:'female',
        preference:'male',
        location:'Miami FL',
        image:"https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
        name:'Adewale Olawale',
        age:34,
        gender:'male',
        preference:'female',
        location:'Osun',
        image:"https://randomuser.me/api/portraits/men/70.jpg"
  }
  
]
//passing JSON data
let profiles = profileIterator(data)
//Call first Profile 
nextProfile()
//Next event
document.getElementById('next').addEventListener('click',nextProfile)

//Next Profile Display
function nextProfile(){
    let currentProfile = profiles.next().value //current profile value
    //Displaying on DOM
     if(currentProfile!==undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">I am ${currentProfile.gender} looking for ${currentProfile.preference}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>`
       document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    } else { //No more profile
         window.location.reload() }
    
}
//Profile Iterator function
function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next:function(){
            return nextIndex < profiles.length?
            {value:profiles[nextIndex++], done:false}:{done:true}
        }
    }
}
