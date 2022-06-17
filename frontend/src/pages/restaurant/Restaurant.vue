<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-header>
        <IonToolbar>
          <IonTitle size="large" color="primary">Mon restaurant</IonTitle>
        </IonToolbar>
      </ion-header>


      <ionic-content fullscreen="true">
        <ion-label> Nom du restaurant: {{ data.name }} </ion-label>
        <ion-label> Email: {{ data.email }} </ion-label>
        <ion-label> Téléphone: {{ data.phone }} </ion-label>
        <ion-label> Address: {{ data.address }} </ion-label>
      </ionic-content>

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
  IonTitle,
  IonIcon,
  IonText,
  IonToolbar 
} from "@ionic/vue";
import { useRouter } from "vue-router";
import Button from "../../components/Button.vue";

export default {
  name: "Restaurant",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    Button,
    IonTitle,
    IonToolbar
  },
  setup() {
    const router = useRouter();
    const data = {
      name: "Kicum",
      email: "kicum@kicum.com",
      phone: "+33646326521",
      address: "44 avenue du 11 novembre",
    };
    return {
      router,
      data,
    };
  },
  methods: {},
};
</script>

<style scoped>
    ionic-content {
        display:flex;
        flex-direction:column;
        background-color: var(--ion-color-medium-tint);
        position:absolute;
        top:10%;
        left:5%;
    }

    ion-toolbar {
      background-color:red;
    }
</style>