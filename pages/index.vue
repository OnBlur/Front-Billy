<template>
  <div>
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
        <Folder
          v-for="item in data.slice(0, 4)"
          :key="item.id"
          :name="item.name"
          @click.native="goToProject(item.id)"
        />
        <!-- <div class="column" v-for="item in data.slice(0, 4)" :key="item.id">
          <h2 class="item-name">{{item.name}}</h2>
          <div class="blue-line"></div>
        </div>-->
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="title">Bedrijfsmappen</div>
      </div>
    </div>
    <div class="row">
      <div class="folder">
        <div class="filters">
          <div></div>
          <div>Bedrijf</div>
          <div>Projecten</div>
          <div></div>
          <div>Laatst bewerkt</div>
        </div>
        <div class="company-table">
          <div v-for="item in data" :key="item.id" class="company-folders">
            <div>
              <img src="~assets/img/map-icon.svg" alt width="25px" height="25px">
            </div>
            <div>{{item.name}}</div>
            <div>{{item.projects}}</div>
            <div>
              <img
                v-for="image in item.members"
                :key="image.id"
                :src="image.url"
                width="25px"
                height="25px"
              >
            </div>
            <div class="edited">
              <div>
                {{item.lastEdit}} door
                <b>{{item.editBy}}</b>
              </div>
              <!-- <div class="editby">{{item.editBy}}</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Folder from "@/components/Folder";

export default {
  name: "Dashboard",
  props: {
    sidebarStatus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Puur Schoonheid",
          img: "random",
          projects: "2 projecten",
          members: [
            { id: 1, url: require("~/assets/img/profile.png") },
            { id: 2, url: require("~/assets/img/profile.png") },
            { id: 3, url: require("~/assets/img/profile.png") }
          ],
          lastEdit: "twee minuten geleden",
          editBy: "Raymond"
        },
        {
          id: 2,
          name: "3 roots",
          img: "random",
          projects: "7 projecten",
          members: [
            { id: 1, url: require("~/assets/img/profile.png") },
            { id: 2, url: require("~/assets/img/profile.png") },
            { id: 3, url: require("~/assets/img/profile.png") }
          ],
          lastEdit: "een uur geleden",
          editBy: "Misha"
        },
        {
          id: 3,
          name: "A&B Meester Schilders",
          img: "random",
          projects: "3 projecten",
          members: [
            { id: 1, url: require("~/assets/img/profile.png") },
            { id: 2, url: require("~/assets/img/profile.png") },
            { id: 3, url: require("~/assets/img/profile.png") }
          ],
          lastEdit: "gisteren",
          editBy: "Renze"
        },
        {
          id: 4,
          name: " Google",
          img: "random",
          projects: "4 projecten",
          members: [
            { id: 1, url: require("~/assets/img/profile.png") },
            { id: 2, url: require("~/assets/img/profile.png") },
            { id: 3, url: require("~/assets/img/profile.png") }
          ],
          lastEdit: "eergisteren",
          editBy: "Yan"
        },
        {
          id: 5,
          name: " Microsoft",
          img: "random",
          projects: "1 project",
          members: [
            { id: 1, url: require("~/assets/img/profile.png") },
            { id: 2, url: require("~/assets/img/profile.png") },
            { id: 3, url: require("~/assets/img/profile.png") }
          ],
          lastEdit: "gisteren",
          editBy: "Ruurd"
        },
        {
          id: 6,
          name: " Apple",
          img: "random",
          projects: "2 projecten",
          members: [
            { id: 1, url: require("~/assets/img/profile.png") },
            { id: 2, url: require("~/assets/img/profile.png") },
            { id: 3, url: require("~/assets/img/profile.png") }
          ],
          lastEdit: "een week geleden",
          editBy: "Renze"
        },
        {
          id: 7,
          name: " Toshiba",
          img: "random",
          projects: "876 projecten",
          members: [
            { id: 1, url: require("~/assets/img/profile.png") },
            { id: 2, url: require("~/assets/img/profile.png") },
            { id: 3, url: require("~/assets/img/profile.png") }
          ],
          lastEdit: "een jaar geleden",
          editBy: "Misha"
        }
      ]
    };
  },
  methods: {
    goToProject(id) {
      console.log(id);
    }
  },
  components: { Folder }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 130px;
  padding: 0px;
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
  .folder {
    width: 100%;
    margin-right: 13px;
    margin-left: 13px;
  }
  .filters {
    width: 100%;
    color: #424242;
    display: flex;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 10px;

    div {
      width: 13em;
    }
  }

  .company-table {
    width: 100%;
    max-height: 350px;
    overflow-y: scroll;
    .company-folders {
      width: 100%;
      color: #424242;
      display: flex;
      background-color: white;
      margin-bottom: 10px;
      padding: 15px;
      border-radius: 10px;
    }
    div {
      width: 13em;
    }

    .edited {
      display: flex;
      flex-grow: 1.5;
    }
    .editby {
      font-weight: bold;
      margin-left: 10px;
    }
  }
}

.fab {
  bottom: 0;
  position: fixed;
  margin: 1em;
  right: 0px;

  a {
    background-color: #424242;
  }
}

.buttons {
  box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
    0px 4px 12px -7px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  display: block;
  width: 56px;
  height: 56px;
  margin: 20px auto 0;
  position: relative;
  transition: all 0.1s ease-out;
  font-family: "icons";
}

.buttons:active,
.buttons:focus,
.buttons:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
}

.buttons:not(:last-child) {
  width: 40px;
  height: 40px;
  margin: 20px auto 0;
  opacity: 0;
  transform: translateY(50px);
}

.fab:hover .buttons:not(:last-child) {
  opacity: 1;
  transform: none;
  margin: 15px auto 0;
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
</style>
