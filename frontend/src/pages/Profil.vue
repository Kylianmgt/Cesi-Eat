<template>
  <base-layout :show-menu-button="false" :showHeader="false">
    <ion-page>
      <ion-text class="text-4xl">
        <h1>
          <ion-icon name="home" />
          <span class="ml-2">My profil</span>
        </h1>
      </ion-text>
      <ion-content>
        <ion-button name="edit-profil" @click="router.push('/edit-profil')">
          <ion-icon name="create" />
          <span class="ml-2">Edit profil</span>
        </ion-button>
        <ion-button name="logout" @click="router.push('/logout')">
          <ion-icon name="log-out" />
          <span class="ml-2">Logout</span>
        </ion-button>
        <ion-button name="delete-account">
          <ion-icon name="trash" />
          <span class="ml-2">Delete account</span>
        </ion-button>
        <ion-text> Name: {{ userData.profil.name }} </ion-text>
        <ion-text> Email: {{ userData.user.email }} </ion-text>
        <ion-text> Address: {{ userData.profil.address }} </ion-text>
        <ion-img :src="userData.profil.image" v-if="userData.profil.image">
        </ion-img>
      </ion-content>
    </ion-page>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonImage,
  IonButton,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { mapGetters, mapState } from "vuex";
import { Storage } from "@capacitor/storage";
import { ref } from "vue";

import Button from "../components/Button.vue";

export default {
  name: "Profil",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    Button,
    IonImage,
    IonButton,
  },
  computed: {
    userData() {
      console.log(this.$store.state.user.userData);
      return this.$store.state.user.userData;
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  mounted() {},
  methods() {},
};
</script>
