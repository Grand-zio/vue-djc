<template>
  <div id="workSpace" class="work-space">
    <div id="workTitle" class="work-title">
      <div class="icon-sys">
        <img class="channel-img" src="@/assets/channelImg/04.jpg" />
      </div>

      <div class="icon-notice">
        <img class="icon" src="@/assets/channelImg/提醒.png" />
      </div>

      <div class="user">
        <a id="userImg" class="user-img" href="">
          <img class="icon" src="@/assets/channelImg/用户头像.png" />
        </a>
      </div>

      <div class="user-name">
        <span>djc</span>
      </div>

      <div class="icon-role">
        <img class="icon" src="@/assets/channelImg/管理员.png" />
      </div>

      <div class="icon-role">
        <img class="icon" src="@/assets/channelImg/下拉框.png" />
      </div>
    </div>

    <h2>业务系统选择</h2>

    <div id="channelList" class="channel-list clearfix">
      <div class="channel-first clearfix">
        <a href="https://www.baidu.com/">设备管理平台</a>
      </div>

      <div class="channel-second clearfix">
        <a href="http://testerhome.top:8081/">持续测试平台</a>
      </div>

      <div class="channel-third clearfix">
        <a href="https://www.baidu.com/">数据mock平台</a>
      </div>

      <div class="channel-last clearfix">
        <a href="https://www.baidu.com/">其他工具</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "channel",
};
</script>

<style lang="scss" scoped>
// scoped 本文件有效
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #f6f9ff;
  text-align: center;
  font-family: "Microsoft soft";
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

a {
  color: white;
  text-decoration: none;
  /* font-size: 10px;
    display: block; */
  text-align: right;
}

.work-title {
  background-color: #ffffff;
  width: auto;
  height: 100px;
}

.channel-img {
  width: 100px;
  height: 50px;
}

.icon-sys,
.icon-notice,
.user,
.user-name,
.icon-role {
  float: left;
}

.icon-sys {
  margin-left: 2%;
  padding: 25px 40px;
}

.icon-notice {
  margin-left: 75%;
  padding: 40px 5px;
}

.user {
  padding: 25px 5px;
}

.user-name {
  padding: 38px 5px;
  font-size: 18px;
  font-weight: bold;
}

.icon-role {
  padding: 42px 5px;
  font-size: 18px;
  font-weight: bold;
}

.channel-list {
  background-color: #ffffff;
  padding: 10%;
  height: 100vh;
}

.channel-first,
.channel-second,
.channel-third,
.channel-last {
  width: 240px;
  height: 120px;
  border-radius: 5px;
  text-align: center;
  line-height: 120px;
  font-size: 16px;
  font-weight: bold;
  float: left;
}

/* margin: 10px 1800px 10px 50px; */
/* position: absolute; */

.channel-first {
  background-color: #8693f3;
  margin-left: 8%;
}

.channel-second {
  background-color: #ff9999;
  margin-left: 10%;
}

.channel-third {
  background-color: #78abd9;
  margin-left: 10%;
}

.channel-last {
  background-color: #a47bd0;
  margin-left: 10%;
}
</style>
