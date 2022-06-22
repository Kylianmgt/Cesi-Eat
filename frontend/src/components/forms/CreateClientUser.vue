<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col
          size-xs="12"
          size-sm="12"
          size-md="12"
          size-lg="12"
          size-xl="12"
        >
          <ion-card>
            <ion-card-header>
              <ion-card-title>{{ "Create Client User" }}</ion-card-title>
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
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
//import ion components used in template
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from "@ionic/vue";

import { mapActions } from "vuex";

import { useRouter } from "vue-router";
import { ref } from "vue";

import Button from "../components/Button.vue";
import useToast from "../composition/useToast";
import register from "../composition/register";

export default {
  name: "CreateClientUser",
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: ""
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
