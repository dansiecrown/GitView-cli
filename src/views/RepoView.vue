<template>
  <div class="git-repos">
    <div class="repo-head">
      <div class="head-text">
        <h1>View the list of repos</h1>
        <p>You can also change the user in the input field...</p>
      </div>
      <div class="input-div">
        <input v-model="user" :placeholder="user" class="user-input" />
        <button class="submit" @click="selectUser()">Select</button>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevHandle()">Prev</button>
      <div v-for="num in pages" :key="num">
        <button
          @click="skipHandle(num)"
          :class="page === num ? 'currPage' : ''"
        >
          {{ num }}
        </button>
      </div>
      <button @click="nextHandle()">Next</button>
    </div>

    <div class="repo-container">
      <div v-if="isLoading">
        <h2>Loading</h2>
      </div>
      <div v-else class="repos">
        <div
          v-for="repo in response"
          :key="repo.id"
          class="repo"
          :to="`/repo/${repo.id}`"
          :class="repo.id === selectedRepo.id ? 'repo-selected' : ''"
          @click="selectRepo(repo)"
        >
          <div v-if="repo.name" class="detail">
            <p class="name">Name</p>
            <h1 class="repo-title">{{ repo.name }}</h1>
          </div>

          <div v-if="repo.description" class="detail">
            <p class="name">Description</p>
            <p class="repo-desc">{{ repo.description }}</p>
          </div>

          <!-- <router-link
            :to="{
              name: 'detail-view',
              params: { id: `${repo.id}` }
            }"
            class="btn"
            @click="selectRepo(repo)"
            >View Details</router-link
          > -->
          <router-link
            class="btn"
            :to="{
              name: 'detail-view',
              params: { id: `${repo.id}` },
            }"
            @click="selectRepo(repo)"
            >View Details</router-link
          >
        </div>
      </div>

      <div class="repo-details">
        <div class="nonSelected" v-if="repoSelected">
          <h1>Select a repo to view here</h1>
        </div>
        <div class="shown-details" v-else>
          <div class="head-container">
            <h1>{{ selectedRepo.name }}</h1>

            <div>
              <p class="rounded">{{ selectedRepo.visibility }}</p>
            </div>

            <div>
              <p class="rounded">{{ selectedRepo.default_branch }}</p>
            </div>
          </div>
          <div v-if="selectedRepo.description">
            <p class="name">Description:</p>
            <p>{{ selectedRepo.description }}</p>
          </div>

          <div>
            <p class="name">Private:</p>
            <p>{{ selectedRepo.private }}</p>
          </div>

          <div v-if="selectedRepo.language">
            <p class="name">Language:</p>
            <p>{{ selectedRepo.language }}</p>
          </div>

          <div>
            <p class="name">Created:</p>
            <p>{{ selectedRepo.created_at }}</p>
          </div>

          <div>
            <p class="name">Last Updated:</p>
            <p>{{ selectedRepo.updated_at }}</p>
          </div>

          <div v-if="selectedRepo.license">
            <p>License:</p>
            <p>{{ selectedRepo.license.name }}</p>
          </div>

          <router-link
            class="btn"
            :to="{
              name: 'detail-view',
              params: { id: `${selectedRepo.id}` },
            }"
            @click="selectRepo(selectedRepo)"
            >View Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.repo-head {
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.head-text {
  display: flex;
  flex-direction: column;
}

.head-text h1 {
  font-size: 2em;
  margin-bottom: 0;
}

.head-text p {
  font-size: 1em;
  margin-top: 0;
}
.input-div {
  width: 30%;
  display: flex;
  margin: auto;
  margin-right: 0;
}

.user-input {
  padding: 1em;
  background-color: transparent;
  border: 1px solid yellowgreen;
  border-radius: 10px 0 0 10px;
  width: 70%;
}

.submit {
  padding: 1em;
  background-color: yellowgreen;
  border: 1px solid yellowgreen;
  color: white;
  width: 30%;
}

.user-input::placeholder {
  font-size: 1em;
}

.pagination {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.pagination button {
  padding: 1em;
  background-color: rgb(33, 37, 30);
  border: none;
  color: white;
  border-radius: 5px;
}

.pagination button:hover {
  background-color: yellowgreen;
  cursor: pointer;
}

.currPage {
  background-color: white !important;
  color: black !important;
  border: 1px solid black !important;
}

a {
  text-decoration: none;
  color: inherit;
}

.repo-container {
  display: flex;
  justify-content: space-between;
}

.repos {
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 60vh;
  padding: 20px;
  padding-left: 0;
}

.repo {
  padding: 20px;
  background-color: #ffffff33;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #00000006;
  box-sizing: border-box;
}

.detail h1,
.detail p {
  margin-top: 0;
  padding: 0;
  word-wrap: break-word;
}

.name {
  font-size: 0.7rem;
  font-weight: 400;
  padding: 0;
  border-radius: 5px;
  margin: 0;
  color: yellowgreen;
}

.repo-details {
  width: 40%;
  margin: auto;
  margin-top: 100px;
  text-align: center;
}
.btn {
  padding: 0.5em 1em;
  background-color: yellowgreen;
  color: white;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
}

.btn:hover {
  cursor: pointer;
  background-color: rgb(134, 179, 43);
}

.repo-selected {
  background-color: #3579011b;
}

/* Scrollbar styles */

.repos::-webkit-scrollbar,
.repos::-webkit-scrollbar-thumb,
.repos::-webkit-scrollbar-track {
  width: 8px;
  border: none;
  background: transparent;
}

.repos::-webkit-scrollbar-button,
.repos::-webkit-scrollbar-track-piece,
.repos::-webkit-scrollbar-corner,
.repos::-webkit-resizer {
  display: none;
}

.repos::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: yellowgreen;
}

.head-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 30px;
}

.head-container > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.head-container p {
  margin: auto !important;
  font-size: 14px;
}

.rounded {
  border-radius: 20px;
  padding: 5px 20px;
  background-color: #4caf50;
  color: white;
}

.shown-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.shown-details .name {
  margin-bottom: 0;
}

.shown-details p {
  margin-top: 0;
}

@media screen and (max-width: 900px) {
  .git-repos {
    padding: 40px !important;
  }
  .repo-head {
    flex-direction: column;
    text-align: center;
  }

  .input-div {
    width: 70%;
    margin: auto;
  }

  .repos {
    width: 100%;
  }

  .repo-details {
    display: none;
  }
}
</style>

<script>
import store from "../store/store";

export default {
  data() {
    return {
      isLoading: true,
      response: [],
      selectedRepo: [],
      repoSelected: true,
      error: null,
      user: "dansiecrown",
      page: 1,
    };
  },
  computed: {
    pages: function () {
      return [this.page, this.page + 1, this.page + 2, this.page + 3];
    },
  },
  mounted() {
    this.selectUser();
  },
  methods: {
    selectRepo(repo) {
      store.commit("SET_REPO", repo);
      this.selectedRepo = store.state.repo;
      this.repoSelected = false;
    },

    selectUser() {
      this.isLoading = true;
      fetch(
        `https://api.github.com/users/${this.user}/repos?page=${this.page}&per_page=6`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.length === 0) {
            this.page = 1;
            this.selectUser();
          }
          store.commit("SET_REPOS", data);
        })
        .then(() => {
          this.response = store.state.repos;
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = error;
          this.isLoading = false;
        });
    },

    nextHandle() {
      this.page = this.page + 1;
      this.selectUser();
    },

    skipHandle(num) {
      this.page = num;
      this.selectUser();
    },

    prevHandle() {
      if (this.page > 1) {
        this.page = this.page - 1;
        this.selectUser();
      }
    },
  },
};
</script>
