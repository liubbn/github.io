<template>
    <div>
        <div class="hm">
            <div class="hm-left">
                <div>秀色美图</div>
                秀色女神!甜美外表下巨大能量的星岛沙也加美图赏 星岛沙也加,日本模特、偶像,爱知县出身,毕业于金城学院大学,隶属みらいくーる公司,2014年在校时就已经是杂志“NAGOYA GIRL”的专属.
            </div>
            <div class="hm-right">
                <img src="../../../public/static/img/home-img-1.jpg" alt="" srcset="">
                <img src="../../../public/static/img/home-img-2.jpg" alt="" srcset="">
            </div>
            <div class="circle c1"></div>
            <div class="circle c2"></div>
            <div class="circle c3"></div>
            <div class="circle c4"></div>
        </div>
        <div class="hm-bt">
            <el-button @click="viewGallery">View Gallery</el-button>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods: {
           viewGallery () {
            this.$router.push('gallery').catch(err=>console.log(err))
            this.$emit('chage', '2')
           } 
        }
    }
</script>

<style scoped>
.hm {
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.7; 
    margin: 60px 0;
    padding: 50px;
    display: flex;
    /* height: 800px; */
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    position: relative;
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
    bottom: -10px;
    right: auto;
}

.c2 {
    top: -10px;
    left: auto;
    /* bottom: -10px; */
    right: -20px;
}
.c3 {
    top: auto;
    left: auto;
    bottom: -10px;
    right: -20px;
}
.c4 {
    top: auto;
    left: -20px;
    bottom: -10px;
    right: auto;
}

.hm-left {
    flex-grow: 1;
    padding: 30px 40px;
    margin-right: 30px;
    background-color: rgba(0,0,0,0.3);
}
.hm-left > div {
    font-size: 1.5rem;
    margin-bottom: 10px;
    /* font-weight: bolder; */
}
.hm-right {
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}
.hm-right > img:first-child {
    margin-bottom: 20px;
}
.hm-bt {
    display: flex;
    justify-content: center;
}
.hm-bt > .el-button{
    font-size: 1.1rem;
    /* padding: 10px 0; */
}
.el-button:focus,.el-button:hover {
    color: #99FF66 ;
}
</style>