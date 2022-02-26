<template>
  <div class="about">
    <div v-if="!loginValidate">
      <v-card
        class="card mx-auto"
        style="margin-top: "
        max-width="344"
        elevation="9"
      >
        <v-container>
          <v-card-text>
            <h1 class="title pb-4">Entrar na Wigo</h1>
          </v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-alert v-if="error" type="error">
              {{ erroMessage }}
            </v-alert>
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              :rules="regrasEmail"
              type="email"
              color="#e73f0a"
              required
            ></v-text-field>

            <v-text-field
              v-model="senha"
              label="Senha"
              type="password"
              :rules="regrasSenha"
              outlined
              color="#e73f0a"
              required
            ></v-text-field>

            <v-btn
              @click="saveUsuario"
              :loading="buttonSave"
              block
              large
              style="border-radius: 11px"
              dark
              color="#e73f0a"
            >
              <b>Entrar</b>
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </div>
    <div v-if="loginValidate">
      <div v-if="disponnibleEvents">
        <h1 v-if="languageMessage == 'Espanhol'">Hola {{ nomeUsuario }}!!</h1>
        <h1 v-if="languageMessage == 'Inglês'">Hi {{ nomeUsuario }}!!</h1>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Meu Calendario
          </v-card-title>

          <v-card-text>
            <template>
              <v-row>
                <v-col>
                  <v-sheet height="400">
                    <v-calendar
                      ref="calendar"
                      :now="today"
                      :value="today"
                      :events="events"
                      @click:event="dialogLink = true"
                      color="primary"
                      type="week"
                    ></v-calendar>
                  </v-sheet>
                </v-col>
              </v-row>
            </template>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#e73f0a" text @click="dialog = false"> Fechar </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div v-else>
        <h1>Você não tem aulas disponiveis</h1>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    disponnibleEvents: true,
    buttonSave: false,
    loginValidate: false,
    error: false,
    languageMessage: '',
    erroMessage: "",
    valid: true,
    email: "",
    senha: "",
    today: new Date(),
    events: "",
    nomeUsuario: "",
    regrasEmail: [
      (v) => !!v || "E-mail é obrigatorio",
      (v) => /.+@.+\..+/.test(v) || "E-mail invalido!",
    ],
    regrasSenha: [(v) => !!v || "Senha é obrigatorio"],
  }),
  methods: {
    validateLoginUser(response) {
      if (!this.loginValidate) {
        document.location.reload(true);
      } else {
        this.nomeUsuario =
          response.data.nomeUsuario[response.data.nomeUsuario.length - 1].name;
        this.events = response.data.events;
        this.languageMessage = response.data.events[response.data.events.length - 1].name 
      }
    },
    saveUsuario() {
      if (this.$refs.form.validate()) {
        axios
          .post("http://localhost:8000/api/login", {
            email: this.email,
            senha: this.senha,
          })
          .then((response) => {
            if (response.data == "dados invalidos") {
              this.error = true;
              this.erroMessage = "Senha Invalida!!!";
            } else {
              this.error = false;
              this.loginValidate = true;
              if(response.data.events.length == 0){
                this.disponnibleEvents = false
              }else{
                this.validateLoginUser(response);
              }
            }
          })
          .catch(() => {
            this.error = true;
            this.erroMessage = "E-mail não cadastrado!!!";
          });
      }
    },
  },
  mounted() {},
};
</script>
<style>
.card {
  /* position: absolute; */
  width: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
