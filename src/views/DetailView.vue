<template>
  <div>
    <div class="head-container">
      <h1>{{ repo.name }}</h1>

      <div>
        <p class="rounded">{{ repo.visibility }}</p>
      </div>

      <div>
        <p class="rounded">{{ repo.default_branch }}</p>
      </div>
    </div>
    <div v-if="repo.description">
      <p class="name">Description:</p>
      <p>{{ repo.description }}</p>
    </div>

    <div class="content-row">
      <div>
        <p class="name">Private:</p>
        <p>{{ repo.private }}</p>
      </div>

      <div v-if="repo.language">
        <p class="name">Language:</p>
        <p>{{ repo.language }}</p>
      </div>
    </div>

    <div class="content-row">
      <div>
        <p class="name">Forks:</p>
        <p>{{ repo.forks }}</p>
      </div>

      <div>
        <p class="name">Watchers:</p>
        <p>{{ repo.watchers }}</p>
      </div>
    </div>

    <div class="content-row">
      <div>
        <p class="name">Open Issues:</p>
        <p>{{ repo.open_issues }}</p>
      </div>

      <div v-if="repo.license">
        <p>License:</p>
        <p>{{ repo.license.name }}</p>
      </div>
    </div>

    <div class="content-row">
      <div>
        <p class="name">Last Updated:</p>
        <p>{{ repo.updated_at }}</p>
      </div>

      <div>
        <p class="name">Created:</p>
        <p>{{ repo.created_at }}</p>
      </div>
    </div>

    <!-- Visibility -->

    <router-link to="/repos" class="back">Back</router-link>
  </div>
</template>

<style>
.head-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.head-container > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.head-container p {
  margin: auto;
  font-size: 14px;
}

.rounded {
  border-radius: 20px;
  padding: 5px 20px;
  background-color: #4caf50;
  color: white;
}

.content-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
}

.content-row > div {
  width: 40%;
}

.back {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

<script>
import store from '../store/store'
export default {
  data() {
    return {
      repo: store.state.repo
    }
  }
}
</script>
