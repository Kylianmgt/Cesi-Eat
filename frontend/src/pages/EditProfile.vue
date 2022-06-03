<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input :value="data.name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input :value="data.email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Phone</ion-label>
        <ion-input :value="data.phone"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Address</ion-label>
        <ion-input :value="data.address"></ion-input>
      </ion-item>

      <ion-button>
        <ion-icon name="save" />
        <span class="ml-2">Save</span>
      </ion-button>
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

export default {
  name: "Profile",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage
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
