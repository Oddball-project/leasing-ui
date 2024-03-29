import { defineStore } from "pinia";
import nuxtStorage from "nuxt-storage";

const user = JSON.parse(nuxtStorage.localStorage.getData("user"));

export const useAuthFackStore = defineStore({
  id: "auth-store",
  state: () => {
    return user
      ? { status: { loggeduser: true }, user }
      : { status: {}, user: null };
  },
  actions: {
    login({ dispatch, commit }, { email, password }) {
      commit("loginRequest", { email });

      userService.login(email, password).then(
        (user) => {
          commit("loginSuccess", user);
          router.push("/");
        },
        (error) => {
          commit("loginFailure", error);
          dispatch("notification/error", error, { root: true });
        }
      );
    },
    // Logout the user
    logout({ commit }) {
      userService.logout();
      commit("logout");
    },
    // register the user
    registeruser({ dispatch, commit }, user) {
      commit("registerRequest", user);
      userService.register(user).then(
        (user) => {
          commit("registerSuccess", user);
          dispatch("notification/success", "Registration successful", {
            root: true,
          });
          router.push("/login");
        },
        (error) => {
          commit("registerFailure", error);
          dispatch("notification/error", error, { root: true });
        }
      );
    },

    loginRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status = { loggeduser: true };
      state.user = user;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    },
    registerRequest(state) {
      state.status = { registering: true };
    },
    registerSuccess(state) {
      state.status = {};
    },
    registerFailure(state) {
      state.status = {};
    },
  },

  // Getter function for currentUser
  get currentUser() {
    return this.state;
  },

  // Setter function for currentUser
  set currentUser(value) {
    this.state = value;
  },
});
