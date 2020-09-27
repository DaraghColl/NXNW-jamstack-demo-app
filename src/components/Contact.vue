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
        <label
          for="contact_email"
          class="form__label"
          v-bind:class="{
            'label-floated': formData.email !== '',
          }"
          >Email</label
        >
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
        <button class="primary-button" type="submit">
          Send
          <svg
            class="submit-icon"
            v-bind:class="{ 'email-bounce': emailSending }"
            fill="none"
            height="24"
            width="24"
          >
            <path
              d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
              fill="#fff"
            ></path>
          </svg>
          <!-- <g-image class="send mail" src="/icons/email.svg" alt="send mail" /> -->
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data: () => ({
    emailSending: false,
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

      this.emailSending = true;

      emailjs.sendForm(service_id, template_id, e.target, user_id).then(
        result => {
          this.messageType = 'success';
          this.$toasted.show('Email Sent!');
          this.resetForm();
          this.emailSending = false;
        },
        error => {
          this.messageType = 'error';
          this.$toasted.show('Error Sending Email');
          this.resetForm();
          this.emailSending = false;
        }
      );
    },
    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
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

  /* input wrapper */
  .float {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
    display: block;
    padding-top: 0.9375rem;
    margin-bottom: 1.25rem;
    position: relative;

    /* input */
    .form__item {
      background-color: transparent;
      border: none;
      border-bottom: 2px solid $grey_light;
      border-radius: 0;
      outline: none;
      height: 1em;
      width: 100%;
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
      font-size: 1em;
      transition: 0.2s;
      cursor: text;
    }

    .form__message {
      height: 1.5em;

      &:valid,
      &:focus {
        & ~ .form__label {
          top: -5px;
        }
      }
    }
  }

  /* submit button */
  .submit-form {
    display: flex;
    justify-content: flex-end;
    transition: 0.3s;

    button {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &:hover {
        .submit-icon {
          path {
            fill: $primary;
            transition: 0.3s;
          }
        }
      }
    }
  }
}

/* floating class for email invalid & not focused  */
.label-floated {
  top: 0 !important;
  font-size: 0.8em !important;
  color: $primary !important;
  transition: 0.2s;
}

.email-bounce {
  animation: email-bounce 0.5s ease infinite;
}
@keyframes email-bounce {
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
