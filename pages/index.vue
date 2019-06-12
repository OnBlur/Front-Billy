<template>
  <div class="container" ref="mainContainer">
    <div class="row">
      <div class="breadcrumb">Alle bestanden ></div>
      <div class="divider"></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="title">Recente bestanden</div>
      </div>
    </div>
    <div class="row folders">
      <div class="col">
        <div class="column" v-for="item in data.slice(0, 4)" :key="item.id">
          <h2 class="item-name">{{item.name}}</h2>
          <div class="blue-line"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="title">Bedrijfsmappen</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Bedrijf</th>
              <th>Projecten</th>
              <th></th>
              <th>Laatst bewerkt</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id" class="companyfolders">
              <td>
                <img src="~assets/img/map-icon.svg" alt width="25px" height="25px">
              </td>
              <td>{{item.name}}</td>
              <td>{{item.projects}}</td>
              <td>
                <img v-for="item in data" :key="item.id" :src="item.members">
              </td>
              <td>
                <div class="lastedit">{{item.lastEdit}}</div>
                <div class="editby">{{item.editBy}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <Folder :allData="data"/> -->
  </div>
</template>

<script>
import Folder from "@/components/Folder";

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Puur Schoonheid",
          img: "random",
          projects: "2 projecten",
          members: "img",
          lastEdit: "twee minuten geleden",
          editBy: "Raymond"
        },
        {
          id: 2,
          name: "3 roots",
          img: "random",
          projects: "7 projecten",
          members: "img",
          lastEdit: "een uur geleden",
          editBy: "Misha"
        },
        {
          id: 3,
          name: "A&B Meester Schilders",
          img: "random",
          projects: "3 projecten",
          members: require("~/assets/img/profile.png"),
          lastEdit: "gisteren",
          editBy: "Renze"
        },
        {
          id: 4,
          name: " Google",
          img: "random",
          projects: "4 projecten",
          members: "img",
          lastEdit: "eergisteren",
          editBy: "Yan"
        },
        {
          id: 5,
          name: " Microsoft",
          img: "random",
          projects: "1 project",
          members: "img",
          lastEdit: "gisteren",
          editBy: "Ruurd"
        },
        {
          id: 6,
          name: " Apple",
          img: "random",
          projects: "2 projecten",
          members: "img",
          lastEdit: "een week geleden",
          editBy: "Renze"
        },
        {
          id: 7,
          name: " Toshiba",
          img: "random",
          projects: "876 projecten",
          members: "img",
          lastEdit: "een jaar geleden",
          editBy: "Misha"
        }
      ]
    };
  },
  computed: {
    getRefFromStore() {
      return this.$store.state.stateStore.sidebarStatus;
    }
  },
  watch: {
    getRefFromStore() {
      if (this.$store.state.stateStore.sidebarStatus) {
        console.log("true?");
        this.$refs.mainContainer.style.width = "calc(100% - 300px)";
      } else {
        console.log("false?");
        this.$refs.mainContainer.style.width = "100%";
      }
    }
  },

  components: { Folder }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .row {
    width: 100%;
    max-width: 1100px;
    .title {
      width: 100%;
      font-size: 1.2em;
      font-weight: bold;
      color: #424242;
      margin-bottom: 25px;
      margin-top: 50px;
    }
    .breadcrumb {
      margin-top: 50px;
      font-family: OpenSans;
      font-size: 1em;
      font-weight: bold;
      color: #171717;
      opacity: 0.55;
    }
    .divider {
      width: 100%;
      border-top: 1px solid #707070;
      opacity: 0.17;
      margin: 0px 15px 0px 15px;
    }
  }

  table {
    width: 100%;
    color: #424242;
    thead {
    }
    tbody {
      overflow: auto;
      // height: 500px;
      .companyfolders {
        background-color: #ffffff;
        width: 100%;
        // height: 500px;

        // color: black;
        // scrollbar-base-color: gold;
        // font-family: sans-serif;
        // padding: 10px;
        td {
          // padding: 35px;
          margin-bottom: 15px;
        }
      }
    }
  }

  .folders {
    max-width: 1100px;
    width: 100%;
  }
  .col {
    display: flex;
    justify-content: space-between;

    .column {
      background-image: url("~assets/img/map-icon.svg");
      background-size: cover;
      height: 136px;
      width: 203px;
      margin: 10px 0 0 10px;
      position: relative;

      .item-name {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        color: white;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 1.1em;
        transform: translate(-50%, -50%);
        display: flex;
        flex-wrap: wrap;
        text-align: center;
      }
      .blue-line {
        width: 35%;
        border-top: 2px solid #2699fb;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 25px;
      }
    }
    .column:nth-child(1) {
      margin-left: 0;
    }
  }
}
</style>
