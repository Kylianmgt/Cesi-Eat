<template>
  <base-layout :show-menu-button="true" pageTitle="Ajouter un Article">
    <ion-page>
        <ion-content class="p-8">
            <!-- Article Add Form -->
            <IonTitle size="large" color="primary">Informations de votre nouvel Article</IonTitle>
            <div class="flex flex-col p-8 ">

                <ion-item>
                    <ion-label position="floating">Nom de l'Article</ion-label>
                    <ion-input type="text" v-model="articleFields.name" />
                </ion-item>

                <ion-item>
                    <ion-label position="floating" >Description de l'Article</ion-label>
                    <ion-input type="text" v-model="articleFields.description" value="test" />
                </ion-item>

                <ion-item>
                  <ion-label position="fixe">Image</ion-label>
                  <ion-img :src="articleFields.image" />
                  <File
                    name="articleInfo.image"
                    open-camera
                    label="Open camera and gallery"
                    @files="
                      (files) => {
                        articleFields.image = files[0];
                      }
                    "
                  />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Prix de l'Article</ion-label>
                    <ion-input type="text" v-model="articleFields.price" value="test" />
                </ion-item>

                <ion-button color="success" @click="() => createArticle(articleFields)">SAVE l'article</ion-button>
                <ion-button color="warning" @click="() => router.back({ name: 'MyRestaurant' })">Retour en arrière</ion-button>

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
  IonImg,
  IonButton
} from "@ionic/vue";

import { mapGetters, mapState, useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import File from "../../components/inputs/File.vue";

export default {
  name: "ArticleAdd",
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
  },

    computed: {
    userData() {
      console.log("[+] Get profil Data...")
      let userData = this.$store.state.user.userData;
      console.log({ userData });
      return userData;
    }
  },

  setup() {
    const router = useRouter();
    const articleFields = ref({
      name: "",
      description: "",
      image: "",
      price: "",
    });

    return {
      router,
      articleFields,
    };
  },

  methods: {
    createArticle(articleFields) {
      console.log("[ARTICLE_ADD] [+]  Create Article")
      let userData = this.userData;
      console.log({userData})
      console.log(userData.profil.id)

      this.$store.dispatch("restaurant/postArticle", {
        restaurantId: userData.profil.id,
        userId: userData.user.id,
        article: {...articleFields},
      });
      this.router.back();
    },

  },

};
</script>
