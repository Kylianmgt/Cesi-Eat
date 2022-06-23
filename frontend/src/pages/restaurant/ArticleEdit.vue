<template>
  <base-layout :show-menu-button="false" pageTitle="Editer un Article">
    <ion-page>
        <ion-content>
            <!--  Informations about article -->
            <IonTitle size="large" color="primary">Informations de l'article {{ article.name }}</IonTitle>
            <div class="flex flex-col p-8 ">

            <ion-item>
                <ion-label position="floating">Nom de l'article</ion-label>
                <ion-input type="text" v-model="article.name" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Description de l'article </ion-label>
                <ion-input type="text" v-model="article.description" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Image de l'article</ion-label>
                <ion-input type="text" v-model="article.image" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Prix de l'article</ion-label>
                <ion-input type="text" v-model="article.price" />
            </ion-item>


              <ion-button color="secondary" @click="() => router.back({ name: 'MyRestaurant' })">Enregistrer les modifications</ion-button>
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
  IonContent,
  IonToolbar 
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "ArticleEdit",
  components: {
    IonIcon,
    IonContent,
    IonInput,
    IonText,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem
  },

  props: route => ({
    article: article,
    ...route.params
  }),

  setup() {
    const router = useRouter();
    const route = useRoute();

    let article = JSON.parse(route.params.article);

    let articleName = article.name;
    let articleDescription = article.description;
    let articleImage = article.image;
    let articlePrice = article.price;

    article = {
        name: articleName,
        description: articleDescription,
        image: articleImage,
        price: articlePrice,
    }

    return {
      router,
      article
    };

  },
  methods: {},

};
</script>
