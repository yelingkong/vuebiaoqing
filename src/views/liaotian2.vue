<template>
  <div id="index" class="home">
    <div class="rightc">
      <div class="ygbody" :style="{height:+wheight+ 'px'}">
        <div class="center">
          <div class="title">
            王者战场（10）
          </div>
          <div class="liaotianbody" id="new_message" :style="{height:+wheight2+ 'px'}">
            <div class="time">2020年06月25日 16:27</div>
            <div class="liaotian2">
              <div v-for="(item,index) in list" :key="index">
                <div class="liaotianleft" v-if="item.type==1">
                  <img src="../assets/touxiang.png"/>
                  <div class="neirong">
                    <div class="nick">游戏之王</div>
                    <div class="desc">
                      <img class="img" src="../assets/sanjiaoleft.png"/>
                      <neirong :payload="item"></neirong>
                    </div>
                  </div>
                </div>
                <div class="liaotianright" v-else>
                  <img class="touxiang" src="../assets/touxiang.png"/>
                  <div class="neirong">
                    <div class="nick">游戏之王</div>
                    <div class="desc">
                      <img class="img" src="../assets/sanjiaoright.png"/>
                      <div v-if="item.type2=='text'">
                        <neirong :payload="item"></neirong>
                      </div>
                      <div v-if="item.type2=='img'">
                        <img class="imgx" :src="item.content" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
              type="file"
              id="imagePicker"
              ref="imagePicker"
              accept=".jpg, .jpeg, .png, .gif"
              @change="sendImage"
              style="display:none"
          />
          <div class="shurukuang">
            <div class="jianpan">
              <div class="left1">
                <el-popover placement="top" width="400" trigger="click">
                  <div class="emojis">
                    <div v-for="item in emojiName" class="emoji" :key="item" @click="chooseEmoji(item)">
                      <img :src="emojiUrl + emojiMap[item]" style="width:30px;height:30px"/>
                    </div>
                  </div>
                  <i class="icon iconfont icon-biaoqing" slot="reference" title="发表情"></i>
                </el-popover>
                <i @click="handleSendImageClick" class="icon iconfont icon-tupian"></i>
                <i @click="handleSendImageClick" class="icon iconfont icon-web-icon-"></i>
              </div>
              <div class="right1">
              </div>
            </div>
            <div class="input">
              <div class="fasong" @click="fasong">
                发送
              </div>
              <textarea v-model="messageContent"
                        @focus="focus = true"
                        @blur="focus = false"
                        name="" id="" cols="30" rows="10"></textarea>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tongzhi from '../assets/icon_tongzhiimg.png'
import '../assets/font/iconfont.css'
import {emojiMap, emojiName, emojiUrl} from '../utils/emojiMap'
import {decodeText} from '../utils/decodeText'
import neirong from "_c/neirong";

export default {
  data() {
    return {
      active: 0,
      show: true,
      tongzhi: tongzhi,
      wheight2: 0,
      wheight: 0,
      emojiMap: emojiMap,
      emojiName: emojiName,
      emojiUrl: emojiUrl,
      messageContent: '',
      list: [
        {'title': 'count', type: 1, type2: 'text', content: '111111111'},
        {'title': 'count', type: 2, type2: 'text', content: '111111111'},
        {'title': 'count', type: 2, type2: 'text', content: '111111111'},
        {'title': 'count', type: 2, type2: 'text', content: '111111111'},
        {'title': 'count', type: 2, type2: 'text', content: '111111111'},
        {'title': 'count', type: 2, type2: 'text', content: '11111111[冷汗][冷汗][冷汗]1'},
      ],
    };
  },
  filters: {
    filtersImg: function (e) {
      console.log(e)
      console.log(decodeText(e))
      return decodeText(e)
    },
  },
  computed: {},
  components: {
    neirong
  },
  mounted: function () {
    window.addEventListener('resize', this.getHeight)
    this.getHeight();
    console.log(this.wheight)
    this.scrollToBottom();
  },
  beforeRouteLeave(to, from, next) {
    // 离开页面时取消监听
    window.removeEventListener('resize', this.getHeight)
    next()
  },
  methods: {
    quxiao() {
      this.show = false
    },
    chooseEmoji(item) {
      this.messageContent += item
    },
    fasong() {
      let data = {'title': 'count', type: 2, type2: 'text', content: ''};
      data.content = this.messageContent;
      this.list.push(data);
      this.messageContent = '';
      this.scrollToBottom();
    },
    sendImage(e) {
      var that2 = this;
      console.log(e);
      let that = e.target                 //保存当前的input元素
      let fr = new FileReader()           //初始化
      fr.readAsDataURL(e.target.files[0]) //选择文件中的头一个开始读取,将img读取为base64编码可以被img直接解析
      fr.onload = function (e) {
        let data = {'title': 'count', type: 2, type2: 'img', content: this.result};
        that2.list.push(data);
        that2.$nextTick(function () {
          that2.scrollToBottom();
        })
      }

    },
    scrollToBottom: function () {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#new_message");
        container.scrollTop = container.scrollHeight;
      });
    },
    handleSendImageClick() {
      this.$refs.imagePicker.click()
    },
    handleSendFileClick() {
      this.$refs.filePicker.click()
    },
    getHeight() {
      this.wheight = document.documentElement.clientHeight - 140;
      this.wheight2 = document.documentElement.clientHeight - 280;
    },
  }
};
</script>

<style lang="scss" scoped>
.ygbody {
  width: calc(100% - 40px);
  background: #fff;
  padding: 54px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 20px;


  .body {
    margin-left: 20px;
    width: 100%;
    margin-right: 20px;

    .rm {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #222222;
      margin-left: 20px;
    }

    .list {
      margin-top: 25px;
      width: 100%;
      margin-right: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      flex-direction: row;


      .item {
        width: 25%;
        min-width: 150px;
        margin-bottom: 12px;
        padding-bottom: 12px;
        transition: 0.3s;
        cursor: pointer;

        .item2 {
          margin-left: 20px;
          background: #FFFFFF;
          border-radius: 6px;

          img {
            width: 100%;
          }

          .t {

            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #333333;
            margin-left: 12px;
            margin-bottom: 5px;

          }

          .d {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #888888;
            margin-left: 12px;
          }
        }
      }

      .item:hover {
        box-shadow: 0px 6px 14px 0px rgba(156, 179, 213, 0.3);
        margin-top: -10px;

        .t {
          color: rgba(0, 161, 255, 1);
        }
      }
    }
  }
}

.center {
  background: #fff;
  width: 100%;

  .title {
    font-size: 18px;
    font-family: PingFang;
    font-weight: 800;
    color: #222222;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    height: 57px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .user {
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-left: 20px;
    margin-top: 26px;
    margin-right: 20px;

  }
}

.banner {
  margin-top: 26px;
  position: relative;

  .adx {
    position: absolute;
    right: 20px;
    top: 10px;
    width: 75px;
    height: 29px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #FFFFFF;

    img {
      width: 9px;
      height: 6px;
      margin-left: 8px;

    }
  }

  img {
    width: 100%;
  }
}

.list {
  margin-top: 10px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    height: 108px;
    border-bottom: 1px solid rgba(238, 238, 238, 1);

    .lleft {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;

      .lleft2 {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: nowrap;
        margin-left: 16px;
        flex-direction: column;

        .t {
          font-size: 16px;
          font-family: PingFang;
          font-weight: 800;
          color: #333333;
        }

        .d {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #888888;
          margin-top: 17px;
        }
      }
    }

    .lright {
      width: 96px;
      height: 44px;
      background: #FFFFFF;
      border: 1px solid #00A1FF;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #00A1FF;
      cursor: pointer;
    }

  }
}

.time {

  font-size: 13px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #999999;
  line-height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 25px;
}

.liaotian2 {
  .liaotianleft {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: 30px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .neirong {
      margin-left: 25px;

      .nick {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #999999;
      }

      .desc {
        background: rgba(4, 160, 255, 1.00);
        border-radius: 0 12px 12px 12px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 34px;
        max-width: 400px;
        padding: 14px;
        margin-top: 10px;
        position: relative;

        .img {
          width: 6px;
          height: 10px;
          position: absolute;
          left: -5px;
          top: 0px;
        }
      }
    }
  }

  .liaotianright {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    margin-top: 30px;

    .touxiang {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .neirong {
      margin-right: 25px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-wrap: nowrap;
      flex-direction: column;

      .nick {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #999999;
      }

      .desc {
        background: rgba(229, 234, 248, 1);
        border-radius: 12px 0 12px 12px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 34px;
        max-width: 400px;
        padding: 16px;
        margin-top: 10px;
        position: relative;

        .img {
          width: 6px;
          height: 9px;
          position: absolute;
          right: -6px;
          top: -0px;
        }
      }
    }
  }
}

.shurukuang {
  height: 150px;
  border-top: 1px solid rgba(238, 238, 238, 1);
}

.jianpan {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;

  img {
    margin-right: 20px;
  }
}

.input {
  width: 100%;
  height: 100px;
  position: relative;

  textarea {
    width: 100%;
    height: 100px;
    border: none;
  }

  .fasong {
    width: 68px;
    height: 32px;
    background: #00A1FF;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    color: rgba(255, 255, 255, 1);
    flex-direction: row;
    position: absolute;
    right: 20px;
    bottom: 0;
  }
}

.liaotianbody {
  overflow-y: scroll;
}

.jianpan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;

  i {
    font-size: 20px;
    color: #797979;
  }

  .left1 {
    i {
      margin-right: 10px;
    }
  }
}

.emojis {
  height: 160px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 0 0 0 15px;
}

.imgx {
  width: 300px;
}
</style>

