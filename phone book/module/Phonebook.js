export class Phonebook {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    deleteContactById(id) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == id) {


            }
        }
    }


}