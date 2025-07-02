import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: 'general' | 'support';
  message: string;
  consent: boolean;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Submitted:', data);
  };

  return (
    <div className={styles.pageWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} noValidate>
        <h2>Contact Us</h2>

        <div className={styles.nameSurname}>
          {/* First Name */}
          <div className={styles.inputRow}>
            <label htmlFor="firstName">First Name*</label>
            <input
              id="firstName"
              type="text"
              {...register('firstName', { required: 'This field is required' })}
              aria-invalid={!!errors.firstName}
              aria-describedby="firstName-error"
            />
            {errors.firstName && (
              <p id="firstName-error" role="alert" className={styles.error}>
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className={styles.inputRow}>
            <label htmlFor="lastName">Last Name*</label>
            <input
              id="lastName"
              type="text"
              {...register('lastName', { required: 'This field is required' })}
              aria-invalid={!!errors.lastName}
              aria-describedby="lastName-error"
            />
            {errors.lastName && (
              <p id="lastName-error" role="alert" className={styles.error}>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className={styles.inputRow}>
          <label htmlFor="email">Email Address*</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Please enter a valid email address',
              },
            })}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" role="alert" className={styles.error}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Query Type */}
        <div className={styles.inputRow}>
          <label>Query Type*</label>
          <div className={styles.radioGroup} role="radiogroup" aria-describedby="queryType-error">
            <label>
              <input
                type="radio"
                value="general"
                {...register('queryType', { required: 'Please select a query type' })}
              />
              General Enquiry
            </label>
            <label>
              <input
                type="radio"
                value="support"
                {...register('queryType', { required: 'Please select a query type' })}
              />
              Support Request
            </label>
          </div>
          {errors.queryType && (
            <p id="queryType-error" role="alert" className={styles.error}>
              {errors.queryType.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className={styles.inputRow}>
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            {...register('message', { required: 'This field is required' })}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          {errors.message && (
            <p id="message-error" role="alert" className={styles.error}>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Consent */}
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="consent"
            {...register('consent', {
              validate: (value) => value || 'To submit this form, please consent to being contacted',
            })}
            aria-invalid={!!errors.consent}
            aria-describedby="consent-error"
          />
          <label htmlFor="consent">I consent being contacted by team</label>
        </div>
        {errors.consent && (
          <p id="consent-error" role="alert" className={styles.error}>
            {errors.consent.message}
          </p>
        )}

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};