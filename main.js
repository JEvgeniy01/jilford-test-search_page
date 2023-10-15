const users = [
  {
    id: 1,
    name: "John",
    job: "frontend",
    email: "john@mail.ru",
    phone: "8991923",
  },
  {
    id: 2,
    name: "Ann",
    job: "backend",
    email: "ann@mail.ru",
    phone: "12323",
  },
  {
    id: 3,
    name: "Matt",
    job: "fullstak",
    email: "matt@mail.ru",
    phone: "55464",
  },
];


const app = Vue.createApp({
  data() {
    return {
      users: users,
      userCard: false,
      showUserCard: "",
    };
  },
  methods: {
    selectWorker(worker) {
      this.userCard = true;
      console.log(worker);
      if (worker.includes("@")) {
        const searchedWorkerByEmail = this.users.find(
          (user) => user.email === worker
        );
        this.showUserCard = searchedWorkerByEmail;
      } else {
        const searchedWorkerByName = this.users.find(
          (user) => user.name === worker
        );
        this.showUserCard = searchedWorkerByName;
      }
    },
  },
});

