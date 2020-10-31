<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  width: 100%;
  background: #f2f4fa !important;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="scss">
.el-table__column-filter-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 20px;
}

.el-table__column-filter-trigger i {
  position: absolute;
  right: 10px;
  top: 9px;
}

.el-table th > .cell {
  position: relative;
}

.shaixuan {
  font-size: 0 !important;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.shaixuan2 {
  font-size: 0 !important;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.searchtopitem .el-date-editor.el-input,
.el-date-editor.el-input__inner {
}

.searchtopitem .el-input--prefix .el-input__inner {
  width: 184px;
  height: 24px;
  border: 1px solid #1cd7e8;
  margin-left: 16px;
  background: none;
  color: #1cd7e8;
  text-align: center;
}

.searchtopitem .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 184px;
  margin-right: 17px;
}

.searchtopitem .el-input__icon {
  display: none;
}

.cur {
  cursor: pointer;
}

.w84 {
  width: 84px !important;
}

.mt10 {
  margin-top: 10px !important;
}

.w100 {
  width: 100%;
}

.w900 {
  width: 900px !important;
}

.nobg {
  background: none !important;
}

.noborder {
  border: none !important;
}

.w88 {
  width: 88px !important;
}

.w360 {
  width: 360px !important;
}

.w306 {
  width: 306px !important;
}

.w298 {
  width: 298px !important;
}

.w174 {
  width: 174px !important;
}

.mt20 {
  margin-top: 20px !important;
}

.w238 {
  width: 238px !important;
}

.w142 {
  width: 142px !important;
}

.w114 {
  width: 114px !important;
}

.mb15 {
  margin-bottom: 15px !important;
}

.ml20 {
  margin-left: 20px !important;
}

.bgf {
  background: #fff !important;
}

.w230 {
  width: 230px !important;
}

.ml5 {
  margin-left: 5px !important;
}

.ml10 {
  margin-left: 10px !important;
}

.searchcolor {
  background-color: #54c9c2 !important;
  border-color: #54c9c2 !important;
}

.mr20 {
  margin-right: 20px !important;
}

.mr10 {
  margin-right: 10px !important;
}

.cur {
  cursor: pointer;
}

.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #fafafa;
}

.w120 {
  width: 120px !important;
}

.mr50 {
  margin-right: 50px !important;
}

.mt35 {
  margin-top: 35px;
}

.pt20 {
  padding-top: 20px !important;
}

.mt0 {
  margin-top: 0px !important;
}

.pt0 {
  padding-top: 0 !important;
}

.noborderbottom {
  border-bottom: none !important;
}

.mr15 {
  margin-right: 15px !important;
}

.mt15 {
  margin-top: 15px;
}

.h285 {
  height: 285px !important;
}

.mb18 {
  margin-bottom: 18px !important;
}

.el-picker-panel-calendar {
  border: none !important;
  box-shadow: none !important;
}

.el-date-table-calendar td.today > div {
  width: 26px;
  height: 26px;
  background: #2f537c;
  box-shadow: 0px 4px 18px 0px rgba(0, 82, 195, 0.3);
  border-radius: 8px;
  color: #ffffff !important;
  margin: auto;
}

.today .diandian2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 26px;
  position: absolute;

  .dian2s {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    padding-bottom: 2px;
    position: absolute;
    bottom: 3px;

    .dian1,
    .dian2 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      width: 3px;
      height: 3px;
      background: #ffffff;
      opacity: 0.5;
      border-radius: 50%;
      margin-right: 1px;
      margin-left: 1px;
      margin-top: -5px;
    }
  }
}

.diandian2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  position: relative;

  .dian2s {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    padding-bottom: 2px;
    width: 100%;
    bottom: 3px;
    position: absolute;

    .dian1 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      width: 3px;
      height: 3px;
      background: #3a89f7;
      opacity: 0.5;
      border-radius: 50%;
      margin-right: 2px;
      margin-top: -5px;
    }

    .dian2 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      width: 3px;
      height: 3px;
      background: #f4a63f;
      opacity: 0.5;
      border-radius: 50%;
      margin-right: 1px;
      margin-left: 1px;
      margin-top: -5px;
    }
  }
}

.el-date-picker-calendar__header {
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-top: 20px !important;
  border-top: 1px solid #eeeeee !important;
  padding-top: 20px !important;
}

.cur {
  cursor: pointer;
}

.ml20 {
  margin-left: 20px;
}

.mr20 {
  margin-right: 20px;
}

.rightc {
  width: 100%;
}

.home {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
}

.ygbody {
  margin-top: 0 !important;
  padding-top: 0 !important;

  .body {
    overflow-y: scroll;
    margin-top: 0 !important;
    margin-right: 0 !important;
    padding-right: 20px !important;
  }
}

//::-webkit-scrollbar {
//  display: none; /* Chrome Safari */
//}
</style>
