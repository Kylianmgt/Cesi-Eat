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
              <ion-card-title>{{ "Create Restaurant User" }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-list lines="full">
                <ion-item>
                  <ion-label position="stacked">{{ "First Name" }}</ion-label>
                  <ion-input type="text" v-model="Fields.firstName"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">{{ "Last Name" }}</ion-label>
                  <ion-input type="text" v-model="Fields.lastName"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">{{ "Email" }}</ion-label>
                  <ion-input type="email" v-model="Fields.email"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">{{ "Phone" }}</ion-label>
                  <ion-input type="text" v-model="Fields.phone"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">{{ "Address" }}</ion-label>
                  <ion-textarea v-model="Fields.address"></ion-textarea>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">{{ "Password" }}</ion-label>
                  <ion-input
                    type="password"
                    v-model="Fields.password"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">{{
                    "Confirm Password"
                  }}</ion-label>
                  <ion-input
                    type="password"
                    v-model="Fields.confirmPassword"
                  ></ion-input>
                </ion-item>
              </ion-list>
            </ion-card-content>
            <ion-card-content>
              <ion-button expand="block" @click="signup()">{{
                "Create"
              }}</ion-button>
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
  name: "CreateRestaurantUser",
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
