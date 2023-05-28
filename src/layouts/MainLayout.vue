<template>
  <q-layout 
  view="lHh Lpr lFf" 
  :class="{'theme-transition': isThemeTransition, 'layout-light': !$q.dark.isActive, 'layout-dark': $q.dark.isActive}"
  >
    <q-header 
    :class="{'header-light': !$q.dark.isActive, 'header-dark': $q.dark.isActive}"
    bordered
    >
      <q-toolbar>
        
        <q-toolbar-title class="text-lobster text-bold" style="font-size: 42px">
          Gardenia
        </q-toolbar-title>
              <!-- Dark/Light Mode Toggle -->
      <div class="toggle-container">
        <q-toggle
          v-model="$q.dark.isActive"
          checked-icon="fas fa-moon"
          color="green"
          unchecked-icon="fas fa-sun" 
        />
      </div>
      </q-toolbar>

    </q-header>
    <q-footer 
    class="small-screen-only"
    :class="{'footer-light': !$q.dark.isActive, 'footer-dark': $q.dark.isActive}"
    bordered>
      <div>
        <q-tabs
          
          align="justify"
          active-color="accent"
          indicator-color="transparent"

         
          no-caps
        >
          <q-route-tab name="home" to="/" icon="fa fa-house" label="Home" />
          <q-route-tab
            name="photos"
            to="/cultures"
            icon="fa fa-dna"
            label="Cultures"
          />
          <q-route-tab
            name="videos"
            to="/spawns"
            icon="fa fa-seedling"
            label="Spawns"
          />
          <q-route-tab
            name="movies"
            to="/fruits"
            icon="fa fa-apple-whole"
            label="Fruit"
          />
          <q-btn-dropdown
            auto-close
            stretch
            flat
            no-caps
            active-color="accent"
            indicator-color="accent"
          >
            <template v-slot:label active-color="accent" >
              <div>
                <div class="row justify-around items-center no-wrap"
                >
                  <q-icon name="fa fa-user-gear" />
                </div>
                <div class="row items-center no-wrap">Settings</div>
              </div>
            </template>

            <q-list>
              <q-item clickable @click="tab = 'logout'">
                <q-item-section>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46l5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm6.52-5.8H8.55v-1h4.93l-1.6-1.6l.71-.7l2.47 2.46v.71l-2.49 2.48l-.7-.7l1.65-1.65z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Logout</q-item-section
                >
              </q-item>

              <q-item clickable @click="tab = 'about'">
                <q-item-section>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                    <path
                      fill="currentColor"
                      d="M5.763 17H20V5H4v13.385L5.763 17Zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM11 14h2v2h-2v-2ZM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393Z"
                    />
                  </svg>
                  About</q-item-section
                >
              </q-item>
              <q-item clickable @click="tab = 'substrate'">
                <q-item-section>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                    <path
                      fill="currentColor"
                      d="M9 17.41V27h9.59l-2-2H11v-5.59l-2-2z"
                      class="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M34.87 32.29L32 29.38V32H4v-4.15h2v-1.6H4V19.6h2V18H4v-6.4h2V10H4V4.41l15.94 15.85v-2.82L3.71 1.29A1 1 0 0 0 2 2v31a1 1 0 0 0 1 1h31.16a1 1 0 0 0 .71-1.71Z"
                      class="clr-i-outline clr-i-outline-path-2"
                    />
                    <path
                      fill="currentColor"
                      d="M24 30h4a2 2 0 0 0 2-2V8.7l-2.3-4.23a2 2 0 0 0-1.76-1a2 2 0 0 0-1.76 1.08L22 8.72V28a2 2 0 0 0 2 2Zm0-20.8l1.94-3.77L28 9.21V24h-4Zm0 16.43h4v2.44h-4Z"
                      class="clr-i-outline clr-i-outline-path-3"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                  Substrate</q-item-section
                >
              </q-item>
              <q-item clickable @click="tab = 'profile'">
                <q-item-section>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                  >
                    <path
                      fill="currentColor"
                      d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m7 6c-.16 0-.24.08-.24.24l-.26 1.26c-.22.18-.54.34-.78.5l-1.28-.5c-.08 0-.24 0-.32.1l-.96 1.76c-.08.08-.08.24.08.32l1.04.82v1l-1.04.82c-.08.08-.16.24-.08.32l.96 1.76c.08.1.24.1.32.1l1.28-.5c.24.16.56.32.78.5l.26 1.26c0 .16.08.24.24.24h2c.08 0 .24-.08.24-.24l.16-1.26c.32-.18.64-.34.88-.5l1.22.5c.14 0 .3 0 .3-.1l1.04-1.76c.08-.08 0-.24-.08-.32l-1.04-.82v-1l1.04-.82c.08-.08.16-.24.08-.32L21.8 13.6c0-.1-.16-.1-.3-.1l-1.22.5c-.24-.16-.56-.32-.88-.5l-.16-1.26c0-.16-.16-.24-.24-.24h-2m-7 1c-2.67 0-8 1.33-8 4v3h9.67c-.28-.59-.48-1.23-.58-1.9H3.9V17c0-.64 3.13-2.1 6.1-2.1c.43 0 .87.04 1.3.1c.2-.64.47-1.24.82-1.79c-.78-.13-1.52-.21-2.12-.21m8.04 2.5c.8 0 1.46.66 1.46 1.54c0 .8-.66 1.46-1.46 1.46c-.88 0-1.54-.66-1.54-1.46c0-.88.66-1.54 1.54-1.54Z"
                    />
                  </svg>
                  Profile</q-item-section
                >
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs>
      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { watch } from "vue";

export default {
  name: "MainLayout",

  setup() {
    const $q = useQuasar();
    const isThemeTransition = ref(false);

    function changeTheme() {
      isThemeTransition.value = true;
      $q.dark.toggle()
    }

    watch(() => $q.dark.isActive, (val) => {
      if (isThemeTransition.value) {
        isThemeTransition.value = false;
        console.log(val ? "dark" : "light");
      }
    });
        return {
      changeTheme,
      isThemeTransition,
    };
  },
};
</script>

<style lang="sass">
.q-header
  &.header-light
    background-color: #fff
    color: #000
    border-bottom: 1px solid #000

  &.header-dark
    background-color: #000
    color: #fff
    border-bottom: 1px solid #fff

.q-footer
  &.footer-light
    background-color: #fff
    color: #000
    border-top: 1px solid #000

  &.footer-dark
    background-color: #000
    color: #fff
    border-top: 1px solid #fff

.q-layout
  &.layout-light
    background-color: #fff
    color: #000

  &.layout-dark
    background-color: #000
    color: #fff

.theme-transition
  transition: background-color 0.5s ease, color 0.5s ease

svg
  width: 20px
  height: 20px

.toggle-container
  display: flex
  justify-content: flex-end
  align-items: center
  padding: 0 16px
</style>
