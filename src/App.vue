<template>

  <div class="trigger-wrapper" id="triggerWrapper" @mouseenter="showTabBar" @mouseleave="hideTabBar">
    <div class="trigger-area" id="triggerArea" @mouseenter="showMenu" :style="{ opacity: tabBarVisible ? '1' : '0' }">
    </div>
  </div>

  <el-menu class="top-menu" id="topMenu" default-active="1" mode="horizontal"
    :style="{ top: menuVisible ? '0' : '-70px' }" @mouseleave="hideMenuAndTabBar">
    <el-menu-item index="1">
      <RouterLink to="/">Home</RouterLink>
    </el-menu-item>
    <el-menu-item index="2">
      <RouterLink to="/testapp">TestApp</RouterLink>
    </el-menu-item>
    <el-menu-item index="3">
      <RouterLink to="/testapp2">TestApp2</RouterLink>
    </el-menu-item>
  </el-menu>
  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const tabBarVisible = ref(false);
const menuVisible = ref(false);

// 显示Tab Bar的函数
function showTabBar() {
  tabBarVisible.value = true;
}

// 隐藏Tab Bar的函数
function hideTabBar() {
  tabBarVisible.value = false;
}

// 显示菜单栏的函数
function showMenu() {
  menuVisible.value = true;
}

// 隐藏菜单栏的函数
function hideMenu() {
  menuVisible.value = false;
}

// 隐藏菜单栏和Tab Bar
const hideMenuAndTabBar = () => {
  hideMenu();
  hideTabBar();
};
</script>

<style scoped>
.trigger-wrapper {
  position: fixed;
  top: 0px;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  width: 100%;
  height: 30px;
  z-index: 999;
}


.trigger-area {
  position: absolute;
  top: 7px;
  left: 150px;
  transform: translateX(-50%);
  width: 120px;
  /* 更窄的触发区域宽度 */
  height: 5px;
  /* 更窄的触发区域高度 */
  background-color: rgba(0, 0, 0, 0.9);
  /* 黑色，类似苹果Tab Bar */
  border-radius: 10px;
  /* 圆角效果 */
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  /* 轻微阴影效果，类似苹果风格 */
  /* opacity: 60; */
  /* 默认隐藏Tab Bar */
  transition: opacity 0.3s ease-in-out;
}

.top-menu {
  position: fixed;
  top: -70px;
  /* 初始隐藏在页面上部 */
  left: 0;
  right: 0;
  transition: top 0.3s ease-in-out;
  z-index: 1000;
}
</style>