<template>
  <nav class="fab">
    <a href="#" class="buttons folder-add" tooltip="Projectmap aanmaken">d</a>
    <a class="buttons times" data-toggle="modal" href="#">f</a>
  </nav>
</template>

<script>
export default {
  name: "FloatingActionButton"
};
</script>

<style lang="scss" scoped>
.fab {
  bottom: 0;
  position: fixed;
  margin: 1.5em;
  right: 0px;
}

.buttons {
  box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
    0px 4px 12px -7px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  display: block;
  width: 65px;
  height: 65px;
  margin: 20px auto 0;
  position: relative;
  transition: all 0.1s ease-out;

  &:active,
  &:focus,
  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  }
  &:not(:last-child) {
    width: 50px;
    height: 50px;
    margin: 20px auto 0;
    opacity: 0;
    transform: translateY(50px);
  }
}

.fab:hover .buttons:not(:last-child) {
  opacity: 1;
  transform: none;
  margin: 15px auto 0;
}

.buttons {
  font-family: "icons";
  &:nth-last-child(1) {
    transition-delay: 25ms;
    background-color: #424242;
    background-size: contain;
  }
  &:not(:last-child) {
    &:nth-last-child(2) {
      transition-delay: 20ms;
      background-color: #ffffff;
      background-size: contain;
    }
  }
}
.times {
  color: white;
  text-align: center;
  padding-top: 11px;
  font-size: 2em;
  transform: rotate(46deg);

  &:hover {
    text-decoration: none;
  }
}

.folder-add {
  color: #424242;
  text-align: center;
  padding-top: 9px;
  font-size: 1.5em;

  &:hover {
    text-decoration: none;
  }
}

[tooltip] {
  &:before {
    bottom: 25%;
    font-family: arial;
    font-weight: 600;
    border-radius: 2px;
    color: #424242;
    content: attr(tooltip);
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    padding: 1px 7px;
    margin-right: 12px;
    position: absolute;
    right: 100%;
    white-space: nowrap;
  }
  &:hover {
    &:before,
    &:after {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
