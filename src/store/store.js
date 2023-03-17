import {createStore} from 'vuex';

const store = new createStore({
    state: {
        repos: [], // array of objects
        repo: {}, // object
        loading: true,
        error: null,
    },

    mutations: {
        SET_REPOS(state, repos) {
            state.repos = repos;
        },
        SET_REPO(state, repo) {
            state.repo = repo;
        }
    },

    actions: {
        async fetchRepos({ commit }) {
            const response = await fetch('https://api.github.com/users/bradtraversy/repos');
            const data = await response.json();
            commit('SET_REPOS', data);
        }
    },

    getters: {
        repos: state => state.repos,
        repo: state => state.repo,
        isLoading: state => state.loading,
    }
});

export default store;