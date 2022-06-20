<template>
  <base-layout :show-menu-button="true" pageTitle="Editer les Informations du restaurant">
    <ion-page>
        <ion-content>
            <!-- Mains informations about restaurant -->
            <IonTitle size="large" color="primary">Mes Informations</IonTitle>
            <div class="flex p-8">
              <ion-grid>
                <ion-col>
                  Nom du restaurant: {{ $route.params.name }}
                </ion-col>
                  <br>
                <ion-col>
                  Description: {{ $route.params.description }}
                  <br>
                </ion-col>
                <ion-col>
                  Ville: {{ $route.params.city }}
                  <br>
                </ion-col>
                <ion-col>
                  Address: {{ $route.params.address }}
                  <br>
                </ion-col>
                <ion-col>
                  Note des utilisateurs: {{ $route.params.rating }}
                </ion-col>
              </ion-grid>
              <ion-button @click="() => router.push({ name: 'MyRestaurant' })">Enregistrer les modifications</ion-button>
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
  IonToolbar 
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantEdit",
  components: {
    IonIcon,
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
      router
    };
  },
  methods: {},

};
</script>
