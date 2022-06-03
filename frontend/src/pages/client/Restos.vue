<style scoped>
.scroller {
  height: 100%;
}
</style>

<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-text>
        <h1>Les Restos autour de chez vous</h1>
      </ion-text>
      <ion-content scroll-y="true">
        <ion-list class="">
          <RestaurantCard v-for="restaurant in data" />
        </ion-list>
      </ion-content>
    </ion-page>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText
} from "@ionic/vue";
import { useRouter } from "vue-router";

import RestaurantCard from "@/components/molecules/restos/RestaurantCard";

export default {
  name: "Restos",
  components: {
    RestaurantCard,
    IonIcon,
    IonText,
    IonPage
  },
  setup() {
    const router = useRouter();
    const data = [
      {
        id: "1",
        name: "MyTacos",
        address: "1 rue de la paix",
        description: "Tacos de la meilleure qualité",
        image:
          "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
        rating: 4.5,
        distance: 2,
        ville: 3,
        articles: [
          {
            id: "1",
            name: "Tacos",
            description: "Tacos de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "2",
            name: "Burger",
            description: "Burger de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "3",
            name: "Pizza",
            description: "Pizza de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "4",
            name: "Coca-Cola",
            description: "Coca-Cola de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          }
        ],
        menus: [
          {
            id: "1",
            name: "Menu 1",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "2",
            name: "Menu 2",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "3",
            name: "Menu 3",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          }
        ]
      },
      {
        id: "2",
        name: "MyKebab",
        address: "1 rue de la paix",
        description: "Tacos de la meilleure qualité",
        image:
          "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
        rating: 4.5,
        distance: 2,
        ville: 3,
        articles: [
          {
            id: "1",
            name: "Tacos",
            description: "Tacos de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "2",
            name: "Burger",
            description: "Burger de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "3",
            name: "Pizza",
            description: "Pizza de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "4",
            name: "Coca-Cola",
            description: "Coca-Cola de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          }
        ],
        menus: [
          {
            id: "1",
            name: "Menu 1",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "2",
            name: "Menu 2",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "3",
            name: "Menu 3",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          }
        ]
      },
      {
        id: "2",
        name: "MyKebab",
        address: "1 rue de la paix",
        description: "Tacos de la meilleure qualité",
        image:
          "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
        rating: 4.5,
        distance: 2,
        ville: 3,
        articles: [
          {
            id: "1",
            name: "Tacos",
            description: "Tacos de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "2",
            name: "Burger",
            description: "Burger de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "3",
            name: "Pizza",
            description: "Pizza de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "4",
            name: "Coca-Cola",
            description: "Coca-Cola de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          }
        ],
        menus: [
          {
            id: "1",
            name: "Menu 1",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "2",
            name: "Menu 2",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "3",
            name: "Menu 3",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          }
        ]
      },
      {
        id: "3",
        name: "MyKebab",
        address: "1 rue de la paix",
        description: "Tacos de la meilleure qualité",
        image:
          "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
        rating: 4.5,
        distance: 2,
        ville: 3,
        articles: [
          {
            id: "1",
            name: "Tacos",
            description: "Tacos de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "2",
            name: "Burger",
            description: "Burger de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "3",
            name: "Pizza",
            description: "Pizza de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "4",
            name: "Coca-Cola",
            description: "Coca-Cola de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          }
        ],
        menus: [
          {
            id: "1",
            name: "Menu 1",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "2",
            name: "Menu 2",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "3",
            name: "Menu 3",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          }
        ]
      },
      {
        id: "4",
        name: "MyKebab",
        address: "1 rue de la paix",
        description: "Tacos de la meilleure qualité",
        image:
          "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
        rating: 4.5,
        distance: 2,
        ville: 3,
        articles: [
          {
            id: "1",
            name: "Tacos",
            description: "Tacos de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "2",
            name: "Burger",
            description: "Burger de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "3",
            name: "Pizza",
            description: "Pizza de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          },
          {
            id: "4",
            name: "Coca-Cola",
            description: "Coca-Cola de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10
          }
        ],
        menus: [
          {
            id: "1",
            name: "Menu 1",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "2",
            name: "Menu 2",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          },
          {
            id: "3",
            name: "Menu 3",
            description: "Menu de la meilleure qualité",
            image:
              "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            price: 10,
            articles: [1, 2]
          }
        ]
      }
    ];

    return {
      router,
      data
    };
  },
  methods: {}
};
</script>
