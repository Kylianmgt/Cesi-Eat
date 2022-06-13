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
              <ion-card-content v-if="role === 'client'">
                <ion-item>
                  <ion-label position="floating">FirstName</ion-label>
                  <ion-input
                    type="text"
                    v-model="clientFields.firstName"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Name</ion-label>
                  <ion-input
                    type="text"
                    v-model="clientFields.name"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input
                    type="email"
                    v-model="userFields.email"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Address</ion-label>
                  <ion-input
                    type="text"
                    v-model="clientFields.address"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Password</ion-label>
                  <ion-input
                    required
                    name="password"
                    type="password"
                    v-model="userFields.password"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Confirm Password</ion-label>
                  <ion-input
                    type="password"
                    name="confirmPassword"
                    v-model="userFields.confirmPassword"
                  ></ion-input>
                </ion-item>
                <ion-button expand="block" @click="signup()">Signup</ion-button>
              </ion-card-content>
              <ion-card-content v-if="role === 'restaurant'">
                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input
                    type="email"
                    v-model="userFields.email"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Password</ion-label>
                  <ion-input
                    required
                    name="password"
                    type="password"
                    v-model="userFields.password"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Confirm Password</ion-label>
                  <ion-input
                    type="password"
                    name="confirmPassword"
                    v-model="userFields.confirmPassword"
                  ></ion-input>
                </ion-item>
                <ion-button expand="block" @click="signup()">Signup</ion-button>
              </ion-card-content>
              <ion-card-content v-if="role === 'delivery'">
                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input
                    type="email"
                    v-model="userFields.email"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Password</ion-label>
                  <ion-input
                    required
                    name="password"
                    type="password"
                    v-model="userFields.password"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Confirm Password</ion-label>
                  <ion-input
                    type="password"
                    name="confirmPassword"
                    v-model="userFields.confirmPassword"
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

import { useRouter, useRoute } from "vue-router";

import { ref } from "vue";

import Button from "../components/Button.vue";
import useToast from "../composition/useToast";
import register from "../composition/register";

//validations
import { email, password } from "../utils/validations";

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
    const route = useRoute();
    const role = route.params.role;
    console.log(role);

    const showPassword = ref(false);

    const Icon = ref({
      mail,
      key,
      eye,
      eyeOff,
      logIn,
      enterOutline
    });

    const userFields = ref({
      email: "kylianmigot@km.com",
      password: "Test1234",
      confirmPassword: "Test1234",
      role: role
    });

    const clientFields = ref({
      name: "Migot",
      firstName: "Kylian",
      address: "44 avenue du 11 novembre"
    });

    const restoFields = ref({
      name: "Migot",
      firstName: "Kylian",
      address: "44 avenue du 11 novembre"
    });

    const deliveryFields = ref({
      name: "Migot",
      firstName: "Kylian",
      address: "44 avenue du 11 novembre"
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
      userFields,
      clientFields,
      restoFields,
      deliveryFields,
      ErrorMessages,
      loading,
      role
    };
  },
  methods: {
    ...mapActions("register", ["register"]),
    signup() {
      // if (!this.validateFields(this.role)) {
      //   return;
      // }
      this.loading = true;
      switch (this.role) {
        case "client":
          this.userRegister(this.userFields, this.clientFields).then(() => {
            // this.router.push("/login");
          });
          break;
        case "restaurant":
          this.userRegister(this.userFields, this.restoFields).then(() => {
            // this.router.push("/login");
          });
          break;
        case "delivery":
          this.userRegister(this.userFields, this.deliveryFields).then(() => {
            // this.router.push("/login");
          });
          break;
        default:
          break;
      }
    },
    validateFields(role) {
      switch (role) {
        case "client":
          if (email(this.clientFields.email)) {
            this.ErrorMessages.email = "";
          } else {
            this.ErrorMessages.email = "Email is not valid";
            return false;
          }
          if (password(this.clientFields.password)) {
            this.ErrorMessages.password = "";
          } else {
            this.ErrorMessages.password =
              "Password must be at least 6 characters";
            return false;
          }
          if (
            this.clientFields.password === this.clientFields.confirmPassword
          ) {
            this.ErrorMessages.confirmPassword = "";
          } else {
            this.ErrorMessages.confirmPassword = "Password does not match";
            return false;
          }
          return true;
          break;
        case "resto":
          if (email(this.restoFields.email)) {
            this.ErrorMessages.email = "";
          } else {
            this.ErrorMessages.email = "Email is not valid";
            return false;
          }
          if (password(this.restoFields.password)) {
            this.ErrorMessages.password = "";
          } else {
            this.ErrorMessages.password =
              "Password must be at least 6 characters";
            return false;
          }
          if (this.restoFields.password === this.restoFields.confirmPassword) {
            this.ErrorMessages.confirmPassword = "";
          } else {
            this.ErrorMessages.confirmPassword = "Password does not match";
            return false;
          }
          return true;
          break;
        case "delivery":
          if (email(this.deliveryFields.email)) {
            this.ErrorMessages.email = "";
          } else {
            this.ErrorMessages.email = "Email is not valid";
            return false;
          }
          if (password(this.deliveryFields.password)) {
            this.ErrorMessages.password = "";
          } else {
            this.ErrorMessages.password =
              "Password must be at least 6 characters";
            return false;
          }
          if (
            this.deliveryFields.password === this.deliveryFields.confirmPassword
          ) {
            this.ErrorMessages.confirmPassword = "";
          } else {
            this.ErrorMessages.confirmPassword = "Password does not match";
            return false;
          }
          break;
          return true;
        default:
          break;
      }
    }
  }
};
</script>
