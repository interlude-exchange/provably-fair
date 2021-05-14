<template lang="pug">
  #app

    .app-wrapper

      .app-disclaimer
        p ⚠ It's an open source single page application. You can download the source code and use it offline.
          | &nbsp;
          a(href="https://github.com/interlude-exchange/provably-fair", target="_blank") https://github.com/interlude-exchange/provably-fair

      .app-inner
        h1 Provably Fair

        .select-wrapper
          span Game type:
          select(v-model="game_type")
            option(value="dice_pro") Dice PRO
            option(value="dice_3d") Dice 3D

        h2 Server Secret
        input(v-model="server_secret")

        h2 Server Hash
        p
          span SHA2 Hash
        input.disabled(readonly="", v-model="server_hash")
        .proof-link-wrapper
          span CyberChef proof:
          a(:href="server_hash_cyber_chef_link", target="_blank") {{ server_hash_cyber_chef_link }}

        h2 Client seed
        input(v-model="client_seed")
        p
          span MD5
        input.disabled(readonly="", v-model="client_seed_md5")
        .proof-link-wrapper
          span CyberChef proof:
          a(:href="client_seed_md5_cyber_chef_link", target="_blank") {{ client_seed_md5_cyber_chef_link }}

        h2 Game Hash
        p
          span SHA256 HMAC
        input.disabled(readonly="", v-model="game_hash")
        .proof-link-wrapper
          span CyberChef Proof:
          a(:href="game_hash_cyber_chef_link", target="_blank") {{ game_hash_cyber_chef_link }}

        h2 To Integer
        textarea.disabled(:value="game_int_string", disabled="", rows="1")
        .proof-link-wrapper
          span CyberChef Proof:
          a(:href="game_int_cyber_chef_link", target="_blank") {{ game_int_cyber_chef_link }}

        h2 Result
        textarea.disabled(:value="game_result_formula", disabled="")
        p.result {{ game_result }}

        .proof-link-wrapper
          span Wolframalpha Proof:
          a(:href="game_result_wolframalpha", target="_blank") {{ game_result_wolframalpha }}

</template>

<script>

// https://github.com/emn178/js-sha256
const sha256 = require('js-sha256');

// https://github.com/dankogai/js-base64
const {Base64} = require('js-base64');

// https://github.com/pvorb/node-md5
const md5 = require('md5');

// https://github.com/MikeMcl/bignumber.js
const BigNumber = require('bignumber.js');

export default {
  name: 'App',
  data() {
    return {
      game_type: "dice_pro",
      server_secret: "052428a5f58009fc5a4f5a1150b06253",
      client_seed: "CYjXtXsyQBQz7xM5",
    }
  },

  computed: {

    server_hash() {
      return sha256.hex(this.server_secret);
    },

    server_hash_cyber_chef_link() {
      return "https://gchq.github.io/CyberChef/#recipe=SHA2('256',64,160)&input=" + Base64.encodeURI(this.server_secret);
    },

    client_seed_md5() {
      return md5(this.client_seed)
    },

    client_seed_md5_cyber_chef_link() {
      return "https://gchq.github.io/CyberChef/#recipe=MD5()&input=" + Base64.encodeURI(this.client_seed);
    },

    game_hash() {
      return sha256.hmac.update(this.server_secret, this.client_seed_md5);
    },

    game_hash_cyber_chef_link() {
      return "https://gchq.github.io/CyberChef/#recipe=HMAC(%7B'option':'UTF8','string':'" + this.server_secret + "'%7D,'SHA256')&input=" + Base64.encodeURI(this.client_seed_md5)
    },

    game_int_string() {
      return new BigNumber(this.game_hash, 16).toString(10);
    },

    game_int_cyber_chef_link() {
      return "https://gchq.github.io/CyberChef/#recipe=From_Base(16)&input=" + Base64.encodeURI(this.game_hash)
    },

    int_min() {
      return this.game_type === "dice_3d" ? 5 : 0;
    },

    int_max() {
      return this.game_type === "dice_3d" ? 56 : 9999;
    },

    game_result() {
      let game_int = new BigNumber(this.game_hash, 16);
      return parseInt(this.int_min + game_int.modulo(this.int_max - this.int_min + 1).toNumber());
    },

    game_result_formula() {
      return `${this.int_min} + (${this.game_int_string} mod (${this.int_max} - ${this.int_min} + 1))`

    },

    game_result_wolframalpha() {
      return "https://www.wolframalpha.com/input/?i=" + encodeURIComponent(this.game_result_formula)
    },

  },

  mounted() {

    let url = window.location.search.substring(1);
    let params = new URLSearchParams(url);

    let url_game_type = params.get("game_type")
    if (url_game_type) {
      if (['dice_pro', 'dice_3d'].includes(url_game_type)) {
        this.game_type = url_game_type;
      }
    }

    let url_server_secret = params.get("server_secret")
    if (url_server_secret) {
      this.server_secret = url_server_secret;
    }

    let url_client_seed = params.get("client_seed")
    if (url_client_seed) {
      this.client_seed = url_client_seed;
    }

  }

}
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
  font-family: 'Montserrat', sans-serif
  background-color: #ECECEC

a, span, input, textarea
  font-family: 'Roboto Mono', monospace

span
  font-weight: 500

h2
  font-size: 22px
  margin-top: 30px

.result
  font-size: 18px
  font-weight: bold
  color: #00DF74

input, textarea, select
  width: calc(100% - 30px)
  height: auto
  padding: 15px
  font-size: 12px
  resize: none
  border-radius: 10px
  background-color: #E0ECFA
  border: 2px solid #007AFF
  color: #121822
  outline: none
  font-weight: 500

  &.disabled
    background-color: #EAEAEA
    border: none !important
    cursor: default

.select-wrapper
  span
    margin-right: 10px

  select
    width: auto
    appearance: none
    cursor: pointer
    position: relative
    font-weight: bold

.app-wrapper
  display: flex
  flex-direction: column
  width: 100%
  align-items: center
  height: 100%
  min-height: 100vh
  padding: 40px 0

  .app-disclaimer
    text-align: left
    width: 100%
    max-width: 688px
    background: #F3F3F3
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.05)
    border-radius: 20px
    padding: 22px 45px
    margin-bottom: 40px

    & > p
      font-size: 14px
      font-weight: bold
      color: #121822

  .app-inner
    background: #F9F9F9
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.05)
    border-radius: 20px
    width: 100%
    max-width: 688px
    margin: 0 auto
    padding: 32px 45px
    overflow: hidden

.proof-link-wrapper
  margin-top: 10px

  span
    margin-right: 5px

  a
    font-size: 12px
    word-break: break-all

</style>
