<template>
  <base-layout :show-menu-button="true" pageTitle="Ajouter un Menu">
    <ion-page>
        <ion-content class="p-8">
            <!-- Menu Add Form -->
            <IonTitle size="large" color="primary">Informations de votre nouveau Menu</IonTitle>
            <div class="flex flex-col p-8 ">

                <ion-item>
                    <ion-label position="floating">Nom du Menu</ion-label>
                    <ion-input type="text" v-model="menuFields.name" />
                </ion-item>

                <ion-item>
                    <ion-label position="floating" >Description du Menu</ion-label>
                    <ion-input type="text" v-model="menuFields.description" value="test" />
                </ion-item>

                <ion-item>
                  <ion-label position="fixe">Image du Menu</ion-label>
                  <ion-img :src="menuFields.image" />
                  <File
                    name="menuInfo.image"
                    open-camera
                    label="Open camera and gallery"
                    @files="
                      (files) => {
                        menuFields.image = files[0];
                      }
                    "
                  />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Prix du Menu</ion-label>
                    <ion-input type="text" v-model="menuFields.price" value="test" />
                </ion-item>

                <ion-list>
                  <ion-item>

                    <ion-select placeholder="Sélectionnez les articles de ce Menu" :multiple="true" v-model="menuFields.articles" @ionChange="onChange($event)">

                      <ion-select-option v-for="article in userData.profil.articles" :key="article.id">
                        {{ article.name }}
                      </ion-select-option>

                    </ion-select>

                  </ion-item>
                </ion-list>

                <ion-button color="success" @click="() => createMenu(menuFields)">Enregistrer le Menu</ion-button>
                <ion-button color="primary" @click="() => router.back({ name: 'MyRestaurant' })">Retour en arrière</ion-button>

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
  name: "MenuAdd",
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
      console.log("[MENU_ADD] [+] Get profil Data...")
      let userData = this.$store.state.user.userData;
      console.log({ userData });
      return userData;
    }
  },

  setup() {
    const router = useRouter();
    const menuFields = ref({
      name: "",
      description: "",
      image: "",
      price: "",
      articles: [],
    });

    return {
      router,
      menuFields,
    };

  },

  methods: {
    createMenu(menuFields) {
      console.log("[MENU_ADD] [+]  Create Menu")
      let userData = this.userData;
      console.log({userData})
      console.log(userData.profil.id)
      console.log({menuFields})

      this.$store.dispatch("restaurant/postMenu", {
        restaurantId: userData.profil.id,
        userId: userData.user.id,
        menu: {...menuFields},
      });
      this.router.back();
    },

    onChange(articleNames){
      console.log("[MENU_ADD] [+]  Value change")

      articleNames = articleNames.target.value;
      let articles =  this.userData.profil.articles;
      let articleId;
      let articlesId = [];
      console.log(this.menuFields);

      articleNames.forEach(articleName => {

        console.log(articleName)

        for(let i = 0; i < articles.length; i++){
          if(articles[i].name == articleName) {
            articleId = articles[i].id;
          }

        }

        console.log(articleId);
        articlesId.push(articleId);
      });

      // menuFields.articles = articlesId;
      console.log(articlesId);
    },

  },

};
</script>
