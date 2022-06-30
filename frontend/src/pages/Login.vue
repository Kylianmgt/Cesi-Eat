<template>
  <base-layout page-default-back-link="/home" :show-menu-button="false" :ignore-history="true" :showTabs="false"
    :showHeader="false">
    <ion-content scroll-y="false">
      <ion-grid>
        <ion-row>
          <div class="myOverlay">
            <div class="card-title">CESI EATS</div>
          </div>
          <ion-img :src="require('@/assets/images/planet.png')"></ion-img>
          <ion-col>
            <div class="vertical-align">
              <ion-row>
                <ion-col size="12">
                  <ion-item class="d-flex align-items-end">
                    <ion-icon slot="start" class="mr-2" :icon="Icon.mail"></ion-icon>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input clear-input required type="email" inputmode="email" v-model="Fields.email"
                      @input="ErrorMessages.email = ''"></ion-input>
                  </ion-item>
                  <error-message :text="ErrorMessages.email" />
                </ion-col>
                <ion-col size="12">
                  <ion-item class="d-flex align-items-end">
                    <ion-icon slot="start" class="mr-2" :icon="Icon.key"></ion-icon>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input required name="password" clear-input v-model="Fields.password"
                      :type="showPassword ? 'text' : 'password'" @input="ErrorMessages.password = ''"></ion-input>
                    <ion-icon slot="end" class="mr-2" :icon="showPassword ? Icon.eyeOff : Icon.eye"
                      @click="showPassword = !showPassword"></ion-icon>
                  </ion-item>
                  <error-message :text="ErrorMessages.password" />
                </ion-col>
              </ion-row>
              <ion-row class="mt-3">
                <ion-col size="12">
                  <Button color="primary" text="Login" :icon="Icon.enterOutline" :isLoading="loading"
                    @click="loginUser()" />
                </ion-col>
              </ion-row>
              <ion-row class="ion-text-center">
                <ion-col size="12">
                  <ion-text color="tertiary" @click="redirectToRecoveryPassword()">
                    Forgot password?
                  </ion-text>
                  <ion-text color="tertiary" @click="() => router.push({ name: 'RegisterRoleSelection' })">
                    Register
                  </ion-text>
                </ion-col>
              </ion-row>
            </div>

          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </base-layout>
</template>

<script>
import { enterOutline, mail, key, logIn, eye, eyeOff } from "ionicons/icons";

import {
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
} from "@ionic/vue";

import { mapActions } from "vuex";

import { useRouter } from "vue-router";
import { ref } from "vue";

import Button from "../components/Button.vue";
import useToast from "../composition/useToast";
import login from "../composition/login";

export default {
  name: "Login",
  components: {
    Button,
    IonInput,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonIcon,
    IonText,
  },
  setup() {
    const { openToast } = useToast();
    const { userLogin } = login();
    const router = useRouter();

    const showPassword = ref(false);

    const Icon = ref({
      mail,
      key,
      eye,
      eyeOff,
      logIn,
      enterOutline,
    });

    const Fields = ref({
      email: "kylianmigot@km.com",
      password: "Test1234",
    });

    const ErrorMessages = ref({
      email: "",
      password: "",
    });

    const loading = ref(false);

    return {
      ErrorMessages,
      openToast,
      userLogin,
      loading,
      router,
      Fields,
      Icon,
      showPassword,
    };
  },
  methods: {
    ...mapActions("login", ["login"]),
    loginUser() {
      if (!this.validateFields()) {
        return;
      }
      this.loading = true;

      this.userLogin(this.Fields)
        .then(() => {
          this.emitter.emit("logged");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    validateFields() {
      let valid = true;

      if (!this.Fields.email) {
        this.ErrorMessages.email = "Email invalid";
        valid = false;
      }

      if (!this.Fields.password) {
        this.ErrorMessages.password = "Password invalid";
        valid = false;
      }

      return valid;
    },
    redirectToRecoveryPassword() {
      this.router.push({ name: "recovery-password" });
    },
  },
};
</script>

<style scoped>
.facebook-button .button-native {
  --background: var(--facebook-blue);
}

@media screen and (min-width: 1501px) {

  ion-grid {
    border: 0em;
    margin: 0vw;
    padding: 0vw;
  }

  ion-img {
    width: 60vw;
    height: 50vw;
    object-fit: cover;
  }

  ion-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ion-row {
    padding: 0vw;
  }

  Button {
    bottom: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
  }

  .myOverlay {
    width: 100%;
    top: 18.5rem;
    font-size: 5vw;
    text-shadow: 0.3rem 0.1rem 0.1rem #0000002c;
    padding-left: 3rem;
    position: absolute;
    opacity: 1;
    color: var(--ion-color-medium);
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 1500px) {
  ion-card {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  ion-img {
    display: none;
  }

  ion-item {
    margin-left: 1rem;
    margin-right: 1rem;
    align-content: center;
  }

  Button {
    bottom: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
  }

}
</style>
