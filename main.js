//Select the DOM nodes
const listEl = document.querySelector('.email-list')

//Inizializzo la lista dove caricare le 10 mail
let listMail = []

//Creo una funzione per generare la mail e pusharla nella array
function randomEmailDom() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res => {

            //console.log(res);
            //console.log(res.data.response)

            listMail.push(res.data.response)

            listEl.innerHTML = ''

            listMail.forEach((mail) => {

                const listMail = document.createElement('li.list-group-item')
                listMail.textContent = mail
                listEl.appendChild(listMail)
            })

        })
}

//Ciclo da 1 a 10 per far lavorare la funzione 10 volte e caricare la array lista con 10 email randomiche diverse 
for (let i = 1; i <= 10; i++) {
    randomEmailDom()
}






