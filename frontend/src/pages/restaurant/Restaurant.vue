<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-text>
        <h1>
          <ion-icon name="home" />
          <span class="ml-2">My Restaurant</span>
        </h1>
      </ion-text>
      <ion-section>
        <h2>
          <ion-icon name="home" />
          <span class="ml-2">My Menus</span>
        </h2>
        <ion-list>
          <ion-item>
            <ion-label>
              <ion-icon name="restaurant" />
              <span class="ml-2">Menu 1</span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon name="restaurant" />
              <span class="ml-2">Menu 2</span>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-section>
      <ion-section>
        <h2>
          <ion-icon name="home" />
          <span class="ml-2">My Orders</span>
        </h2>
        <ion-list>
          <ion-item>
            <ion-label>
              <ion-icon name="restaurant" />
              <span class="ml-2">Order 1</span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon name="restaurant" />
              <span class="ml-2">Order 2</span>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-section>
      <ion-section>
        <h2>
          <ion-icon name="home" />
          <span class="ml-2">My Articles</span>
        </h2>
        <ion-list>
          <ion-item>
            <ion-label>
              <ion-icon name="restaurant" />
              <span class="ml-2">Article 1</span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon name="restaurant" />
              <span class="ml-2">Article 2</span>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-section>
      <Button
        text="Router redirect"
        color="medium"
        :to="{ name: 'edit-profile' }"
      />
      <ion-text> Name: {{ data.name }} </ion-text>
      <ion-text> Email: {{ data.email }} </ion-text>
      <ion-text> Phone: {{ data.phone }} </ion-text>
      <ion-text> Address: {{ data.address }} </ion-text>
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
  IonText,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import Button from "../../components/Button.vue";

export default {
  name: "Restaurant",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    Button,
  },
  setup() {
    const router = useRouter();
    const data = {
      name: "Kicum",
      email: "kicum@kicum.com",
      phone: "+33646326521",
      address: "44 avenue du 11 novembre",
    };
    return {
      router,
      data,
    };
  },
  methods: {},
};
</script>
