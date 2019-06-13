<template>
  <b-row>
    <!-- Left -->
    <b-col md="3">
      <div class="system">
        <div class="time-text">Time</div>
        <div class="current-time">1:20:23</div>
        <div class="connection" id="tooltip">
          <div class="icon wifi-3" :class="{ 'success': connected }">e</div>
          <div class="connection-text" :class="{ 'success': connected }">Connected</div>
        </div>
        <b-tooltip target="tooltip" placement="bottom">{{connected ? tooltipSuccess : tooltipFail}}</b-tooltip>
      </div>
    </b-col>
    <!-- Right -->
    <b-col md="9">
      <div class="main">
        <div class="notes">
          <div
            class="note-wrapper"
            v-for="item in notes"
            :key="item.id"
            :class="{ 'simple': !item.iconClass }"
          >
            <div class="time">{{item.timestamp}}</div>
            <div class="divider"></div>
            <!-- <b-form-textarea
              id="textarea-no-resize"
              placeholder="Fixed height textarea"
              no-resize
              v-model="item.content"
            ></b-form-textarea>-->
            <!-- <textarea class="note" type="text" v-model="item.content"></textarea> -->
            <div class="note" contenteditable v-text="item.content"></div>
            <div class="icon" :class="item.iconClass">{{item.characterClass}}</div>
          </div>
        </div>
        <div class="text-input">
          <form v-on:submit.prevent="addNote">
            <input
              v-model="inputNote"
              type="text"
              ref="note"
              placeholder="Write your note, findings or a quote here.."
            >
          </form>
        </div>
        <div class="text-input-divider"></div>
        <div class="emojis">
          <div class="icon smile-o">p</div>
          <div class="icon meh-o">r</div>
          <div class="icon frown-o">q</div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Live",
  layout: "playback",
  data() {
    return {
      currentTime: null,
      connected: true,
      inputNote: "",
      tooltipSuccess: "Internet and API connection is available",
      tooltipFail:
        "All your changes will be saved automatically when you’re offline.",

      notes: [
        {
          id: 1,
          iconClass: null,
          characterClass: null,
          property: 1,
          timestamp: 0.35,
          content: "De testpersoon geeft een verwarde indruk"
        },
        {
          id: 2,
          iconClass: "quote-left",
          characterClass: "l",
          property: 1,
          timestamp: 1.2,
          content:
            "“De testpersoon kijkt over het blauwe vlak heen, waardoor de tekst onder het vak ook niet gelezen wordt. ”"
        },
        {
          id: 3,
          iconClass: null,
          characterClass: null,
          property: 1,
          timestamp: 2.1,
          content:
            "De afbeelding in de header geeft niet het gevoel van gezond en leefstijl."
        },
        {
          id: 4,
          iconClass: "bulb",
          characterClass: "k",
          property: 1,
          timestamp: 2.3,
          content:
            "Raakt het overzicht kwijt van de “over ons” pagina. Weet niet waarheen te navigeren."
        },
        {
          id: 5,
          iconClass: null,
          characterClass: null,
          property: 1,
          timestamp: 3.1,
          content:
            "Raakt het overzicht kwijt vanaf de “over ons” pagina. Weet niet waarheen te navigeren."
        },
        {
          id: 6,
          iconClass: null,
          characterClass: null,
          property: 1,
          timestamp: 3.1,
          content:
            "De afbeelding in de header geeft niet het gevoel van gezond en leefstijl."
        }
      ]
    };
  },
  methods: {
    addNote() {
      console.log(this.inputNote);
    }
  },
  watch: {
    notes() {
      console.log("hoi");
    }
  }
};
</script>

<style lang="scss" scoped>
.system {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .time-text {
    font-size: 30px;
    color: #424242;
  }
  .current-time {
    font-size: 50px;
    color: #424242;
    font-weight: 900;
  }
  .connection {
    cursor: pointer;
    display: flex;
    align-items: center;
    .icon {
      font-size: 30px;
      color: #ed5153;
      font-family: "icons";
      margin-right: 10px;
      &.success {
        color: #75de95;
      }
    }
    .connection-text {
      font-size: 16px;
      color: #ed5153;
      &.success {
        color: #75de95;
      }
    }
  }
}
.main {
  .notes {
    max-height: 700px;
    overflow-y: scroll;
    max-width: 750px;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: #e2e2e2;
    }
    &::-webkit-scrollbar-thumb {
      background: #424242;
      border-radius: 0px;
    }

    .note-wrapper {
      padding: 30px;
      max-width: 660px;
      background-color: white;
      display: flex;
      // align-items: center;
      margin-bottom: 15px;
      border-radius: 10px;
      font-size: 16px;
      &.simple {
        background-color: #f8f8f8;
      }
      .time {
        margin-right: 17px;
      }
      .divider {
        width: 1px;
        height: 40px;
        background-color: #ececec;
      }
      .note {
        margin-left: 17px;
        max-width: 443px;
        width: 100%;
      }
      .icon {
        font-size: 25px;
        flex-grow: 1;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        font-family: "icons";
      }
      textarea {
        resize: none;
        background-color: transparent;
        border-radius: 0;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .text-input {
    margin-top: 50px;
    display: flex;
    align-items: center;
    max-width: 660px;
    form {
      width: 100%;
      input {
        background-color: transparent;
        border-radius: 0;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 1em;
        width: 100%;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .text-input-divider {
    max-width: 660px;
    margin-top: 15px;
    height: 2px;
    background-color: #bfbfbf;
  }
  .emojis {
    font-family: "icons";
    font-size: 30px;
    display: flex;
    margin-top: 10px;
    .icon {
      margin-right: 10px;
      cursor: pointer;
      opacity: 0.4;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>