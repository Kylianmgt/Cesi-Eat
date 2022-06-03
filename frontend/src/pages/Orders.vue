<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-text>
        <h1>
          <span class="ml-2">Order summary</span>
        </h1>
      </ion-text>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Your actual orders</span>
          </h2>
        </ion-text>
      </ion-content>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Your previous orders</span>
          </h2>
        </ion-text>
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
  IonButton
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "Profile",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    IonButton
  },
  setup() {
    const router = useRouter();
    const data = {};
    return {
      router,
      data
    };
  },
  methods: {}
};
</script>
