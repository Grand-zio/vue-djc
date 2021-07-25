<template>
  <div>
    <div class="nav-left">
      <div class="menu-title">
        <img src="@/assets\accountImg\345.png" />
        <h3>系统管理后台</h3>
        <p>版本v0.0.1</p>
      </div>

      <div class="menu">角色管理</div>
      <div class="menu">账号管理</div>
      <div class="menu">操作日志</div>
      <div class="menu">系统配置</div>
    </div>

    <div class="nav-title">
      <div id="navTitleBreadCrumb"><span>首页</span> > 账号管理页</div>

      <div id="navTitleNotice">
        <img class="icon" src="@/assets/accountImg/提醒.png" />
      </div>

      <div id="navUser">
        <div id="userImg">
          <img class="icon" src="@/assets/accountImg/用户头像.png" />
        </div>

        <div id="userName">
          <span>djc</span>
          <img id="userRole" src="@/assets/accountImg/管理员.png" />
        </div>

        <div id="navIcon">
          <img class="icon" src="@/assets/accountImg/下拉框.png" />
        </div>
      </div>
    </div>

    <div class="nav-content">
      <div class="nav-content-title">
        <img src="@/assets/accountImg/123.png" />
        <span>账号列表</span>
      </div>

      <div class="nav-content-election clearfix">
        <div class="nav-input">
          <label for="accountName">账号名称: </label>
          <input id="accountName" type="text" value="请输入账号姓名" />
        </div>

        <div class="nav-select" tabindex="1">
          <!-- <label for="navSelect">账号状态: </label> -->
          <div id="navSelect">
            <input class="selectopt" type="radio" id="opt1" checked />
            <label for="opt1" class="option">全部</label>

            <input class="selectopt" type="radio" id="opt2" />
            <label for="opt2" class="option">已启用</label>

            <input class="selectopt" type="radio" id="opt3" />
            <label for="opt3" class="option">已禁用</label>
          </div>
        </div>

        <div class="nav-time">
          <span>时间选择器</span>
        </div>

        <div id="navBtnsSelect" class="nav-btns">
          <button onclick="alert('搜索成功')">搜索</button>
        </div>

        <div id="navBtnsAdd" class="nav-btns">
          <button>添加账号</button>
        </div>
      </div>
      <div class="nav-content-list">
        <div>
          <table>
            <th>
              <tr>
                登录账号
              </tr>
              <tr>
                账号名称
              </tr>
              <tr>
                手机号
              </tr>
              <tr>
                账号状态
              </tr>
              <tr>
                关联角色
              </tr>
              <tr>
                创建时间
              </tr>
              <tr>
                员工操作
                <ul>
                  <li>编辑</li>
                  <li>删除</li>
                  <li>详情</li>
                </ul>
              </tr>
            </th>
          </table>
        </div>

        <div>
          <span>分页组件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
};
</script>

<style lang="scss" scoped>
// scoped 本文件有效
body {
  background-color: #f6f9ff;
  margin: 0px;
  padding: 0px;
}

/* .nav-left {
    width: 150px;
    height: 100vh;
    background-color: #FFFFFF;
    position: absolute;
} */

/* .nav-title {
    height: 100px;
    background-color: #FFFFFF;
    position: relative;
    margin-left: 160px;
    margin-right: 0;
} */

.nav-content {
  height: 82vh;
  background-color: #ffffff;
  position: relative;
  margin-left: 265px;
  margin-right: 10px;
  margin-top: 20px;
  min-width: 800px;
  overflow: hidden;
}

.nav-content-title {
  border-bottom: 1px solid #bbbbbb;
  margin-left: 20px;
  padding: 15px;
}

.nav-content-title span {
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top: -10px;
  left: 10px;
}

.nav-input,
.nav-select,
.nav-time,
#navBtnsSelect,
#navBtnsAdd {
  padding-top: 20px;
  font-size: 14px;
  float: left;
}

.nav-input {
  position: relative;
  margin-left: 20px;
}

.nav-input label {
  color: #101010;
}

.nav-input input {
  font-size: 12px;
  color: #bbbbbb;
  width: 130px;
  height: 20px;
}

.nav-select {
  position: relative;
  margin-left: 50px;
}

.nav-time {
  position: relative;
  margin-left: 100px;
}

.nav-content-list {
  margin: 200px;
}
</style>
