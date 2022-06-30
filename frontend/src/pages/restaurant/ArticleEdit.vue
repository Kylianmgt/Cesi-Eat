<template>
  <base-layout :show-menu-button="false" pageTitle="Editer un Article">
    <ion-page>
      <ion-content>
        <!--  Informations about article -->
        <IonTitle size="large" color="primary">Informations de l'article {{ articleFields.name }}</IonTitle>
        <div class="flex flex-col p-8 ">

          <ion-item>
            <ion-label position="floating">Nom de l'article</ion-label>
            <ion-input type="text" v-model="articleFields.name" />
          </ion-item>

          <ion-item>
            <ion-label position="floating">Description de l'article </ion-label>
            <ion-input type="text" v-model="articleFields.description" />
          </ion-item>

          <ion-item>
            <ion-label position="fixe">Image du Menu</ion-label>
            <ion-img :src="articleFields.image" />
            <File name="menuInfo.image" open-camera label="Open camera and gallery" @files="
              (files) => {
                articleFields.image = files[0];
              }
            " />
          </ion-item>

          <ion-item>
            <ion-label position="floating">Prix de l'article</ion-label>
            <ion-input type="text" v-model="articleFields.price" />
          </ion-item>


          <ion-button color="secondary" @click="() => updateArticle(articleFields)">Enregistrer les modifications
          </ion-button>

          <ion-button color="warning" @click="() => router.back({ name: 'MyRestaurant' })">Retour en arrière
          </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </base-layout>
</template>


<script>
import {
  IonIcon,
  IonLabel,
  IonContent,
  IonButton,
  IonInput,
  IonText,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonSelect,
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import File from "../../components/inputs/File.vue";

export default {
  name: "ArticleEdit",
  components: {
    IonIcon,
    IonLabel,
    IonContent,
    IonButton,
    IonInput,
    IonText,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    File,
    IonList,
    IonSelect,
  },

  computed: {
    userData() {
      let userData = this.$store.state.user.userData;
      return userData;
    }
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
    let articleId = article.id;
    let articleFields = ref({
      name: articleName,
      description: articleDescription,
      image: articleImage,
      price: articlePrice,
      id: articleId,
    });

    return {
      router,
      articleFields
    };

  },
  methods: {
    updateArticle(articleFields) {
      let userData = this.userData;
      this.$store.dispatch("restaurant/updateArticle", {
        restaurantId: userData.profil.id,
        userId: userData.user.id,
        articleFields: { ...articleFields },
      });
      this.router.back();
    }
  },

};
</script>
