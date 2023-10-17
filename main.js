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
      searchQuery: "",
      userNameArray: [],
      idArray: [],
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
    // Обработка входящих данных в input для запроса на сервер
    getQueryUsers(tempSearchingUsers) {
      let searchingUsers = tempSearchingUsers[0].split(", ");
      let queryString = "https://jsonplaceholder.typicode.com/users?";
      searchingUsers.forEach((query) => {
        if (isNaN(query)) {
          this.userNameArray.push(query);
          queryString += `username=${query}&`;
        } else {
          this.idArray.push(query);
          queryString += `id=${query}&`;
        }
      });
      return queryString;
    },
    async fetchUsers(...params) {
      //При удалении запроса в input'e страница с профилем возвращается в исходное положение
      if (this.searchQuery == "") {
        this.userCard = false;
      }
      try {
        this.startSearch = false;
        this.isTable = true;
        this.isUsersLoading = true;
        // Запрос данных с сервера по change в input'e
        let getUsers = this.getQueryUsers(params);
        const response = await axios.get(getUsers);
        this.users = response.data;

        // Проверка: есть ли запрашиваемый user в массиве данных на сервере
        let checkUserName = this.userNameArray.find((user) => {
          for (let dataUser = 0; dataUser < response.data.length; dataUser++) {
            return user == response.data[dataUser].username;
          }
        });
        let checkIdName = this.idArray.find((id) => {
          for (let dataId = 0; dataId < response.data.length; dataId++) {
            return id == response.data[dataId].id;
          }
        });
        if (checkIdName === undefined && checkUserName === undefined)
          throw new Error();
      } catch (e) {
        this.isError = true;
        this.isTable = false;
      } finally {
        this.isUsersLoading = false;
      }
    },
  },
});
