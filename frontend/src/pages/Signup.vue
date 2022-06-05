// create a signup page for the user to signup with ionic components
<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Signup
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input type="email" v-model="Fields.email"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Password</ion-label>
                  <ion-input
                    required
                    name="password"
                    type="password"
                    v-model="Fields.password"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Confirm Password</ion-label>
                  <ion-input
                    type="password"
                    name="confirmPassword"
                    v-model="Fields.confirmPassword"
                  ></ion-input>
                </ion-item>
                <ion-button expand="block" @click="signup()">Signup</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
//import ionic Components
import {
  IonCol,
  IonRow,
  IonText,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonToast,
  IonGrid
} from "@ionic/vue";
import {
  person,
  lockClosed,
  mailOutline,
  logIn,
  signUp,
  mail,
  key,
  eye,
  eyeOff,
  enterOutline
} from "ionicons/icons";

import { mapActions } from "vuex";

import { useRouter } from "vue-router";
import { ref } from "vue";

import Button from "../components/Button.vue";
import useToast from "../composition/useToast";
import register from "../composition/register";

export default {
  name: "Signup",
  components: {
    IonCol,
    IonRow,
    IonText,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonToast,
    IonGrid
  },
  setup() {
    const { openToast } = useToast();
    const { userRegister } = register();
    const router = useRouter();

    const showPassword = ref(false);

    const Icon = ref({
      mail,
      key,
      eye,
      eyeOff,
      logIn,
      enterOutline
    });
    const Fields = ref({
      email: "kylianmigot@km.com",
      password: "Test1234",
      confirmPassword: "Test1234"
    });

    const ErrorMessages = ref({
      email: "",
      password: ""
    });

    const loading = ref(false);
    return {
      openToast,
      userRegister,
      router,
      showPassword,
      Icon,
      Fields,
      ErrorMessages,
      loading
    };
  },
  methods: {
    ...mapActions("register", ["register"]),
    signup() {
      if (!this.validateFields()) {
        return;
      }
      this.loading = true;
      this.userRegister({
        email: this.Fields.email,
        password: this.Fields.password
      }).then(() => {
        this.loading = false;
        // this.router.push("/login");
      });
    },
    validateFields() {
      if (this.Fields.email === "") {
        this.ErrorMessages.email = "Email is required";
        return false;
      }
      if (this.Fields.password === "") {
        this.ErrorMessages.password = "Password is required";
        return false;
      }
      if (this.Fields.password !== this.Fields.confirmPassword) {
        this.ErrorMessages.password = "Passwords do not match";
        return false;
      }
      return true;
    }
  }
};
</script>
