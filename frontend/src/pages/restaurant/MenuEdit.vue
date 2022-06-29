<template>
  <base-layout :show-menu-button="true" pageTitle="Editer un Menu">
    <ion-page>
        <ion-content>
            <!-- Menu Edit Form -->
            <IonTitle size="large" color="primary">Informations du {{ menuFields.name }}</IonTitle>
            <div class="flex flex-col p-8 ">

            <ion-item>
                <ion-label position="floating">Nom du Menu </ion-label>
                <ion-input type="text" v-model="menuFields.name" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Description du Menu </ion-label>
                <ion-input type="text" v-model="menuFields.description" />
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
                <ion-input type="text" v-model="menuFields.price" />
            </ion-item>

            <ion-item>
              <ion-select placeholder="Sélectionnez les articles de ce Menu" :multiple="true" @ionChange="onChange($event)" >
                <ion-select-option v-for="article in userData.profil.articles" :key="article.id">
                  {{ article.name }}
                </ion-select-option>
              </ion-select>
            </ion-item>

              <ion-button color="secondary"  @click="() => updateMenu(menuFields)">Enregistrer les modifications</ion-button>

              <ion-button color="warning" @click="() => router.push({name: 'MyRestaurant', params: {userData: userData }})">Retour en arrière</ion-button>
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
  IonSelectOption,

} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import File from "../../components/inputs/File.vue";


export default {
  name: "MenuEdit",
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
    IonSelectOption,
  },
  computed: {
    userData() {
      console.log("[MENU_UPDATE] [+] Get profil Data...")
      let userData = this.$store.state.user.userData;
      console.log({ userData });
      return userData;
    },
  },

  props: route => ({
    menu: data,
    ...route.params
  }),

  setup() {
    const router = useRouter();
    const route = useRoute();

    let menu = JSON.parse(route.params.menu);
    let menuName = menu.name;
    let menuDescription = menu.description;
    let menuImage = menu.image;
    let menuPrice = menu.price;
    let menuArticles = menu.articles;
    let menuId = menu.id;

    let menuFields = {
        name: menuName,
        description: menuDescription,
        image: menuImage,
        price: menuPrice,
        articles: menuArticles,
        id: menuId,
    }

    return {
      router,
      menuFields
    };
  },
  methods: {
      updateMenu(menuFields){
      console.log("[MENU UPDATE] [ ]  Get menuFields from front...")
      let userData = this.userData;
      // console.log({userData})
      console.log({menuFields})

      this.$store.dispatch("restaurant/updateMenu", {
        restaurantId: userData.profil.id,
        userId: userData.user.id,
        menuFields: {...menuFields},
      }).then((response) => {
        console.log(response)
        this.$store.commit("user/setUserDataProfil", response);
      })
      this.router.back();
    },
    
    onChange(articleNames){
      console.log("[MENU_ADD] [ ]  Value change")

      articleNames = articleNames.target.value;
      let articles =  this.userData.profil.articles;
      let articleId;
      let articlesId = [];

      articleNames.forEach(articleName => {
        for(let i = 0; i < articles.length; i++){
          if(articles[i].name == articleName) {
            articleId = articles[i].id;
          }
        }
        articlesId.push(articleId);
      });

      console.log("[MENU_ADD] [+]  Checking menuFields")

      this.menuFields.articles = articlesId;
    },

  },

};
</script>
