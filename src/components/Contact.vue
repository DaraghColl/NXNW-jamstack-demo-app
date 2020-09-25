<template>
  <section id="contact-section" class="contact">
    <h1 class="heading">Contact</h1>
    <div class="contact-wrapper">
      <form
        id="contact-form"
        class="contact__form"
        name="contact"
        autocomplete="off"
        @submit.prevent="sendEmail"
      >
        <label for="contact_name" class="form__label">Name</label>
        <input
          id="contact_name"
          class="form__item"
          type="text"
          name="from_name"
          placeholder="name"
          v-model="formData.name"
        />
        <label for="contact_email" class="form__label">Email</label>
        <input
          id="contact_email"
          class="form__item"
          type="email"
          name="from_email"
          placeholder="email"
          v-model="formData.email"
        />
        <label for="contact_message" class="form__label">Message</label>
        <textarea
          id="contact_message"
          class="form__item"
          name="message"
          placeholder="message"
          v-model="formData.message"
        ></textarea>
        <div class="submit-form">
          <button class="primary-button" type="submit">Send</button>
        </div>
      </form>
    </div>
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
  h1 {
    text-align: center;
  }
  .contact-wrapper {
    padding-bottom: 5vh;
    .contact__form {
      display: flex;
      flex-direction: column;
      width: 100%;
      h3 {
        text-align: center;
      }

      .form__item {
        margin-bottom: 1em;
        background: inherit;
        color: inherit;
        border: none;
        border-bottom: 2px solid $grey_light;
        padding: 10px;
        &:focus {
          border-bottom: 2px solid $primary;
          transition: 0.8s;
          outline: none;
        }
      }

      .submit-form {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
