<template>
  <section id="contact-section" class="contact">
    <h1 class="heading">Contact</h1>
    <form
      id="contact-form"
      class="contact__form"
      name="contact"
      autocomplete="off"
      @submit.prevent="sendEmail"
    >
      <!-- name -->
      <div class="float">
        <input
          id="contact_name"
          class="form__item"
          type="text"
          name="from_name"
          required
          v-model="formData.name"
        />
        <label for="contact_name" class="form__label">Name</label>
      </div>

      <!-- email -->
      <div class="float">
        <input
          id="contact_email"
          class="form__item"
          type="email"
          name="from_email"
          required
          v-model="formData.email"
        />
        <label for="contact_email" class="form__label">Email</label>
      </div>

      <!-- message -->
      <div class="float">
        <textarea
          id="contact_message"
          class="form__item form__message"
          name="message"
          required
          v-model="formData.message"
        ></textarea>
        <label for="contact_message" class="form__label">Message</label>
      </div>
      <div class="submit-form">
        <button class="primary-button" type="submit">Send</button>
      </div>
    </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data: () => ({
    showEmailMessage: false,
    formData: {
      name: '',
      email: '',
      message: '',
    },
  }),
  methods: {
    sendEmail(e) {
      const service_id = 'default_service';
      const user_id = process.env.GRIDSOME_EMAIL_JS_USER_ID;
      const template_id = process.env.GRIDSOME_EMAIL_JS__TEMPLATE_ID;

      emailjs.sendForm(service_id, template_id, e.target, user_id).then(
        result => {
          this.showEmailMessage = true;
          this.messageType = 'success';
          let form = document.getElementById('contact-form');
          this.$toasted.show('Email Sent!');
          form.reset();
        },
        error => {
          this.showEmailMessage = true;
          this.messageType = 'error';
          let form = document.getElementById('contact-form');
          this.$toasted.show('Error Sending Email');
          form.reset();
        }
      );
    },
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.contact {
  max-width: $screen-sm;
  margin: 0 auto;
  padding-bottom: 10vh;
  h1 {
    text-align: center;
  }

  .float {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
    display: block;
    padding-top: 0.9375rem;
    margin-bottom: 1.25rem;
    position: relative;

    .form__item {
      background-color: transparent;
      border: none;
      border-bottom: 2px solid $grey_light;
      border-radius: 0;
      outline: none;
      height: 1em;
      width: 100%;
      font-size: 16px;
      margin: 0 0 8px 0;
      padding: 0 0 0.5em 0;

      &:focus {
        border-bottom: 2px solid $primary;
        transition: 0.8s;
        outline: none;
      }
      &:valid,
      &:focus {
        & ~ .form__label {
          top: 0;
          font-size: 0.8em;
          color: $primary;
          transition: 0.2s;
        }
      }
    }

    .form__label {
      width: 100%;
      color: $black;
      left: 0.75rem;
      position: absolute;
      top: 20px;
      left: 0;
      font-size: 1rem;
      transition: 0.2s;

      cursor: text;
    }

    .form__message {
      height: 2em;
    }
  }

  .submit-form {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
