app.component("worker-card", {
  data() {
    return {
      //Стили для компонента карты профиля работника
      container: {
        width: '975px',
        display: "flex",
        justifyContent: "space-between",
        fontFamily: '"Montserrat", sans-serif',
        borderLeft: '1px solid #dededd'
      },
      container_picture: {
        marginLeft: "21px",
        marginTop: '20px'
      },
      container_picture__img: {
        width: "424px",
        height: "286px",
        border: "1px solid #E0E0E0",
      },
      container_info: {
        display: "flex",
        flexDirection: "column",
        lineHeight: "140%",
        marginRight: "30px",
      },
      container_info__name: {
        color: "#000",
        fontSize: "16px",
        fontWeight: "600",
        marginTop: '20px'
      },
      container_info__email: {
        color: "#333",
        fontSize: "14px",
        fontWeight: "600",
      },
      container_info__phone: {
        color: "#333",
        fontSize: "14px",
        fontWeight: "600",
      },
      container_info__data: {
        color: "#76787D",
        fontWeight: "400",
        marginLeft: '15px'
      },
      container_title: {
        color: "#333",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "140%",
        marginTop: "20px",
        marginBottom: "25px",
      },
      container_about: {
        width: "439px",
        color: "#76787D",
        fontSize: "14px",
        lineHeight: "normal",
      },
       //Конец стилей для компонента карты профиля работника
      hrefProfile: '../../images/profile.webp',
    }
  },
  pops: {
    user: Object,
  },
  template:
    /*html*/
    `<div :style="container">
        <div :style="container_picture">
          <img :style="container_picture__img" v-bind:src="hrefProfile" alt="profile photo">
        </div>
        <div :style="container_info">
          <div :style="container_info__name">Johnny</div>
          <div :style="container_info__email">email <span :style='container_info__data'>@mail.ru</span></div>
          <div :style="container_info__phone">phone: <span :style='container_info__data'>12398234</span></div>
          <div :style="container_title">new title</div>
          <div :style="container_about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
  `,
  methods: {},
});
