import React, { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import Modual from '../components/Modual'

type ContactDefinition = {
  name: string,
  phoneNumber: string
}

const Home = () => {
  let [addNewContact, setAddNewContact] = useState("none")

  const [contacts, setContact] = useState<ContactDefinition[]>([])

  useEffect(() => {
     if(localStorage.getItem("Contact")) {
      const localStorageContacts:any = localStorage.getItem("Contact")
      setContact(JSON.parse(localStorageContacts))
     }
     else {
       setContact([
         {name: "Tobias", phoneNumber: "044 1234567"},
         {name: "Anna", phoneNumber: "050 1726354"},
         {name: "Jeff", phoneNumber: "040 7654321"}
        ])
      }
  }, [])

  //Function component
  const onAdd = (name: string, phoneNumber: string) => {
    console.log(name, phoneNumber);
    const newContacts = [...contacts, {name:name, phoneNumber: phoneNumber}];
    setContact(newContacts)
    setAddNewContact("none")
    saveToLocalStorage(newContacts)
  }

  const onRemove = (index: number) => {
    const newContacts = [...contacts]
    newContacts.splice(index, 1)
    setContact(newContacts)
    saveToLocalStorage(newContacts)
  }

  function saveToLocalStorage(newContacts: any) {
    localStorage.setItem("Contact", JSON.stringify(newContacts))
  }

  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div className={style.heading}>
        <h1>Contact</h1>
        <button onClick={() => setAddNewContact("")} className={style.button}>New</button>
      </div>

      <table className={style.table}>
        <tbody>

        <tr className={style.tableTr} style={{fontSize: '2rem'}}>
          <th>Name</th>
          <th>Phonenumber</th>
          <th></th>
        </tr>
        {contacts.map((contact, i) =>
        <tr className={style.tableTr} key={contact.name + contact.phoneNumber}>
          <td>{contact.name}</td>
          <td>{contact.phoneNumber}</td>
          <td>
            <button onClick={() => onRemove(i)}>X</button>
          </td>

        </tr>
        )}
        </tbody>
      </table>
      
      
          
      <div style={{display: addNewContact}}>
        <Modual onSubmit={onAdd}/>
      </div>

    </div>
  )
}

export default Home