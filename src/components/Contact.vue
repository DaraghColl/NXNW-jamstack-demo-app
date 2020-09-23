<template>
  <section id="contact-section" class="contact">
    <h1 class="heading">Contact</h1>
    <div class="contact-wrapper">
      <form
        id="contact-form"
        class="contact__form"
        name="contact"
        @submit.prevent="sendEmail"
      >
        <input
          class="form__item"
          type="text"
          name="from_name"
          placeholder="Name"
          v-model="formData.name"
        />
        <input
          class="form__item"
          type="email"
          name="from_email"
          placeholder="Email"
          v-model="formData.email"
        />
        <textarea
          class="form__item"
          name="message"
          placeholder="Message"
          v-model="formData.message"
        ></textarea>
        <div class="submit-form">
          <button type="submit">Send</button>
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
      let service_id = 'default_service';
      let user_id = process.env.GRIDSOME_EMAIL_JS_USER_ID;
      let template_id = process.env.GRIDSOME_EMAIL_JS__TEMPLATE_ID;

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
.contact {
  max-width: 768px;
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
        border-bottom: 2px solid #ccc;
        padding: 10px;
        &:focus {
          border-bottom: 2px solid #5469d4;
          transition: 0.8s;
          outline: none;
        }
      }

      .submit-form {
        display: flex;
        justify-content: flex-end;
        button {
          background: #5469d4;
          color: #fff;
          border: 1px solid #5469d4;
          padding: 0.7em 1em;
          width: 100px;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
