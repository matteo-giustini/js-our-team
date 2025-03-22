// DOM
const teamContainerElm = document.getElementById("card-container");
const memberFormElm = document.getElementById("form");
const nameElm = document.getElementById("name");
const roleElm = document.getElementById("role");
const imageElm = document.getElementById("image");
const emailElm = document.getElementById("email");

// INIT VARIABLES
const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        img: "male1.png",
        email: "marcobianchi@team.com"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        img: "female1.png",
        email: "laurarossi@team.com"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        img: "male2.png",
        email: "giorgioverdi@team.com"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        img: "female2.png",
        email: "martaipsum@team.com"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        img: "male3.png",
        email: "robertolorem@team.com"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        img: "female3.png",
        email: "danielaamet@team.com"
    }
];

// FUNCTION TO CREATE CARD
function createCardMember(member) {
    const { name, role, img, email } = member;
    return `
        <div class="col">
            <div class="card bg-black text-white p-3 h-100">
                <img src="img/${img}" alt="${name}" class="card-img-top img-fluid">
                <div class="card-body text-center">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
                    <p class="text-primary">${email}</p>
                </div>
            </div>
        </div>`;
}

// RENDER TEAM ON PAGE LOAD
function renderTeam() {
    teamContainerElm.innerHTML = teamMembers.map(createCardMember).join("");
}
renderTeam();

// EVENT LISTENER FOR FORM SUBMISSION
memberFormElm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameElm.value.trim();
    const role = roleElm.value.trim();
    const email = emailElm.value.trim();
    const imageFile = imageElm.files[0];

    if (!name || !role || !email) {
        alert("Please fill in all required fields!");
        return;
    }

    let img = "default.png"; // Immagine di default se non viene caricata
    if (imageFile) {
        img = URL.createObjectURL(imageFile); // Converte l'immagine in un URL temporaneo
    }

    const newMember = { name, role, img, email };

    // AGGIUNGO IL NUOVO MEMBRO ALL'ARRAY
    teamMembers.push(newMember);

    // AGGIUNGO LA CARD ALLA PAGINA
    teamContainerElm.innerHTML += createCardMember(newMember);

    // RESET FORM
    memberFormElm.reset();
});
