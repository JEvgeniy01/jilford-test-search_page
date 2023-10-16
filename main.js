


const app = Vue.createApp({
  data() {
    return {
      users: [],
      userCard: false,
      showUserCard: "",
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.users = response.data
        // const user = await response.json();
        
      } catch (e) {
        console.log(e);
        alert('Произошла ошибка')
      }
    }
  },
});

