<template>
    <header>
      <nav class="container">
        <router-link to="/"><img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="WDEV" id="logo"></router-link>
  
        <img v-on:click="toggleMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu" id="menu-buttom">
  
        <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
  
        <div id="menu-itens" :class="{ active: menuActive }">
          <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="WDEV" id="menu-logo">
  
          <ul>
            <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
            <li v-on:click="closeMenu"><router-link to="/videos">Video</router-link></li>
            <li v-on:click="closeMenu"><router-link to="/about">Sobre</router-link></li>
            <li v-on:click="closeMenu"><router-link to="/contato">Contato</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderSite',
    data() {
      return {
        menuActive: false
      };
    },
    methods: {
      toggleMenu: function () {
        this.menuActive = !this.menuActive;
        console.log('Clicou toggle');
      },
      closeMenu: function () {
        this.menuActive = false;
        console.log('Clicou close');
      }
    }
  };
  </script>

<style scoped>

    header {
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    #logo {
        width: 130px;
    }

    #menu-buttom {
        width: 30px;
    }

    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000;
        opacity: 0.8;
    }

    #menu-logo {
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #menu-itens {
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: display 0.3s ease-in-out;
    }

    #menu-itens.active {
        display: flex;
    }

    ul {
        list-style: none;
        text-align: center;
    }

    ul li {
        margin: 20px 0px;
    }

    ul li a {
        color: var(--color-text-light);
    }

    @media (min-width: 700px) {
        #menu-buttom,
        #menu-logo,
        #menu-overlay {
            display: none;
        }

        #menu-itens {
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul {
            display: flex;
            height: 60px;
            align-items: center;
        }

        ul li {
            margin: 0;
            margin-left: 20px;
        }
    }

</style>