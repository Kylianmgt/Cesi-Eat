<template>
  <base-layout :show-menu-button="false" pageTitle="Mon restaurant">

    <ion-page>
      <ion-content scroll-y="true">
        <ion-card>

            <!-- Mains informations about restaurant -->
            <IonTitle size="large" color="secondary" class="fs-32">Mes Informations</IonTitle>
            <div class="flex p-8 ">
              <ion-grid>
                <ion-col class="fs-24">
                  Nom du restaurant: {{ userData.profil.name }}
                </ion-col>
                  <br>
                <ion-col class="fs-24">
                  Description: {{ userData.profil.description }}
                  <br>
                </ion-col>
                <ion-col class="fs-24">
                  Ville: {{ userData.profil.city }}
                  <br>
                </ion-col>
                <ion-col class="fs-24">
                  Address: {{ userData.profil.address }}
                  <br>
                </ion-col>
                <ion-col class="fs-24">
                  Code Postal: {{ userData.profil.zipCode }}
                  <br>
                </ion-col>
                <ion-col  >
                  <ion-img :src="userData.profil.image" alt="restaurant image" ></ion-img>
                </ion-col>
              </ion-grid>
              <ion-button color="secondary" size="large" @click="() => router.push({ name: 'RestaurantEdit', params: { restoData: JSON.stringify(userData) } })">Modifier</ion-button>
            </div>


            <!-- Menus Details for this restaurant -->
            <ion-card-content class="p-8">
              <IonTitle size="large" color="secondary" class="fs-32">Mes Menu</IonTitle>
              <ion-button size="large" color="success" @click="() => router.push({ name: 'MenuAdd', params: {userData: JSON.stringify(userData) } })">Ajouter un Menu</ion-button>
                <ion-item-divider />

              <!-- ALL MENUS DETAILS -->
              <ion-grid v-for="(menu, menuIndex) in userData.profil.menus" :key="menu.id">
  
                <ion-title color="secondary" class="fs-30">Menu {{ menu.name }}</ion-title>
                
                <ion-row class="fs-20">Description: {{ menu.description }}</ion-row>
                <ion-row class="fs-20">Prix: {{ menu.price }}€</ion-row>
                    <ion-row class="w-1/2">
                  <ion-img :src="menu.image" alt="menu image"></ion-img>
                </ion-row>

                <ion-title class="fs-26 pt-12" color="medium">Articles dans le menu</ion-title>
                <ion-row v-for="(article, articleIndex) in menu.articles" :key="article.id">
                  <ion-col class="fs-20">Nom de l'article: {{ article.name }} </ion-col>
                  <ion-col class="fs-20">Prix: {{ article.price }}€</ion-col>
                  <ion-col class="fs-20">{{ article.description }}</ion-col>
                </ion-row>
                
                <ion-row class="flex content-center justify-center">
                  <ion-button size="large" @click="() => router.push({ name: 'MenuEdit', params: {menu: JSON.stringify(menu), userData: userData  } })" color="secondary">Modifier ce Menu</ion-button>
                  <!-- DELETE ACTION FOR MENU -->
                  <ion-button size="large" color="danger" @click="() => deleteMenu(menu.id)" >Supprimer ce Menu</ion-button>
                </ion-row>

                <ion-item-divider />
              </ion-grid>
              <!-- END OF MENUS DETAILS -->

            </ion-card-content>

          <!-- * Articles Details for this restaurant -->
          <ion-card-content className="p-8">
            <IonTitle class="fs-32" size="large" color="secondary">Mes Articles</IonTitle>
              <ion-button size="large" color="success" @click="() => router.push({ name: 'ArticleAdd' })">Ajouter un Article</ion-button>
                <ion-item-divider />

                <!-- ALL ARTICLES DETAILS -->
                <ion-row v-for="(article, articleIndex) in userData.profil.articles" :key="article.id">
                  <ion-col>
                    <ion-row class="fs-20">Nom: {{ article.name }}</ion-row>
                    <ion-row class="fs-20">Description: {{ article.description }}</ion-row>
                    <ion-row class="fs-20">Prix: {{ article.price }}€</ion-row>
                    <ion-row><ion-img :src="article.image" alt="article image"></ion-img></ion-row>
                  </ion-col>

                  <ion-col-padding-lg class="flex flex-col items-center justify-center">
                    <ion-button size="large" expand="full" @click="() => router.push({ name: 'ArticleEdit', params: {article: (getCurrentArticle(articleIndex, userData)) } })" color="secondary">Modifier</ion-button>
                    <!-- DELETE ACTION FOR ARTICLE -->
                    <ion-button  size="large" expand="block" color="danger" @click="() => deleteArticle(article.id)">Supprimer</ion-button>
                  </ion-col-padding-lg>

                  <ion-item-divider />
                </ion-row>
                <!-- END ALL ARTICLES DETAILS -->

          </ion-card-content>

        </ion-card>
      </ion-content>
    </ion-page>
    
  </base-layout>
</template>

<script>
import {
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  Ionmenu,
  IonCol,
  IonGrid,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonImg,
  IonThumbnail,
  IonItemDivider,
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "Restaurant",
  components: {
    IonIcon,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
    Ionmenu,
    IonCol,
    IonGrid,
    IonButton,
    IonCardContent,
    IonCard,
    IonContent,
    IonImg,
    IonThumbnail,
    IonItemDivider,
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

    return {
      router
    };
  },
  methods: {

    getCurrentMenu(menuIndex, userData) {
      let currentMenu = userData.profil.menus[menuIndex];
      console.log({ currentMenu })
      currentMenu = JSON.stringify(currentMenu);
      return currentMenu;
    },

    getCurrentArticle(articleIndex, userData) {
      let currentArticle = userData.profil.articles[articleIndex];
      console.log({ currentArticle });
      currentArticle = JSON.stringify(currentArticle);
      return currentArticle;
    },

    getArticleNameFromMenu(articleIndex, menu){
      let articleName = menu.articles[articleIndex].name;
      // console.log({ articleName });
      return articleName;
    },

    getArticlePriceFromMenu(articleIndex, menu){
      let articlePrice = menu.articles[articleIndex].price;
      // console.log({ articlePrice });
      return articlePrice;
    },

    deleteMenu(menuId){
      console.log("[RESTAURANT] [ ]  Calling Delete Menu")
      this.$store.dispatch("restaurant/deleteMenu", {
        restaurantId: this.userData.profil.id,
        userId: this.userData.user.id,
        menuId: menuId,
      });
    },

    deleteArticle(articleId){
      console.log("[RESTAURANT] [ ]  Calling Delete Article")
      this.$store.dispatch("restaurant/deleteArticle", {
        restaurantId: this.userData.profil.id,
        userId: this.userData.user.id,
        articleId: articleId,
      });
    },

  },
};
</script>

<style scoped>

    ion-card-content {
        display:flex;
        flex-direction:column;
    }


    ion-title {
        text-align:center;
    }


</style>