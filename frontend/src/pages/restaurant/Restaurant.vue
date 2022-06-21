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
              <ion-button @click="() => router.push({ name: 'RestaurantEdit', params: { restoDatas: JSON.stringify(data) } })">Modifier</ion-button>
            </div>


            <!-- Menus Details for this restaurant -->
            <ion-card-content class="p-8">
              <IonTitle size="large" color="primary">Mes Menu</IonTitle>
              <ion-button href="/restaurant/menu/add" color="success">Ajouter un Menu</ion-button>

              <div v-for="(menu, menuIndex) in data[0].menus" :key="menu.id">
                <h2>{{ menu.name }}</h2>
                <p>Description: {{ menu.description }}</p>
                <p>Image: {{ menu.image }}</p>
                <p>Prix: {{ menu.price }}€</p>
                <h2>Articles :</h2>

                <!--
                  ! ERROR While getCurrentMenu => State don't uptate himself while navigate
                  -->
                <li v-for="(article, articleIndex) in data[0].menus[menuIndex].articles" :key="article.id">
                  {{ getArticleNameFromMenu(articleIndex, data[0].menus[menuIndex]) }} {{ getArticlePriceFromMenu(articleIndex, data[0].menus[menuIndex]) }} €
                </li>
                <ion-button @click="() => router.push({ name: 'MenuEdit', params: {menu: JSON.stringify(menu) } })" color="secondary">Modifier ce Menu</ion-button>
                <ion-button color="danger">Supprimer ce Menu</ion-button>

              </div>
              
            </ion-card-content>

          <!-- * Articles Details for this restaurant -->
          <ion-card-content className="p-8">
            <IonTitle size="large" color="primary">Mes Articles</IonTitle>
              <ion-button href="/restaurant/articles/add" color="success">Ajouter un Article</ion-button>

                <!-- 
                  TODO: Réparer la modification du state lors de la navogation entre les pages pour l'article et les Menus
                 -->
                <li v-for="(article, articleIndex) in data[0].articles" :key="article.id">
                  {{ article.name }}    {{ article.price }}€
                <div>
                  <ion-button @click="() => router.push({ name: 'ArticleEdit', params: {article: (getCurrentArticle(articleIndex, data)) } })" color="secondary">Modifier cet Article</ion-button>
                  <ion-button color="danger">Supprimer cet Article</ion-button>
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
  IonContent
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
    IonContent
  },
  setup() {
    const router = useRouter();
    const data = [{
                  "id": 0,
                  "name": "My tacos",
                  "description": "Tacos de la meilleure qualité",
                  "address": "1 rue de la paix",
                  "rating": 4.5,
                  "distance": 2,
                  "city": "Bordeaux",
                  "articles": [
                    {
                      "id": 0,
                      "name": "Tacos",
                      "description": "Tacos de la meilleure qualité",
                      "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                      "price": 8.5
                    },
                    {
                      "id": 1,
                      "name": "Frites",
                      "description": "Tacos de la meilleure qualité",
                      "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                      "price": 8.5
                    }
                  ],
                  "menus": [
                    {
                      "id": 0,
                      "name": "Menu 1",
                      "description": "Menu de la meilleure qualité",
                      "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                      "price": 8.5,
                      "articles": [
                        {
                          "id": 0,
                          "name": "Tacos",
                          "description": "Tacos de la meilleure qualité",
                          "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                          "price": 8.5
                        },
                        {
                          "id": 1,
                          "name": "Super tacos",
                          "description": "Tacos de la meilleure qualité",
                          "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                          "price": 8.5
                        }
                      ]
                    },
                    {
                      "id": 0,
                      "name": "Menu 2",
                      "description": "Menu secondaire",
                      "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                      "price": 8.5,
                      "articles": [
                        {
                          "id": 0,
                          "name": "Frites",
                          "description": "Tacos de la meilleure qualité",
                          "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                          "price": 8.5
                        },
                        {
                          "id": 1,
                          "name": "Maxi frites",
                          "description": "Tacos de la meilleure qualité",
                          "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                          "price": 8.5
                        }
                      ]
                    }
                  ]
                }];
    return {
      router,
      data,
    };
  },
  methods: {

    getCurrentMenu(menuIndex, data) {
      let currentMenu = data[0].menus[menuIndex];
      console.log({ currentMenu })
      currentMenu = JSON.stringify(currentMenu);
      return currentMenu;
    },

    getCurrentArticle(articleIndex, data) {
      let currentArticle = data[0].articles[articleIndex];
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
    }
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