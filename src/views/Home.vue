<template>
  <div class="home">
    <div class="mb-5">
      <NavBar />
    </div>
    <div class="conteudo">
      <div class="mb-8">
        <v-row no-gutters style="height: 400px">
          <v-col cols="12" sm="1" class="pt-7 nav-bar-background-left"> </v-col>
          <v-col cols="12" sm="4" class="pt-7 nav-bar-background-left">
            <div class="mt-2">
              <p style="font-size: 45px" class="ms-3 mt-5" :align="alignP">
                <b style="color: #494949">
                  Aprenda idiomas com
                  <span style="color: #e73f0a">nativos e seja fluente!</span>
                </b>
              </p>
              <p
                style="font-size: 25px; color: #494949"
                class="ms-3"
                align="left"
              >
                Estude a qualquer horário em qualquer lugar. Faça parte com a
                gente!
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="vimg-person pt-1 nav-bar-background-left"
          >
            <!--  <img
              style="height: 100%"
              src="./images/HomeWigoPerson.png"
              alt=""
              srcset=""
            /> -->
            <v-img
              :lazy-src="myImage"
              max-height="600"
              max-width="600"
              :src="myImage"
            >
            </v-img>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="10">
            <div class="card-idiomas-disponiveis mt-5 mb-9">
              <div class="cards-conteudo">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="3">
                      <div class="card-idioma-individual mt-3">
                        <v-row>
                          <v-col cols="3" sm="4">
                            <v-img
                              class="ms-1"
                              src="https://images.vexels.com/media/users/3/164599/isolated/preview/ce858535b77f22068049aca2457e59ad-circulo-do-icone-do-idioma-da-bandeira-da-espanha.png"
                              max-height="50"
                              max-width="50"
                            >
                            </v-img>
                          </v-col>
                          <v-col cols="6" sm="6">
                            <p class="mt-3"><b>ESPANHOL</b></p>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <div class="card-idioma-individual mt-3">
                        <v-row>
                          <v-col cols="3" sm="4">
                            <v-img
                              class="ms-1"
                              src="https://images.vexels.com/media/users/3/164331/isolated/preview/aad83398a42c589aa011f1d9a3e8a1dc-circulo-do-icone-do-idioma-da-bandeira-da-italia.png"
                              max-height="50"
                              max-width="50"
                            >
                            </v-img>
                          </v-col>
                          <v-col cols="6" sm="6">
                            <p class="mt-3"><b>ITALIANO</b></p>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <div class="card-idioma-individual mt-3">
                        <v-row>
                          <v-col cols="3" sm="4">
                            <v-img
                              class="ms-1"
                              src="https://images.vexels.com/media/users/3/164649/isolated/preview/010f55d9bb5f8a28c3620583482d89ed-circulo-do-icone-do-idioma-da-bandeira-dos-eua.png"
                              max-height="50"
                              max-width="50"
                            >
                            </v-img>
                          </v-col>
                          <v-col cols="6" sm="6">
                            <p class="mt-3"><b>INGLÊS</b></p>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <div class="card-idioma-individual mt-3">
                        <v-row>
                          <v-col cols="3" sm="4">
                            <v-img
                              class="ms-1"
                              src="https://images.vexels.com/media/users/3/164028/isolated/preview/c1606dcf82a8fad6d1fa8711c8a1b8ef-circulo-de-icono-de-idioma-de-bandera-de-francia.png"
                              max-height="50"
                              max-width="50"
                            >
                            </v-img>
                          </v-col>
                          <v-col cols="6" sm="6">
                            <p class="mt-3"><b>FRANCÊS</b></p>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="planosSite mb-9">
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="8">
            <h1>Conheça nossos planos</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="1" class="mr-4"> </v-col>
          <v-col
            cols="12"
            class="mr-9"
            sm="3"
            v-for="item in planosDisponiveis"
            v-bind:key="item.id"
          >
            <v-card class="cardPlanos mx-auto">
              <v-list
                subheader
                three-line
                :style="`background-color:${item.colorDiv}; height: 320px;`"
              >
                <v-list-item>
                  <div style="height: 220px">
                    <v-list-item-content style="heigth: 100px">
                      <v-list-item-title
                        ><p
                          :style="`color:${item.colorText}; ; font-size:21px`"
                          align="left"
                          class="mt-5"
                        >
                          <b>{{ item.nome }}</b>
                        </p></v-list-item-title
                      >
                      <v-list-item-subtitle
                        class="mt-2"
                        v-for="desc in item.descricao"
                        v-bind:key="desc.text"
                      >
                        <p
                          align="left"
                          :style="`color:${item.colorText}; font-size:18px`"
                        >
                          <v-icon
                            :style="`font-size: 20px; color:${item.iconColor}; background-color:${item.colorText}; border-radius: 15px; float:left`"
                            class="mr-2"
                            >done</v-icon
                          >
                          {{ desc.text }}
                        </p>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </div>
                </v-list-item>
                <v-container>
                  <hr />
                  <p
                    align="left"
                    :style="`color:${item.colorText};`"
                    class="ms-2 mt-5"
                  >
                    R${{ item.valor }} /mês
                  </p>
                </v-container>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12">
            <v-btn
              class="querosabermaisbutton mt-9 mb-6"
              large
              dark
              color="#e73f0a"
            >
              <b>Quero saber mais!</b>
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="pt-7 mb-9">
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="4">
            <p style="font-size: 35px" align="left">
              <b style="color: #494949"
                >Bora conhecer o mundo
                <span style="color: #e73f0a">juntos sem legendas?</span></b
              >
            </p>
          </v-col>
          <v-col cols="12" sm="6" style="font-size: 18px">
            <p align="left" class="ms-4">
              Na Wigo, somos apaixonados pelas aventuras, desafios e coisas
              novas. Por isso, ao começar nessa jornada com a gente o primeiro
              passo será definir o seu objetivo e nós, por meio da nossa cultura
              e metodologia de ensino, ajudaremos você a atingí-lo.
              <span style="color: #e73f0a">Veja alguns deles:</span>
            </p>
          </v-col>
        </v-row>
      </div>
      <div class="mt-9">
        <v-row>
          <v-col cols="12" sm="1"></v-col>
          <v-col cols="12" sm="2" class="mr-9">
            <v-row>
              <v-col cols="4" sm="4">
                <img
                  style="width: 60px"
                  src="./images/aviaoiconewigo.png"
                  alt=""
                />
              </v-col>
              <v-col cols="12" sm="8">
                <p style="font-size: 20px" align="left">Viagem de turismo</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2" class="mr-9 ms-9">
            <v-row>
              <v-col cols="4" sm="4">
                <img
                  style="width: 55px"
                  src="./images/sombrerowigo.png"
                  alt=""
                />
              </v-col>
              <v-col cols="12" sm="8">
                <p style="font-size: 20px" align="left">
                  Prova de proeficiência
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2" class="mr-9 ms-9">
            <v-row>
              <v-col cols="4" sm="4">
                <img style="width: 60px" src="./images/mundowigo.png" alt="" />
              </v-col>
              <v-col cols="12" sm="8">
                <p style="font-size: 20px" align="left">Fazer intercâmbio</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2" class="ms-9">
            <v-row>
              <v-col cols="4" sm="4">
                <img style="width: 65px" src="./images/maleta.png" alt="" />
              </v-col>
              <v-col cols="12" sm="8">
                <p style="font-size: 20px" align="left">Morar no exterior</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="div-com-a-gente-e-mais-legal">
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="7">
            <p align="left" style="font-size: 35px; color: #494949">
              <b>Com a gente é muito mais legal</b>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="3">
            <p style="font-size: 20px; color: #494949" class="" align="left">
              Veja porquê com a gente a jornada é um pouquinho mais legal e
              divertida
            </p>
            <template>
              <div class="text-center">
                <v-dialog v-model="dialog" width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      elevation="2"
                      v-show="!showMobile"
                      dark
                      class="button-agendar-aula mt-2"
                      large
                      style="float: left"
                      color="#e73f0a"
                      v-bind="attrs"
                      v-on="on"
                      ><b>Agendar aula grátis</b></v-btn
                    >
                  </template>
                  <v-card class="mx-auto" max-width="600" elevation="2">
                    <v-container>
                      <h1
                        style="font-size: 25px"
                        class="mb-1"
                        color="#494949"
                        align="left"
                      >
                        <b>Agendar aula grátis</b>
                      </h1>
                      <hr class="mb-4" />
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                          v-model="nomeCompletoUsuario"
                          label="Nome Completo"
                          :rules="regrasNome"
                          required
                          outlined
                          color="#e73f0a"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="6" class="telefoneMobile">
                            <v-text-field
                              label="Telefone"
                              v-model="telefone"
                              :rules="regrasTelefone"
                              outlined
                              required
                              v-mask="'(##) #####-####'"
                              color="#e73f0a"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" class="emailMobile">
                            <v-text-field
                              v-model="emailUsuario"
                              :rules="regrasEmail"
                              label="E-mail"
                              outlined
                              required
                              color="#e73f0a"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-select
                          :items="items"
                          v-model="lingua"
                          :rules="regrasLingua"
                          label="Língua"
                          outlined
                          color="#e73f0a"
                          required
                        ></v-select>

                        <v-btn
                          @click="saveUsuario"
                          :loading="buttonSave"
                          block
                          large
                          style="border-radius: 11px"
                          dark
                          color="#e73f0a"
                        >
                          <b>Enviar</b>
                        </v-btn>
                      </v-form>
                    </v-container>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </v-col>
          <v-col cols="12" sm="7">
            <ul style="color: #494949; font-size: 21px">
              <li align="left" class="ps-1">Aulas interativas ao vivo</li>
              <li align="left" class="mt-3 ps-1">
                Diversos pacotes que se adaptam a suas necessidades
              </li>
              <li align="left" class="mt-3 ps-1">
                Grupos com nativos de diferentes partes do mundo para treinar
              </li>
              <li align="left" class="mt-3 ps-1">
                Aulas particulares com professores nativos
              </li>
            </ul>
            <v-btn
              elevation="2"
              v-show="showMobile"
              @click="dialog = !dialog"
              dark
              class="button-agendar-aula mt-5"
              large
              style="float: left"
              color="#e73f0a"
              v-bind="attrs"
              v-on="on"
              ><b>Agendar aula grátis</b></v-btn
            >
          </v-col>
        </v-row>
      </div>
      <div class="div-metodologia mb-6">
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="5">
            <p
              class="mb-8"
              align="left"
              style="font-size: 35px; color: #494949"
            >
              <b>Nossa metodologia</b>
            </p>
            <p
              align="left"
              style="font-size: 19px; color: #494949"
              class="mb-9"
            >
              Nós trabalhamos com o desenvolvimento das 4 habilidades: escrita,
              leitura, fala e escuta. Porém nossas aulas são focadas
              principlamente na fala e na escuta.
            </p>
            <p
              align="left"
              style="font-size: 19px; color: #494949"
              class="mb-9 mt-9"
            >
              Queremos que você realmente fale e entenda de forma muito
              espontânea a língua estrangeira escolhida .
            </p>
            <p
              align="left"
              style="font-size: 19px; color: #494949"
              class="mt-9"
            >
              As aulas são feitas 100% na lígua que você escolheu e não se
              preocupe... Os nossos professores nativos estão capacitados e vão
              te ajudar a evoluir no entendimento a cada dia.
            </p>
          </v-col>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="4">
            <div v-if="!showMobile" class="fotos-metodologia">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12">
                    <img
                      src="./images/metodologiaImage1.png"
                      alt=""
                      srcset=""
                    />
                  </v-col>
                  <v-col cols="12" sm="12">
                    <img
                      src="./images/metodologiaImage2.png"
                      alt=""
                      srcset=""
                    />
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="footer-home">
      <div class="filho-footer">
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="3" class="mt-7">
            <div class="footerAWigo">
              <span :style="`float:${alignP};font-size:22px`"
                ><b> A Wigo</b></span
              ><br />
            </div>
            <v-container v-if="showMobile">
              <hr class="mb-4" />
            </v-container>
            <div class="mb-2">
              <a href="" style="color: white"
                ><span :style="`float:${alignP}`"><b>></b> Quem Somos</span></a
              ><br />
            </div>
            <div class="mb-9">
              <a href="" style="color: white"
                ><span :style="`float:${alignP}`"
                  ><b>></b> Nossos Professores</span
                ></a
              ><br />
            </div>
            <div class="iconesfooter">
              <a href="" class="mr-2" :style="`color: white; float:${alignP}`">
                <img style="width: 22px" src="./images/instagram.png" alt="" />
              </a>
              <a href="" class="mr-2" :style="`color: white; float:${alignP}`">
                <img src="./images/facebook.png" alt="" />
              </a>
              <a href="" :style="`color: white; float:${alignP}`">
                <img src="./images/tik-tok.png" alt="" />
              </a>
            </div>
          </v-col>
          <v-container v-if="showMobile">
            <hr />
          </v-container>
          <v-col cols="12" sm="3" class="segundorowfooter">
            <div class="mb-2">
              <a href="" style="color: white"
                ><span :style="`float:${alignP}`"><b>Pacotes</b></span></a
              ><br />
            </div>
            <div class="mb-2">
              <a href="" style="color: white"
                ><span :style="`float:${alignP}`"><b>Contatos</b></span></a
              ><br />
            </div>
            <a href="" style="color: white">
              <span :style="`float:${alignP}`">
                <b>Teste seu conhecimento</b>
              </span>
            </a>
          </v-col>
          <v-col cols="12" sm="4" class="mt-7">
            <div class="mb-2" style="text-align: left">
              <label for="">Receba novidades por e-mail!</label>
            </div>
            <v-row>
              <v-col cols="12" sm="5">
                <v-text-field solo></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field solo></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-btn
                  large
                  style="border-radius: 11px; width: 40%"
                  dark
                  color="#e73f0a"
                >
                  <b>Enviar</b>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  data: () => ({
    items: ["Espanhol", "Ingles", "Frances", "Italiano"],
    valid: true,
    nomeCompletoUsuario: "",
    telefone: "",
    telefoneSplit: "",
    emailUsuario: "",
    lingua: "",
    imgShow: true,
    alignP: "left",
    buttonSave: false,
    showMobile: false,
    dialog: false,
    myImage: require("./images/HomeWigoPerson.png"),
    widthWindows: null,
    regrasNome: [
      (v) => !!v || "Nome é obrigatorio",
      (v) => / /.test(v) || "Nome invalido!",
    ],
    regrasTelefone: [
      (v) => !!v || "Telefone é obrigatorio",
      (v) => v.length > 14 || "Telefone invalido"
      ],
    regrasEmail: [
      (v) => !!v || "E-mail é obrigatorio",
      (v) => /.+@.+\..+/.test(v) || "E-mail invalido!",
    ],
    regrasLingua: [
      (v) => !!v || "Lingua é obrigatorio"
    ],
    planosDisponiveis: [
      {
        id: "1",
        colorDiv: "#F6F0EE",
        colorText: "#494949",
        nome: "Básico",
        iconColor: "#F6F0EE",
        valor: "200",
        descricao: [
          {
            text: "Uma aula particular fixa a cada 15 dias",
          },
        ],
      },
      {
        id: "2",
        colorDiv: "#bdb8b8",
        colorText: "white",
        nome: "VIP",
        iconColor: "#bdb8b8",
        valor: "300",
        descricao: [
          {
            text: "Uma aula particular fixa por semana",
          },
          {
            text: "Aulas extra ilimitadas",
          },
        ],
      },
      {
        id: "3",
        colorDiv: "#F6F0EE",
        colorText: "#494949",
        nome: "Club Wigo",
        iconColor: "#F6F0EE",
        valor: "400",
        descricao: [
          {
            text: "Duas aulas fixas particulares por semana",
          },
          {
            text: "Aulas extra ilimitadas",
          },
        ],
      },
    ],
  }),
  components: {
    NavBar,
  },
  methods: {
    saveUsuario() {
      if (this.$refs.form.validate()) {
        this.buttonSave = true;
        this.telefoneSplit = this.telefone.split(/[() -]+/).join("");
        axios
          .post("http://localhost:8000/api/usuarios", {
            nome: this.nomeCompletoUsuario,
            email: this.emailUsuario,
            telefone: this.telefoneSplit,
            lingua: this.lingua,
          })
          .then(() => {
            this.$toaster.error("VAMOS TE CONTATAR!!", { timeout: 3000 });
            axios
              .get(`http://localhost:8000/api/email/
              ${this.nomeCompletoUsuario}/
              ${this.emailUsuario}/
              ${this.telefoneSplit}/
              ${this.lingua}`)
            })
          .catch(() => {
            this.$toaster.add("ERRO AO CADASTRAR!", { timeout: 3000 });
          })
          .finally(() => {
            this.buttonSave = false;
          });
      }
    },
    sizeScreen() {
      this.widthWindows = window.innerWidth;
      if (this.widthWindows <= 600) {
        this.imgShow = false;
        this.showMobile = true;
        this.alignP = "left";
      } else {
        this.imgShow = true;
        this.showMobile = false;
        this.alignP = "left";
      }
    },
    showEvent(item, now) {
      item.forEach((element, index) => {
        console.log(element, index, element.name, now);
      });
    },
  },
  created() {
    this.sizeScreen();
    window.addEventListener("resize", this.sizeScreen);
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  },
};
</script>
<style lang="scss">
body {
  overflow: hidden;
}

.planosSite {
  margin-top: 30px;
  h1 {
    font-size: 35px;
    float: left;
    color: #e73f0a;
  }
  p {
    font-size: 20px;
  }
}

.card-idiomas-disponiveis {
  background-color: #bdb8b8;
  border-radius: 15px;
}

.card-idioma-individual {
  background-color: white;
  border-radius: 15px;
  height: 70px;
}

.diferenciais-icons {
  background-color: #e73f0a;
  border-radius: 30px;
  font-size: 55px;
}

.div-metodologia {
  margin-top: 70px;
}

.div-com-a-gente-e-mais-legal {
  margin-top: 70px;
  background-image: linear-gradient(180deg, white, #ece8e7);
  padding-bottom: 35px;
}

.cardPlanos{
  width: 90%;
}

.fotos-metodologia {
  img {
    height: 200px;
  }
}

li {
  list-style-type: none;
  position: relative;
  background-color: white;
  border-radius: 6px;
}

li:before {
  content: "•";
  display: inline-block;
  position: absolute;
  left: -15px;
  color: #e73f0a;
}

.cards-foco {
  color: whitesmoke;
  background-color: #bdb8b8;
  border-radius: 5px;
}

.cards-foco .progess-1 {
  width: 9px;
  height: 20px;
  background-color: #e73f0a;
}

.cards-foco .progess-2 {
  width: 9px;
  height: 25px;
  background-color: #e73f0a;
}

.cards-foco .progess-3 {
  width: 9px;
  height: 28px;
  background-color: #e73f0a;
}

.cards-foco .progess-4 {
  width: 9px;
  height: 30px;
  background-color: #e73f0a;
}

.cards-foco span {
  font-size: 13px;
}

.footer-home {
  background-color: #494949;
  color: #ece8e7;
  font-size: 19px;

  .filho-footer {
    padding: 12px;
  }

  img {
    width: 20px;
  }
  .footerAWigo {
    margin-bottom: 10px;
  }
  .iconesfooter {
    padding-bottom: 60px;
  }

  .segundorowfooter {
    margin-top: 30px;
  }
}
.querosabermaisbutton {
  border-radius: 11px;
  width: 40%;
}

@media screen and (max-width: 604px) {
  .conteudo {
    padding: 12px;
  }

  .telefoneMobile{
    padding-bottom: 0;
  }
  .emailMobile{
    padding-top: 0;
  }
  .planosSite {
    padding-top: 10px;
    margin-top: 1px;
  }
  .querosabermaisbutton {
    width: 100%;
  }
  .vimg-person {
    margin-top: 1px;
  }
  .cards-conteudo {
    margin-top: calc(150px * 2);
    height: 367px;
  }

  .card-idioma-individual {
    height: auto;
  }
  .div-com-a-gente-e-mais-legal {
    margin-top: 10px;
    padding: 12px;
  }
  .button-agendar-aula {
    width: 100%;
  }
  .footer-home {
    .footerAWigo {
      margin-bottom: 1px;
    }
    .iconesfooter {
      padding-bottom: 0px;
    }
    .segundorowfooter {
      margin-top: 0px;
    }
  }
}
</style>
