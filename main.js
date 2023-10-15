const users = [
  {
    id: 1,
    name: "John",
    job: "frontend",
    email: "john@mail.ru",
    phone: 8-999-888-77-66
  },
  {
    id: 2,
    name: "Ann",
    job: "backend",
    email: "ann@mail.ru",
    phone: 8-333-888-77-66
  },
  {
    id: 3,
    name: "Matt",
    job: "fullstak",
    email: "matt@mail.ru",
    phone: 8-111-888-77-66
  },
];

const app = Vue.createApp({
  data() {
    return {
      users: users,
      userCard: false
    };
  },
  methods: {
    selectWorker() {
      userCard = true;
    }
  },
});
