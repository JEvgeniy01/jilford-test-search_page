app.component("worker-table", {
  data() {
    return {
      //Стили для компонента таблички работника
      table: {
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        width: "240px",
        height: "70px",
        background: "#FFF",
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
        fontFamily: '"Montserrat", sans-serif',
        fontSize: "14px",
        lineHeight: "normal",
      },
      table_info_name: {
        color: "#333",
        fontWeight: "600",
        marginLeft: "15px",
      },
      table_info_email: {
        color: "#76787d",
        marginTop: "5px",
        marginLeft: "15px",
      },
      table_info_active: {
        background: "#E0E0E0",
      },
      //Конец стилей для компонента таблички работника
      hrefProfile: '../../images/profile_min.png'
    };
  },
  props: {
    user: Object,
  },
  template:
    /*html*/
    `<div :style="table" v-on:click="$emit('selectWorker')">
      <div :style="table_image"><img :style="table_image__img" v-bind:src="hrefProfile"></div>
      <div :style="table_info">
        <div :style="table_info_name">{{user.name}}</div>
        <div :style="table_info_email">{{user.email}}</div>
      </div>
    </div>`,
});
