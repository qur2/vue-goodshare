<template>
  <div>
    <div v-if="this.$props.bundle === 'world'">
      <vue-goodshare-facebook has_icon has_counter title_social="Facebook"></vue-goodshare-facebook>
      <vue-goodshare-linked-in has_icon has_counter title_social="LinkedIn"></vue-goodshare-linked-in>
      <vue-goodshare-tumblr has_icon has_counter title_social="Tumblr"></vue-goodshare-tumblr>
      <vue-goodshare-pinterest has_icon has_counter title_social="Pinterest"></vue-goodshare-pinterest>
      <vue-goodshare-reddit has_icon has_counter title_social="Reddit"></vue-goodshare-reddit>
      <vue-goodshare-twitter has_icon title_social="Twitter"></vue-goodshare-twitter>
      <vue-goodshare-google-plus has_icon title_social="Google Plus"></vue-goodshare-google-plus>
    </div>
    <div v-if="this.$props.bundle === 'ru'">
      <vue-goodshare-vkontakte has_icon has_counter title_social="Вконтакте"></vue-goodshare-vkontakte>
      <vue-goodshare-odnoklassniki has_icon has_counter title_social="Одноклассники"></vue-goodshare-odnoklassniki>
      <vue-goodshare-facebook has_icon has_counter title_social="Фейсбук"></vue-goodshare-facebook>
      <vue-goodshare-moi-mir has_icon has_counter title_social="Мой Мир"></vue-goodshare-moi-mir>
      <vue-goodshare-twitter has_icon title_social="Твиттер"></vue-goodshare-twitter>
      <vue-goodshare-live-journal has_icon title_social="Живой Журнал"></vue-goodshare-live-journal>
    </div>
    <div v-if="this.$props.bundle === 'mobile'">
      <vue-goodshare-telegram has_icon title_social="Telegram"></vue-goodshare-telegram>
      <vue-goodshare-viber has_icon title_social="Viber"></vue-goodshare-viber>
      <vue-goodshare-whats-app has_icon title_social="WhatsApp"></vue-goodshare-whats-app>
      <vue-goodshare-line has_icon title_social="LINE"></vue-goodshare-line>
    </div>
  </div>
</template>

<script>
  import providers from './providers'
  
  export default {
    name: 'VueGoodshare',
    props: {
      bundle: {
        type: String,
        default: 'world'
      }
    },
    components: providers
  }
</script>
