/*
document.getElementById("get-started-btn").addEventListener("click", function (e) {
    const userName = document.getElementById("user_name").value;
    const userPassword = document.getElementById("user_password").value;
    const password = parseInt(userPassword);

    if (userName === 'nipun') {
        if (password === 123456) {
            hideElementByID('hero-section');
            showElementByID('main-section');
        }
        else {
            alert("Please Enter Valid Password");
        }
    }
    else {
        console.log("please enter Your user name")
    }

    e.preventDefault();
});

*/ 

const loadLavels = async() => {
    const url = `https://openapi.programming-hero.com/api/levels/all`;
    const res = await fetch(url);
    const data = await res.json();
    const lavels = data.data;
    displayLavel(lavels);  
}

const displayLavel = (lavels) => {
    const lessonContainer = document.getElementById("lesson-container");
    console.log(lessonContainer);

    lavels.forEach((lavel) => {
        // console.log(lavel);
        const lessonDiv = document.createElement('div');
        lessonDiv.innerHTML = `
        <button class="btn btn-sm btn-outline text-[#422ad5] text-sm rounded-sm ">
            <i class="fa-solid fa-book-open"></i>
            <span class="-ml-1 font-semibold">Lesson-${lavel.level_no}</span>
        </button>
        `;
        lessonContainer.appendChild(lessonDiv);  
    });      
}

loadLavels();










// -------- utility function

