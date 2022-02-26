<template>
  <div v-if="!showMobileNavBar">
    <v-row no-gutters style="height: 100px">
      <v-col cols="12" sm="2" class="nav-bar-background-left ps-9">
        <a href="/">
          <img
            style="max-height: 80px"
            class="mt-4"
            src="./images/logoWigo.png"
            alt=""
            srcset=""
          />
        </a>
      </v-col>
      <v-col
        v-if="!showMobileNavBar"
        cols="12"
        sm="6"
        class="pt-7 nav-bar-background-left"
      >
        <div class="mt-4">
          <a href="#" id="homecss" class="nav-bar-text">Home</a>
          <a href="#" id="quemsomoscss" class="nav-bar-text ms-9">Quem somos</a>
          <a href="#" id="contatocss" class="nav-bar-text ms-9"
            >Teste seu conhecimento</a
          >
        </div>
      </v-col>
      <v-col v-if="!showMobileNavBar" cols="12" sm="2" class="mt-1">
        <v-btn
          style="border-radius: 13px; color: #bdb8b8"
          class="button-sabermais mr-9"
          large
          color="White"
          ligth
          elevation="3"
          @click="scrollPlanos"
          ><b>VER PLANOS</b></v-btn
        >
      </v-col>
      <v-col v-elseif="!showMobileNavBar" cols="12" sm="2" class="mt-1">
        <v-btn
          style="border-radius: 13px"
          class="button-sabermais mr-9"
          large
          color="#E73F0A"
          dark
          elevation="3"
          ><b>Acessar</b></v-btn
        >
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-app-bar dense fixed prominent elevation="5">
      <v-container>
        <v-row>
          <v-col cols="2" sm="2">
            <a href="/">
              <img
                style="max-height: 100px"
                src="./images/logosemfundo.png"
                class="pb-6"
                alt=""
                srcset=""
              />
            </a>
          </v-col>
          <v-col offset-md="4" sm="2" key="end">
            <v-app-bar-nav-icon
              @click="drawer = true"
              x-large
              class="mt-3"
              style="float: right"
            ></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <div>
     <v-navigation-drawer v-model="drawer" width="70%" absolute temporary style="position:fixed; top:0; left:0; overflow-y:scroll;">
        <v-list nav dense>
          <a href="/">
              <img
                style="height: 60px"
                src="./images/logosemfundo.png"
                alt=""
                srcset=""
              />
            </a>
            <hr>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <div v-for="i in modalLateral" :key="i.id" style="overflow: hidden;">
              <v-list-item class="mt-2">
                <a href=""><p align="left">{{i.text}}</p></a>
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    showMobileNavBar: false,
    group: null,
    modalLateral: [
      {
        id: "1",
        text: "Home",
      },
      {
        id: "2",
        text: "Quem somos",
      },
      {
        id: "3",
        text: "Teste seu conhecimento",
      },
    ],
  }),

  props: {},
  methods: {
    sizeScreen() {
      this.widthWindows = window.innerWidth;
      if (this.widthWindows <= 600) {
        this.showMobileNavBar = true;
      } else {
        this.showMobileNavBar = false;
      }
    },
    scrollPlanos() {
      const seletor = document.querySelector(".planosSite");
      seletor.scrollIntoView({ behavior: "smooth" });
    },
  },
  created() {
    window.addEventListener("resize", this.sizeScreen);
    this.sizeScreen();
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
v-img {
  margin-left: 120px;
  margin-top: 40px;
}
#homecss {
  color: #a9a9a9;
}
#homecss:hover {
  color: black;
}

#quemsomoscss {
  color: #a9a9a9;
}
#quemsomoscss:hover {
  color: black;
}

#contatocss {
  color: #a9a9a9;
}
#contatocss:hover {
  color: black;
}

a.nav-bar {
  color: gray;
}
a.nav-bar-text:hover {
  color: black;
}
.nav-bar-text::after {
  content: "";
  width: 0px;
  height: 2px;
  display: block;
  background: black;
  transition: 300ms;
}

.nav-bar-text:hover::after {
  width: 100%;
}

a {
  color: red;
  text-decoration: none;
}

.v-application a {
  display: inline-block;
  color: gray;
  font-size: 21px;
}

.button-sabermais {
  width: 80%;
  margin-top: 30px;
}

.div-navigation{
  margin-bottom: 40%;
}

@media screen and (max-width: 600px) {
  .button-sabermais {
    margin-top: 10px;
    margin-left: 10%;
  }
}
</style>
