import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FcCheckmark } from 'react-icons/fc';
/* import Modal from '@/components/modal/Modal'; */

// styles
import styles from './Contact.module.scss';

/* const ModalContent = ({ name }) => {
  return (
    <div
      style={{
        width: '80%',
        margin: '3rem auto',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <h2 style={{ color: 'white' }}>Thanks for signing up {name}</h2>
      <p style={{ color: 'white' }}>We will email you more info shortly</p>
    </div>
  );
}; */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [validationMessage, setValidationMessage] = useState('');
  /*  const [modalOpen, setModalOpen] = useState(false); */

  const router = useRouter();

  /*  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true); */
  const form = useRef();

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    console.log(e.target.value);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    form.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = form.current.checkValidity();
    if (isValid) {
      console.log('is valid');
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SENDER_ID,
          process.env.NEXT_PUBLIC_TEMP_ID,
          form.current,
          process.env.NEXT_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
      setValidationMessage(
        'Thanks you for getting in touch with funkcamp, we will answer you email shortly!'
      );
      resetForm();
      setTimeout(() => {
        router.push('/');
      }, 5000);
    } else {
      console.log('is not valid');
      setValidationMessage(
        'Oops! My funky friend, It looks like you missed something. Please check and fill in all required fields.'
      );
    }
  };

  console.log(`name: ${formData.name} \n
        email: ${formData.email}  \n
        subject: ${formData.subject} \n
        message: ${formData.message}`);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValidationMessage('');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [validationMessage]);

  return (
    <div className={styles.contact}>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
      >
        Contact &
      </motion.h2>
      <motion.h2
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      >
        Registration
      </motion.h2>

      {/* FORM === FORM */}

      <motion.form
        className={styles.contact_form}
        noValidate
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
      >
        <label>Name</label>
        <div className={styles.input_field}>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={onChangeHandler}
            required
            minLength={3}
            maxLength={15}
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <label>Email</label>
        <div className={styles.input_field}>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={onChangeHandler}
            required
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <label>Subject</label>
        <div className={styles.input_field}>
          {/* <input
            type='text'
            name='subject'
            value={form.subject || ''} 
          onChange={onChangeHandler}
            minLength={5}
            maxLength={30}
            required
          /> */}
          <select
            name='subject'
            value={form.subject}
            onChange={onChangeHandler}
            required
          >
            <option value='Registration'>Register</option>
            <option value='Question'>Question</option>
          </select>
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <label>Message</label>
        <div className={styles.input_field}>
          <textarea
            type='textarea'
            name='message'
            value={form.message}
            onChange={onChangeHandler}
            minLength={20}
            maxLength={200}
            required
          />
          <span className={styles.check_icon}>
            <FcCheckmark />
          </span>
        </div>
        <input
          className={styles.submit_btn}
          type='submit'
          name='submit'
          value='Submit'
          /* disabled={!isValid} */
          /*  onClick={() => (modalOpen ? close() : open())} */
        />
        <div className={styles.message}>{validationMessage}</div>
      </motion.form>
      {/* {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<ModalContent name={form.from_name} />}
        ></Modal>
      )} */}
    </div>
  );
};

export default Contact;
