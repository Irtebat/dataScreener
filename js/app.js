// Array of objects : assume it is extracted from a json file

const data=[
    {
        name:'Irtebat',
        age:21,
        city:'Patna',
        language:'Js',
        framework:'Angular',
        img:'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
        name:'Jatin Reshamya',
        age:27,
        city:'Banglore',
        language:'Python',
        framework:'Django',
        img:'https://randomuser.me/api/portraits/men/31.jpg',
    },
    {
        name:'Farhan Kapoor',
        age:43,
        city:'Delhi',
        language:'Django',
        framework:'flask',
        img:'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
        name:'Krushna Sudesh',
        age:34,
        city:'Patna',
        language:'Js',
        framework:'Electron',
        img:'https://randomuser.me/api/portraits/men/51.jpg',
    },
]

// Iterator for profiles

function iterateProfile(profiles)
{
    let index=0;
    return {
        next: function(){
            if(index<profiles.length)
            {
                return{
                    value:profiles[index++],
                    done:false,
                }
            }
            else
            {
                return{
                    done:true
                }
            }
        }  
    }
}

//Create instance of Iterator
let profiles=iterateProfile(data)

//Event Listener on clicking next button
let nextBtn=document.getElementById('nextBtn')
nextBtn.addEventListener('click',nextResume)

let currentProfile
function nextResume()
{

    //Generate next profile
    currentProfile=profiles.next()
    console.log(currentProfile);
    //
    if(currentProfile.done)
    {
            //Change nextBxt inner text
            alert('No remaining data')
            window.location.reload()
    }
    else
    {
        currentProfile=currentProfile.value
        let img=document.getElementById('imgProfile')
        htmlImg=`<img src="${currentProfile.img}" alt="...">`
        img.innerHTML=htmlImg

        let profileHtml=document.getElementById('profileHtml')
        let html=`
                    <h5 class="card-header">
                    ${currentProfile.name}
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${currentProfile.age} years old</li>
                        <li class="list-group-item">Lives in ${currentProfile.city}</li>
                        <li class="list-group-item">Proficient in ${currentProfile.language} language</li>
                        <li class="list-group-item">Knows ${currentProfile.framework} framework</li>
                    </ul>
                `
        profileHtml.innerHTML=html;
    }
    
}