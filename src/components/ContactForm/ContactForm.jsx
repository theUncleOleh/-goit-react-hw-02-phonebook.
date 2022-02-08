import React from "react";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css"

 
class ContactForm extends React.Component {
    nameId = nanoid();
    state = {
    name: '',
    number: '',
    id: ''
}



handleChange = e => {
    const {name, value} = e.currentTarget;
 this.setState({[name] : value });
}

 handleSubmit  = e => {
        e.preventDefault();
 
  this.props.onSubmit(this.state)
  this.reset()
// onSubmit({
    
//     name: event.currentTarget.elements.name.value,
//    id: nanoid(),
//    number: event.currentTarget.elements.number.value
// })  
}
reset = () => {
this.setState({
    id: '',
    name: '',
    number: ''
})
}
    render() {
        return (
     <div  className={s.container}>
          <h1 className={s.header}>Phonebook</h1>
         <form onSubmit={this.handleSubmit}>
            
            <div className={s.wrapper}>
                <h2 className={s.title}>Name</h2>
             <input className={s.input}
             type="text" 
             name="name"
             value={this.state.name}
            onChange={this.handleChange}
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
         />
         <h2 className={s.title}>Number</h2>
         <input className={s.input}
       type="tel"
       name="number"
       value={this.state.number}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       onChange={this.handleChange}
     />
           <button type="submit" className={s.button}>Add contact</button>
           </div>
             </form>
             </div> 
        ); 
      }
 }

            
export default  ContactForm;