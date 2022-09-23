import PropTypes from "prop-types";

import s from './ContactList.module.css';

const ContactList = ({ contactsData, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contactsData.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name} {number}
          <button className={s.button} type="button" name={id} onClick={deleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
    contactsData: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}