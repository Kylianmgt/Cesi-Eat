<!-- create a signup page for the user to signup with ionic components -->
<template>
  <base-layout :showHeader="true" pageDefaultBackLink="/choose-register-role" :showTabs="false">
    <ion-page>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-card>
                <ion-card-header>
                  <ion-card-title> Signup </ion-card-title>
                </ion-card-header>
                <ion-card-content v-if="role === 'client'">
                  <ion-item class="open-camera">
                    <File open-camera label="Open camera and gallery" @files="
                      (files) => {
                        clientFields.image = files[0];
                      }
                    " />
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">FirstName</ion-label>
                    <ion-input type="text" v-model="clientFields.firstName"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Name</ion-label>
                    <ion-input type="text" v-model="clientFields.name"></ion-input>
                  </ion-item>

                  <ion-item v-if="clientFields.image != ''">
                    <ion-img :src="clientFields.image" width="10px" height="10px"></ion-img>
                  </ion-item>
                  <ion-item>
                    <ion-label required position="stacked"></ion-label>
                    <ion-input placeholder="Address Line" v-model="userFields.address"></ion-input>
                    <ion-input placeholder="City" v-model="userFields.city"></ion-input>
                    <ion-input placeholder="Zip Code" v-model="userFields.zipCode"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input type="email" v-model="userFields.email"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input required name="password" type="password" v-model="userFields.password"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Confirm Password</ion-label>
                    <ion-input type="password" name="confirmPassword" v-model="userFields.confirmPassword"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Sponsor code</ion-label>
                    <ion-input name="sponsorCode" v-model="userFields.sponsorCode"></ion-input>
                  </ion-item>
                  <ion-button expand="block" @click="signup()">Signup</ion-button>
                </ion-card-content>

                <ion-card-content v-if="role === 'restaurant'">
                  <ion-item>
                    <ion-label position="stacked"></ion-label>
                    <ion-item>
                      <File open-camera label="Open camera and gallery" class="mb-2" @files="
                        (files) => {
                          restaurantFields.image = files[0];
                        }
                      " />
                    </ion-item>
                    <ion-input placeholder="email" type="email" v-model="userFields.email"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label required position="stacked"></ion-label>
                    <ion-input placeholder="Address Line" v-model="restaurantFields.address"></ion-input>
                    <ion-input placeholder="City" v-model="restaurantFields.city"></ion-input>
                    <ion-input placeholder="Zip Code" v-model="restaurantFields.zipCode"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label required position="stacked"></ion-label>
                    <ion-input placeholder="Restaurant name" type="name" v-model="restaurantFields.name"></ion-input>
                    <ion-input placeholder="Description" type="name" v-model="restaurantFields.description"></ion-input>

                  </ion-item>
                  <ion-item>
                    <ion-label required position="stacked"></ion-label>
                    <ion-input placeholder="password" type="password" v-model="userFields.password"></ion-input>
                    <ion-input placeholder="confirm password" type="password" v-model="userFields.confirmPassword">
                    </ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Sponsor code</ion-label>
                    <ion-input name="sponsorCode" v-model="userFields.sponsorCode"></ion-input>
                  </ion-item>
                  <ion-button expand="block" @click="signup()">Signup</ion-button>
                </ion-card-content>
                <ion-card-content v-if="role === 'delivery'">
                  <ion-item>
                    <ion-label position="floating">Photo</ion-label>
                    <File open-camera label="Open camera and gallery" class="mb-2" @files="
                      (files) => {
                        deliveryFields.image = files[0];
                      }
                    " />
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input type="email" v-model="userFields.email"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Name</ion-label>
                    <ion-input type="email" v-model="deliveryFields.name"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Firstname</ion-label>
                    <ion-input type="email" v-model="deliveryFields.firstName"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label required position="stacked"></ion-label>
                    <ion-input placeholder="Address Line" v-model="deliveryFields.address"></ion-input>
                    <ion-input placeholder="City" v-model="deliveryFields.city"></ion-input>
                    <ion-input placeholder="Zip Code" v-model="deliveryFields.zipCode"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input required name="password" type="password" v-model="userFields.password"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Confirm Password</ion-label>
                    <ion-input type="password" name="confirmPassword" v-model="userFields.confirmPassword"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Sponsor code</ion-label>
                    <ion-input name="sponsorCode" v-model="userFields.sponsorCode"></ion-input>
                  </ion-item>
                  <ion-button expand="block" @click="signup()">Signup</ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </base-layout>
</template>

<script>
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
  IonGrid,
  IonImg,
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
  enterOutline,
} from "ionicons/icons";
import { mapActions } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import Button from "../components/Button.vue";
import File from "../components/inputs/File.vue";
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
    IonGrid,
    IonImg,
    File,
  },
  setup() {
    const { openToast } = useToast();
    const { userRegister } = register();
    const router = useRouter();
    const route = useRoute();
    const role = route.params.role;
    const showPassword = ref(false);

    const Icon = ref({
      mail,
      key,
      eye,
      eyeOff,
      logIn,
      enterOutline,
    });

    const userFields = ref({
      email: "",
      password: "",
      confirmPassword: "",
      role: role,
      sponsorCode: "",
    });

    const clientFields = ref({
      zipCode: "",
      city: "",
      address: "",
      name: "",
      firstName: "",
      image: "",
    });

    const restaurantFields = ref({
      name: "",
      description: "",
      address: "",
      city: "",
      zipCode: "",
      image: "",
    });

    const deliveryFields = ref({
      name: "",
      firstName: "",
      address: "",
      city: "",
      zipCode: "",
      image: "",
    });

    const ErrorMessages = ref({
      email: "",
      password: "",
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
      restaurantFields,
      deliveryFields,
      ErrorMessages,
      loading,
      role,
    };
  },
  methods: {
    ...mapActions("register", ["register"]),
    signup() {
      this.loading = true;
      switch (this.role) {
        case "client":
          this.userRegister(this.userFields, this.clientFields).then(() => {
          });
          break;
        case "restaurant":
          this.userRegister(this.userFields, this.restaurantFields).then(() => {
          });
          break;
        case "delivery":
          this.userRegister(this.userFields, this.deliveryFields).then(() => {
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
          if (email(this.restaurantFields.email)) {
            this.ErrorMessages.email = "";
          } else {
            this.ErrorMessages.email = "Email is not valid";
            return false;
          }
          if (password(this.restaurantFields.password)) {
            this.ErrorMessages.password = "";
          } else {
            this.ErrorMessages.password =
              "Password must be at least 6 characters";
            return false;
          }
          if (
            this.restaurantFields.password ===
            this.restaurantFields.confirmPassword
          ) {
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
    },
  },
};
</script>

<style>
ion-row {
  padding: 0.2vw;
  margin-left: 30vw;
  margin-right: 30vw;
  align-content: center;
}
</style>