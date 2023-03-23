<template>
  <div>
    <div class="ct">
      <div v-for="(it, idx) in imgList" :key="idx">
        <el-image class="card-img"
         :src="it"
         :preview-src-list="imgList"
         lazy
         >
         </el-image>
      </div>
      <div class="circle c1"></div>
    <div class="circle c2"></div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      imgList: []
    }
  },
  created() {
    this.getList()
  },

  methods: {
    getList () {
      axios.get('http://127.0.0.1:8080/api/upload_history', {
        headers: {'Content-type': 'multipart/form-data', 'Authorization': 'xddOOrYAmSLmgYLM8TwiLOHcne2pZrqM'}
      }).then(res => {
        let dt = res.data.data
        this.imgList = dt.map(r => r.url)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style socped>
.ct {
  position: relative;
  margin-top: 40px;
  padding: 40px;
  background-color: rgba(0,0,0,.3);
  columns: 250px 4;
  /* column-count: 4; */
  column-gap: 2px;
  border-top: 1px solid #fff;
}
.circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
}
.c1 {
    top: -10px;
    left: -20px;
    /* bottom: -10px; */
    right: auto;
}

.c2 {
    top: -10px;
    left: auto;
    right: -20px;
}
.ct > div:hover {
  /* background-color: #99FF66 ; */
  filter: blur(2px);
}
</style>