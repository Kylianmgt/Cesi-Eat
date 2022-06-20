<template>
  <base-layout :show-menu-button="false" pageTitle="Editer les Informations du restaurant">
    <ion-page>
        <ion-content>
            <!-- Mains informations about restaurant -->
            <IonTitle size="large" color="primary">Mes Informations</IonTitle>
            <div class="flex p-8">
              <ion-grid>
                <ion-col>
                  Nom du restaurant: {{ data[0].name }}
                </ion-col>
                  <br>
                <ion-col>
                  Description: {{ data[0].description }}
                  <br>
                </ion-col>
                <ion-col>
                  Ville: {{ data[0].city }}
                  <br>
                </ion-col>
                <ion-col>
                  Address: {{ data[0].address }}
                  <br>
                </ion-col>
                <ion-col>
                  Note des utilisateurs: {{ data[0].rating }}
                </ion-col>
              </ion-grid>
              <ion-button @click="() => router.push({ name: 'MenuEdit' })">Modifier</ion-button>
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
  name: "MenuEdit",
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
