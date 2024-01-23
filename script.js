function handleKeyUp(event) {
    if (event.keyCode === 13) {
        storeUsername();
    }
}

function storeUsername() {
    var username = document.getElementById("username").value;
    if (localStorage.getItem("username")) {
        document.getElementById("aside").style.display = "none";
        window.location.reload();
    } else {
        localStorage.setItem("username", username);
    }
}

if (localStorage.getItem("username")) {
    document.getElementById("aside").style.display = "none";
}
// ------------------------------------------------------------------------ ADD TASK
function addtaskopn() {
    const article = document.getElementById('article');
    const newtaskcon = document.getElementById('newtaskcon');
    const addtaskbtn = document.getElementById('addtaskbtn');
    document.getElementById('kuralinfo').style.display = 'none';
    const articleDisplayStyle = window.getComputedStyle(article).display;
    if (articleDisplayStyle === 'none') {
        addtaskbtn.innerHTML = `<p><red>- </red> Close</p>`;
        article.style.display = 'flex';
        newtaskcon.style.display = 'flex';
    } else {
        addtaskbtn.innerHTML = `<p><green>+ </green> Add task</p>`;
        article.style.display = 'none';
        newtaskcon.style.display = 'none';
    }
}
// -----------------------
// Load tasks from localStorage on page load
// window.onload = function () {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const taskcon = document.getElementById('taskcon');

//     storedTasks.forEach(task => {
//         taskcon.innerHTML += `<li onclick="done(this)" class="tasks" style="text-decoration: ${task.done ? 'line-through' : 'none'}; text-decoration-color: ${task.done ? '#db0d0d' : 'initial'}">${task.text}</li>`;
//     });
// };

// function addtask() {
//     const taskin = document.getElementById('taskin').value.trim();
//     const taskcon = document.getElementById('taskcon');
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//     if (taskin !== '') {
//         // Add the new task to the array
//         storedTasks.push({ text: taskin, done: false });

//         // Save the updated array to localStorage
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));

//         // Update the UI
//         taskcon.innerHTML += `<li onclick="done(this)" class="tasks">${taskin}</li>`;
//         document.getElementById('taskin').value = '';
//         addtaskbtn.innerHTML = `<p><green>+ </green> Add task</p>`;
//         article.style.display = 'none';
//     }
// }

// function done(element) {
//     const taskText = element.innerText.trim();
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

//     // Find the task in the array
//     const taskIndex = storedTasks.findIndex(task => task.text === taskText);

//     if (taskIndex !== -1) {
//         // Toggle the "done" status
//         storedTasks[taskIndex].done = !storedTasks[taskIndex].done;

//         // Save the updated array to localStorage
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));

//         // Update the UI
//         if (storedTasks[taskIndex].done) {
//             element.style.textDecoration = 'line-through';
//             element.style.textDecorationColor = '#db0d0d';
//         } else {
//             element.style.textDecoration = 'none';
//         }
//     }
// }
// Function to check if it's a new day
function isNewDay(lastReset) {
    const currentDate = new Date().toLocaleDateString();
    return lastReset !== currentDate;
}

window.onload = function () {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const lastReset = localStorage.getItem('lastReset') || '';
    if (isNewDay(lastReset)) {
        storedTasks.forEach(task => {
            task.done = false;
        });
        localStorage.setItem('lastReset', new Date().toLocaleDateString());
    }

    const taskcon = document.getElementById('taskcon');

    storedTasks.forEach(task => {
        taskcon.innerHTML += `<li onclick="done(this)" class="tasks" style="text-decoration: ${task.done ? 'line-through' : 'none'}; text-decoration-color: ${task.done ? '#db0d0d' : 'initial'}">${task.text}</li>`;
    });
};

function addtask() {
    const taskin = document.getElementById('taskin').value.trim();
    const taskcon = document.getElementById('taskcon');
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (taskin !== '') {
        storedTasks.push({ text: taskin, done: false });
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        taskcon.innerHTML += `<li onclick="done(this)" class="tasks">${taskin}</li>`;
        document.getElementById('taskin').value = '';
        addtaskbtn.innerHTML = `<p><green>+ </green> Add task</p>`;
        article.style.display = 'none';
        window.location.reload();
    }
}
function done(element) {
    const taskText = element.innerText.trim();
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = storedTasks.findIndex(task => task.text === taskText);
    if (taskIndex !== -1) {
        storedTasks[taskIndex].done = !storedTasks[taskIndex].done;
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        if (storedTasks[taskIndex].done) {
            element.style.textDecoration = 'line-through';
            element.style.textDecorationColor = '#db0d0d';
        } else {
            element.style.textDecoration = 'none';
        }
    }
}
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (storedTasks.length === 0) {
    const addhere = document.getElementById('addhere');
    addhere.style.display = 'block'
} else {
    addhere.style.display = 'none'
}

//------------------------------------------------------------------------- DATE DISPLAY
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var day = currentDate.getDay();
var formattedDay = (date < 10) ? '0' + date : date;
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("dateday").textContent = formattedDay + " " + dayNames[day];
document.getElementById("month").innerHTML = monthNames[month] + ' &bull; 2024';

const Thirukural = [
    [
        'அகர முதல எழுத்தெல்லாம் ஆதி<br>பகவன் முதற்றே உலகு',
        'As the letter A is the first of all letters, so the eternal God is first in the world'
    ],
    [
        'கற்றதனால் ஆய பயனென்கொல் வாலறிவன்<br>நற்றாள் தொழாஅர் எனின்',
        'What Profit have those derived from learning, who worship not the good feet of Him who is possessed of pure knowledge ?'
    ],
    [
        'மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்<br>நிலமிசை நீடுவாழ் வார்',
        'They who are united to the glorious feet of Him who passes swiftly over the flower of the mind, shall flourish long above all worlds'
    ],
    [
        'வேண்டுதல்வேண் டாமை இலானடி சேர்ந்தார்க்கு<br>யாண்டும் இடும்பை இல'
        , 'To those who meditate the feet of Him who is void of desire or aversion, evil shall never come'
    ],
    [
        'இருள்சேர் இருவினையும் சேரா இறைவன்<br>பொருள்சேர் புகழ்புரிந்தார் மாட்டு'
        , 'The two-fold deeds that spring from darkness shall not adhere to those who delight in the true praise of God'
    ],
    [
        'பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க<br>நெறிநின்றார் நீடுவாழ் வார்'
        , 'Those shall long proposer who abide in the faultless way of Him who has destroyed the five desires of the'
    ],
    [
        'தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்<br>மனக்கவலை மாற்றல் அரிது'
        , 'Anxiety of mind cannot be removed, except from those who are united to the feet of Him who is incomparable'
    ],
    [
        'அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்<br>பிறவாழி நீந்தல் அரிது'
        , 'None can swim the sea of vice, but those who are united to the feet of that gracious Being who is a sea of virtue'
    ],
    [
        'கோளில் பொறியின் குணமிலவே எண்குணத்தான்<br>தாளை வணங்காத் தலை'
        , 'The head that worships not the feet of Him who is possessed of eight attributes, is as useless as a sense without the power of sensation'
    ],
    [
        'பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்<br>இறைவன் அடிசேரா தார்'
        , ' None can swim the great sea of births but those who are united to the feet of God'
    ],
    [
        'வானின் றுலகம் வழங்கி வருதலால்<br>தானமிழ்தம் என்றுணரற் பாற்று'
        , 'By the continuance of rain the world is preserved in existence; it is therefore worthy to be called ambrosia'
    ],
    [
        'துப்பார்க்குத் துப்பாய துப்பாக்கித் துப்பார்க்குத்<br>துப்பாய தூஉ மழை'
        , 'Rain produces good food, and is itself food'
    ],
    [
        'விண்இன்று பொய்ப்பின் விரிநீர் வியனுலகத்து<br>உள்நின் றுடற்றும் பசி'
        , ' If the cloud, withholding rain, deceive (our hopes) hunger will long distress the sea-girt spacious world'
    ],
    [
        'ஏரின் உழாஅர் உழவர் புயல்என்னும்<br>வாரி வளங்குன்றிக் கால்'
        , 'If the abundance of wealth imparting rain diminish, the labour of the plough must cease'
    ],
    [
        'கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற் றாங்கே<br>எடுப்பதூஉம் எல்லாம் மழை'
        , ' Rain by its absence ruins men; and by its existence restores them to fortune'
    ],
    [
        'விசும்பின் துளிவீழின் அல்லால்மற் றாங்கே<br>பசும்புல் தலைகாண் பரிது'
        , 'If no drop falls from the clouds, not even the green blade of grass will be seen'
    ],
    [
        'நெடுங்கடலும் தன்நீர்மை குன்றும் தடிந்தெழிலி<br>தான்நல்கா தாகி விடின்'
        , 'Even the wealth of the wide sea will be diminished, if the cloud that has drawn (its waters) up gives them not back again (in rain)'
    ],
    [
        'சிறப்பொடு பூசனை செல்லாது வானம்<br>வறக்குமேல் வானோர்க்கும் ஈண்டு'
        , ' If the heaven dry up, neither yearly festivals, nor daily worship will be offered in this world, to the celestials'
    ],
    [
        'தானம் தவமிரண்டும் தங்கா வியனுலகம்<br>வானம் வழங்கா தெனின்',
        ' If rain fall not, penance and alms-deeds will not dwell within this spacious world'
    ],
    [
        'நீரின் றமையா துலகெனின் யார்யார்க்கும்<br>வானின் றமையா தொழுக்கு',
        'If it be said that the duties of life cannot be discharged by any person without water, so without rain there cannot be the flowing of water'
    ],
];
const randomIndex = Math.floor(Math.random() * Thirukural.length);
document.getElementById("thirukural").innerHTML = Thirukural[randomIndex][0] + `<p><img onclick="info(${randomIndex})" src="asserts/info.svg" alt="&#9432;"></p>`;

function info(index) {
    const article = document.getElementById('article');
    const kuralinfo = document.getElementById('kuralinfo');
    const addtaskbtn = document.getElementById('addtaskbtn');
    document.getElementById('newtaskcon').style.display = 'none';
    const articleDisplayStyle = window.getComputedStyle(article).display;
    if (articleDisplayStyle === 'none') {
        addtaskbtn.innerHTML = `<p><red>- </red> Close</p>`;
        article.style.display = 'flex';
        kuralinfo.style.display = 'flex';
        kuralinfo.textContent = Thirukural[index][1];
    } else {
        addtaskbtn.innerHTML = `<p><green>+ </green> Add task</p>`;
        article.style.display = 'none';
        kuralinfo.style.display = 'none';
    }
}