<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/repos">Git Repos</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }" class="page-container">
    <transition name="scale-slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <footer>
    <p>Copyright © 2023 | Deetechy | All Rights Reserved</p>
  </footer>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
nav {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 1rem;
  width: 80%;
  margin: auto;
  margin-top: 20px;
}

nav a {
  color: grey;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.router-link-exact-active {
  background-color: #f1f1f1;
  color: #333;
}

nav a:hover {
  background-color: #f1f1f152;
}

.page-container {
  width: 80%;
  height: 75vh;
  margin: auto;
  margin-top: 10px;
  padding: 1rem;
}

/* Transition styles */
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}
.scale-slide-enter-from {
  left: -100%;
}
.scale-slide-enter-to {
  left: 0%;
}
.scale-slide-leave-from {
  transform: scale(1);
}
.scale-slide-leave-to {
  transform: scale(0.8);
}

/* Transition style ends here */

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.538);
}

footer p {
  margin: auto;
  font-size: 1em;
  padding: 10px;
  color: #223d36;
  text-align: center;
}

@media screen and (max-width: 768px) {
  nav {
    margin: auto;
    margin-top: 20px;
    justify-content: center;
  }

  nav a {
    font-size: 1rem;
  }

  .page-container {
    width: 100%;
    margin: 0;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #223d36;
  }

  footer p {
    margin: auto;
    font-size: 1em;
    padding: 10px;
    color: white;
  }
}
</style>
