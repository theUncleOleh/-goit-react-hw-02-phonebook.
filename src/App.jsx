import React, {Component} from "react";
import  ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactItem from "./components/ContactItem/ContactItem";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";

import s from "./App.module.css";




class App extends Component {
state = {
  contacts: [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
  filter: '',
  
}

handleInputId = nanoid();




 

addContact = ({id, name, number}) => {
  const contact = {
    id,
    name,
    number
}

const findContact = this.state.contacts.find(contact => (
  contact.name.toLowerCase() === name.toLowerCase()))
if (!findContact) {
  this.setState(prevState => ({contacts: [...prevState.contacts, contact]}))
} else {
  alert(`${name} is already in contacts`)
}

  


}
deleteContact = (contactId) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId)
}))
}

changeFilter = (e) => {
  
 this.setState({filter: e.currentTarget.value})
}



getFilteredName = () => {
  const {filter, contacts} = this.state
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => (
    contact.name.toLowerCase().includes(normalizedFilter)
  ));
}







render() {
const {filter, contacts} = this.state;

  const filteredName = this.getFilteredName();

 

  return (
  <div className={s.container}>
    <ContactForm onSubmit={this.addContact}/>
    <Filter value={filter} onChange={this.changeFilter}/>
<h2 className={s.title}>Contact</h2>
<ContactList contacts={filteredName} onDeleteContact={this.deleteContact}>
  <ContactItem/>
</ContactList>
</div>
);
}
}
 export default App;
