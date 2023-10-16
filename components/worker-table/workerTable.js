app.component("worker-table", {
  data() {
    return {
      //Стили для компонента таблички работника
      table: {
        display: "flex",
        width: "240px",
        background: "#FFF",
        borderRadius: '10px',
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
      },
      table_image: {
        width: "70px",
        height: "70px",
        borderRight: "1px solid #e0e0e0",
      },
      table_image__img: {
        width: "70px",
        height: "70px",
      },
      table_info: {
        width: "170px",
        fontFamily: '"Montserrat", sans-serif',
        fontSize: "14px",
        lineHeight: "normal",
      },
      table_info_name: {
        marginTop: "13px",
        color: "#333",
        fontWeight: "600",
        marginLeft: "15px",
        cursor: "pointer",
      },
      table_info_email: {
        color: "#76787d",
        wordWrap: "break-word",
        marginTop: "5px",
        marginLeft: "15px",
        cursor: "pointer",
      },
      //Конец стилей для компонента таблички работника
      hrefProfile: "../../images/profile_min.png",
    };
  },
  props: {
    user: Object,
  },
  template:
    /*html*/
    `
      <div :style="table" >
        <div :style="table_image"><img :style="table_image__img" v-bind:src="hrefProfile" ></div>
        <div :style="table_info" class="active">
          <div :style="table_info_name" v-on:click="selectWorker" >{{user.username}}</div>
          <div :style="table_info_email" v-on:click="selectWorker" >{{user.email}}</div>
        </div>
      </div>
    `,
  methods: {
    selectWorker(event) {
      this.$emit("select", event.target.textContent);
    },
  },
});
