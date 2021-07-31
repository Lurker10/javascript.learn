import { Phonebook} from "./module/Phonebook.js";
let  phonebook = new Phonebook()
phonebook.addFromArray([{name: 'danya'}, {name: "vanya"}])
console.log(phonebook); 
const ul = phonebook.render();
