<template>
  <base-layout :show-menu-button="false" pageTitle="Mon restaurant">
    <ion-page>
      <ion-content scroll-y="true">
        <ion-card>

            <!-- Mains informations about restaurant -->
            <ion-card-header>
              <IonTitle size="large" color="secondary" class="fs-32">Mes Informations</IonTitle>
              <div class="flex flex-col p-8 ">

                  <ion-grid>                    
                    <ion-row>
                      <ion-col class="flex flex-col">
                      <ion-label color="dark"  class="fs-24">
                          Nom du restaurant: {{ userData.profil.name }}
                      </ion-label>
                      <ion-label color="dark"  class="fs-24">
                        Description: {{ userData.profil.description }}
                      </ion-label>
                      <ion-label color="dark"  class="fs-24">
                        Ville: {{ userData.profil.city }}
                      </ion-label>
                      <ion-label color="dark"  class="fs-24">
                        Address: {{ userData.profil.address }}
                      </ion-label>
                      <ion-label color="dark"  class="fs-24">
                        Code Postal: {{ userData.profil.zipCode }}
                      </ion-label>
                      </ion-col>
                      <ion-col class="flex flex-col">
                        <ion-label>
                          <ion-img :src="userData.profil.image" alt="restaurant image" ></ion-img>
                        </ion-label>
                        <ion-button color="secondary" size="large" @click="() => router.push({ name: 'RestaurantEdit', params: { restoData: JSON.stringify(userData) } })">Modifier</ion-button>
                      </ion-col>                   
                    </ion-row>
                  </ion-grid>

              </div>
            </ion-card-header>
          </ion-card>

          <ion-card>
            <!-- Menus Details for this restaurant -->
            <ion-card-header>
              <IonTitle size="large" color="secondary" class="fs-32">Mes Menu</IonTitle>
            </ion-card-header>

              <ion-card-content>
              <ion-button size="large" color="success" @click="() => router.push({ name: 'MenuAdd', params: {userData: JSON.stringify(userData) } })">Ajouter un Menu</ion-button>

              <!-- ALL MENUS DETAILS -->
              <ion-grid class="my-12" color="light" v-for="(menu, menuIndex) in userData.profil.menus" :key="menu.id">
                <ion-card>
                  <img :src="menu.image" alt="menu image" />

                  <ion-card-header>
                    <ion-card-title color="dark" class="fs-30">Menu {{ menu.name }}</ion-card-title>
                    <ion-card-subtitle>Prix: {{ menu.price }}€</ion-card-subtitle>
                  </ion-card-header>

                  <ion-card-content>
                    Description: {{ menu.description }}
                  </ion-card-content>

                <ion-title class="fs-26 pt-12 pb-4" color="dark">Articles dans le menu</ion-title>
                <ion-chip class="mx-2" color="tertiary" v-for="(article, articleIndex) in menu.articles" :key="article.id">
                  <ion-icon name="paper"></ion-icon>
                  <ion-label>{{ article.name }} {{ article.price}}€</ion-label>
                  <ion-icon name="close-circle"></ion-icon>
                </ion-chip>
                
                <ion-row class="flex content-center justify-center mt-8">
                  <ion-button size="large" @click="() => router.push({ name: 'MenuEdit', params: {menu: JSON.stringify(menu), userData: userData  } })" color="secondary">Modifier ce Menu</ion-button>
                  <!-- DELETE ACTION FOR MENU -->
                  <ion-button size="large" color="danger" @click="() => deleteMenu(menu.id)" >Supprimer ce Menu</ion-button>
                </ion-row>
              
                </ion-card>
                <!-- END MENUS DETAILS -->

              </ion-grid>
              <!-- END OF MENUS DETAILS -->

            </ion-card-content>

          <!-- ALL ARTICLES DETAILS -->
          <ion-card-content className="p-8">
            <IonTitle class="fs-32" size="large" color="secondary">Mes Articles</IonTitle>
              <ion-button size="large" color="success" @click="() => router.push({ name: 'ArticleAdd' })">Ajouter un Article</ion-button>
                <ion-item-divider />

                <!-- ALL ARTICLES DETAILS -->
                <ion-grid  class="my-12" v-for="(article, articleIndex) in userData.profil.articles" :key="article.id">
                  <ion-card>
                    <img :src="article.image" alt="menu image"/>
                    <ion-card-header>
                      <ion-card-title class="fs-30" color="dark">Article {{ article.name }}</ion-card-title>
                      <ion-card-subtitle>Prix: {{ article.price }}€</ion-card-subtitle>
                    </ion-card-header>


                    <ion-card-content>
                      Description: {{ article.description }}
                    </ion-card-content>
                    <ion-row class="flex content-center justify-center">
                      <ion-button size="large"  @click="() => router.push({ name: 'ArticleEdit', params: {article: (getCurrentArticle(articleIndex, userData)) } })" color="secondary">Modifier</ion-button>
                      <!-- DELETE ACTION FOR ARTICLE -->
                      <ion-button  size="large" color="danger" @click="() => deleteArticle(article.id)">Supprimer</ion-button>
                    </ion-row>

                  </ion-card>

                  <ion-item-divider />
                </ion-grid>
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
  IonLabel,
  IonRow,
  IonCardHeader,
  IonItem,
  IonChip,
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
    IonLabel,
    IonRow,
    IonCardHeader,
    IonItem,
    IonChip,
  },

  computed: {
    userData() {
      console.log("[+] Get profil Data...")
      let userData = this.$store.state.user.userData;
      console.log({ userData });
      return userData;
    }
  },

  ionViewWillEnter(){
      console.log("[WillEnter] [+] Get profil Data...")
      let userData = this.$store.state.user.userData;
      console.log({ userData });
      return userData;
  },

  setup() {
    const router = useRouter();

    return {
      router,
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