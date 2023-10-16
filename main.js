const app = Vue.createApp({
  data() {
    return {
      users: [],
      userCard: false,
      showUserCard: "",
      isError: false,
      isUsersLoading: false,
      startSearch: true,
      isTable: false,
    };
  },
  methods: {
    selectWorker(worker) {
      this.userCard = true;
      if (worker.includes("@")) {
        const searchedWorkerByEmail = this.users.find(
          (user) => user.email === worker
        );
        this.showUserCard = searchedWorkerByEmail;
      } else {
        const searchedWorkerByName = this.users.find(
          (user) => user.username === worker
        );
        this.showUserCard = searchedWorkerByName;
      }
    },
    async fetchUsers() {
      try {
        this.startSearch = false;
        this.isTable = true;
        this.isUsersLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users?id=1&id=2&id=3"
        );
        this.users = response.data;
      } catch (e) {
        console.log(e);
        this.isError = true;
        this
      } finally {
        this.isUsersLoading = false;
      }
    },
  },
});
