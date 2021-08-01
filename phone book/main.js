let data = [
    {
        name: 'vasya',
        company: 'OOP',
        phone: 0999999991,
    },
    {
        name: 'petya',
        company: 'GGWP',
        phone: 0999999992,
    },
    {
        name: 'galya',
        company: 'PPV',
        phone: 0999999993,
    }
];

window.localStorage.setItem('contacts', JSON.stringify(data));
function renderPhoneList() {
    let phonebook = document.getElementById('phonebook');
    let ul = document.createElement('ul');

    div.appendChild(ul);



    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = data[i];
        ul.appendChild(li);
    }

}