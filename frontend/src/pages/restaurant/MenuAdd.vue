<template>
  <base-layout :show-menu-button="true" pageTitle="Ajouter un Menu">
    <ion-page>
        <ion-content class="p-8">
            <!-- Menu Add Form -->
            <IonTitle size="large" color="primary">Informations de votre nouveau Menu</IonTitle>
            <div class="flex flex-col p-8 ">

                <ion-item>
                    <ion-label position="floating">Nom du Menu </ion-label>
                    <ion-input type="text" />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Description du Menu </ion-label>
                    <ion-input type="text" />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Image du Menu</ion-label>
                    <ion-input type="text"  />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Prix du Menu</ion-label>
                    <ion-input type="text" />
                </ion-item>

                <ion-button color="secondary" @click="() => router.back({ name: 'MyRestaurant' })">Enregistrer le Menu</ion-button>

            </div>
        </ion-content>
    </ion-page>
   </base-layout>
</template>


<script>
import {
  IonPage,
  IonInput,
  IonItem,
  IonTitle,
  IonIcon,
  IonText,
  IonToolbar,
  IonLabel,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "MenuAdd",
  components: {
    IonIcon,
    IonLabel,
    IonContent,
    IonButton,  
    IonInput,
    IonText,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem
  },

  setup() {
    const router = useRouter();


    return {
      router,
    };
  },
  methods: {},

};
</script>
