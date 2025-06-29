import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: 'gerenal' | 'support';
  message: string;
  consent: boolean;
}


export const ContactForm = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  
    const onSubmit = (data: FormData) => {
    console.log('Submitted:', data);
  };
  
  
  return (
    <div className={styles.pageWrapper}>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} noValidate></form>
        
        
        <div className={styles.formContainer}>
            <h2>Contact Us</h2>

            <div className={styles.nameSurname}>
            <div className={styles.inputRow}>
            <label >First Name*</label>
            <input 
            id='firstName'
            type="text"
            aria-invalid={!!errors.firstName}
            aria-describedby='firstName-error' />
            </div>

            <div className={styles.inputRow}>
            <label >Last Name*</label>
            <input type="text" />
            </div>
            </div>


            <div className={styles.inputRow}>
            <label >Email Address*</label>
            <input type="text" />
            </div>


            <div className={styles.inputRow}>
            <label >Query Type*</label>
            <div className={styles.radioGroup}>
                <label> <input type="radio" value="general" />General Enquiry</label>

                <label> <input type="radio" value="general" />Support Request</label>
            </div>

            <div className={styles.inputRow}>
            <label >Message*</label>
            <input type="text" />
            </div>
           

            
            <div className={styles.checkbox}>
            
            <input type="checkbox" />
            <p>I consent being contacted by team</p>
            </div>

            <button className={styles.submitButton} type='submit'> Submit </button>
            
            </div>

          
            
        
        
        
        
        
        
        </div>






    </div>
  )
}
