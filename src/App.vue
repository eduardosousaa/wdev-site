<template>
  <div id="app">

    <HeaderSite />
    <router-view path="$router.key" />
    <FooterPage />
  </div>
</template>

<script>
import './styles/global.css'
import HeaderSite from './components/Head.vue'
import FooterPage from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    HeaderSite,
    FooterPage
  }
}
</script>


