<template>
  <base-layout :show-menu-button="false" pageTitle="Editer un Menu">
    <ion-page>
        <ion-content>
            <div>Oui</div>
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
  name: "ArticleEdit",
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
