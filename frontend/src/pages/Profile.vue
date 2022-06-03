<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-text>
        <h1>
          <ion-icon name="home" />
          <span class="ml-2">Profile</span>
        </h1>
      </ion-text>
      <Button
        text="Router redirect"
        color="medium"
        :to="{ name: 'edit-profile' }"
      />
      <ion-text> Name: {{ data.name }} </ion-text>
      <ion-text> Email: {{ data.email }} </ion-text>
      <ion-text> Phone: {{ data.phone }} </ion-text>
      <ion-text> Address: {{ data.address }} </ion-text>
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
  IonText
} from "@ionic/vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";

export default {
  name: "Profile",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    Button
  },
  setup() {
    const router = useRouter();
    const data = {
      name: "Kicum",
      email: "kicum@kicum.com",
      phone: "+33646326521",
      address: "44 avenue du 11 novembre"
    };
    return {
      router,
      data
    };
  },
  methods: {}
};
</script>
