<template>
  <section id="contact-section" class="contact">
    <h1 class="heading">Contact</h1>
    <div class="contact-wrapper">
      <div class="contact__form" name="contact">
        <input
          class="form__item"
          type="text"
          name="name"
          placeholder="Name"
          v-model="formData.name"
        />
        <input
          class="form__item"
          type="email"
          name="email"
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
          <button @click="submitForm()">Send</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    formData: {
      name: '',
      email: '',
      message: '',
    },
  }),
  methods: {
    submitForm() {
      console.log(this.formData.email);
      axios
        .post('/.netlify/functions/contact', this.formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          this.response = JSON.stringify(response);
          console.log(this.response);
        });
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
