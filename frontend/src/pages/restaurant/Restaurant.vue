<template>
  <base-layout :show-menu-button="false" pageTitle="Mon restaurant">

    <ion-page>
      <ion-content scroll-y="true">
        <ion-card>

            <!-- Mains informations about restaurant -->
            <IonTitle size="large" color="primary">Mes Informations</IonTitle>
            <div class="flex p-8">
              <ion-grid>
                <ion-col>
                  Nom du restaurant: {{ userData.profil.name }}
                </ion-col>
                  <br>
                <ion-col>
                  Description: {{ userData.profil.description }}
                  <br>
                </ion-col>
                <ion-col>
                  Ville: {{ userData.profil.city }}
                  <br>
                </ion-col>
                <ion-col>
                  Address: {{ userData.profil.address }}
                  <br>
                </ion-col>
                <ion-col>
                  Code Postal: {{ userData.profil.zipCode }}
                  <br>
                </ion-col>
                <ion-col>
                  <ion-img :src="userData.profil.image" alt="restaurant image" ></ion-img>
                </ion-col>
              </ion-grid>
              <ion-button @click="() => router.push({ name: 'RestaurantEdit', params: { restoData: JSON.stringify(userData) } })">Modifier</ion-button>
            </div>


            <!-- Menus Details for this restaurant -->
            <ion-card-content class="p-8">
              <IonTitle size="large" color="primary">Mes Menu</IonTitle>
              <ion-button color="success" @click="() => router.push({ name: 'MenuAdd', params: {userData: JSON.stringify(userData) } })">Ajouter un Menu</ion-button>

              <div v-for="(menu, menuIndex) in userData.profil.menus" :key="menu.id">

                <h2>{{ menu.name }}</h2>
                <p>Description: {{ menu.description }}</p>
                <!-- <p>Image: {{ menu.image }}</p> -->
                <p>Prix: {{ menu.price }}€</p>
                <h2>Articles :</h2>

                <li v-for="(article, articleIndex) in menu.articles" :key="article.id">
                  {{ article.name }} {{ article.price }}€
                </li>
                
                <ion-button @click="() => router.push({ name: 'MenuEdit', params: {menu: JSON.stringify(menu), userData: userData  } })" color="secondary">Modifier ce Menu</ion-button>
                <!-- DELETE ACTION FOR MENU -->
                <ion-button color="danger" @click="() => deleteMenu(menu.id)" >Supprimer ce Menu</ion-button>

              </div>
              
            </ion-card-content>

          <!-- * Articles Details for this restaurant -->
          <ion-card-content className="p-8">
            <IonTitle size="large" color="primary">Mes Articles</IonTitle>
              <ion-button color="success" @click="() => router.push({ name: 'ArticleAdd' })">Ajouter un Article</ion-button>

                <li v-for="(article, articleIndex) in userData.profil.articles" :key="article.id">
                  {{ article.name }}
                   | {{ article.price }}€
                <div>
                  <ion-button @click="() => router.push({ name: 'ArticleEdit', params: {article: (getCurrentArticle(articleIndex, userData)) } })" color="secondary">Modifier cet Article</ion-button>
                  <!-- DELETE ACTION FOR ARTICLE -->
                  <ion-button color="danger" @click="() => deleteArticle(article.id)">Supprimer cet Article</ion-button>
                </div>

                </li>
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
    ionic-content {
        display: flex;
        position:absolute;
        top:10%;
        left:5%;
        justify-content: space-around;
    }

    ion-card-content {
        display:flex;
        flex-direction:column;
    }

    ion-toolbar {
      background-color:red;
    }

    ion-title {
        text-align:center;
    }

    ion-button {
      --background: var(--ion-color-secondary);
    }
</style>