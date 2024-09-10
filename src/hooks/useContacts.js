import { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from '../lib/firebase';


export const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        const contactList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContacts(contactList);
      } catch (error) {
        console.error('Erro ao buscar documentos: ', error);
      }
    };

    fetchContacts();
  }, []);

  const addContact = async (data) => {
    try {
      await addDoc(collection(db, 'contacts'), data);
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactList);
    } catch (error) {
      console.error('Erro ao adicionar documento: ', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactList);
    } catch (error) {
      console.error('Erro ao excluir documento: ', error);
    }
  };

  const updateContact = async (id, data) => {
    try {
      await updateDoc(doc(db, 'contacts', id), data);
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactList);
    } catch (error) {
      console.error('Erro ao atualizar documento: ', error);
    }
  };

  return {
    contacts,
    addContact,
    deleteContact,
    updateContact
  };
};
