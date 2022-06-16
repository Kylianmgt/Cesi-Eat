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
        <Button
          text="Edit my profil"
          color="medium"
          :to="{ name: 'edit-profile' }"
        />
        <ion-text> Name: {{ userData.profil.name }} </ion-text>
        <ion-text> Email: {{ userData.user.email }} </ion-text>
        <ion-text> Address: {{ userData.profil.address }} </ion-text>
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
