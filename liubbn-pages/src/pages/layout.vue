<template>
    <div class="bd">
        <video id="bk"
        autoplay loop muted src="../../public/static/bk.mp4"></video>
        <el-container>
            <el-header>
                <div class="hd">Astro Motion</div>
                <el-menu class="nav-menu"  active-text-color="#99FF66"
                    text-color="#fff"
                    :default-active="idx" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">
                        Home
                    </el-menu-item>
                    <el-menu-item index="2">Gallery</el-menu-item>
                    <!-- <el-menu-item index="3">About</el-menu-item>
                    <el-menu-item index="4">Contact</el-menu-item> -->
                </el-menu>
            </el-header>
            <el-main>
                <RouterView @chage="chage"></RouterView>
            </el-main>
            <el-footer>
                Copyright © 2013-2023 bobxy.com All Rights Reserved. 
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
    data() {
        return {
            idx: '4'
        };
    },
    created() {
        this.init()
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            if (key == 1) {
                this.idx = '1'
                this.$router.push('/home').catch(err=> console.log(err))
            }
            if (key == 2) {
                this.idx = '2'
                this.$router.push('/gallery').catch(err=> console.log(err))
            }
        },
        chage(key) {
            this.idx = key
        },
        init() {
            if (this.idx == 4) {
                this.idx = '1'
                this.$router.push('/home').catch(err=> console.log(err))
            }
        }
    },
    components: { RouterView }
}
</script>

<style>
.bd {
    padding: 30px;
}
#bk {
    position: fixed;
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    z-index: -100;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(-50%) translateY(-50%)
}

.nav-menu {
    background: transparent;
    border-bottom: none !important;
    width: 60%;
    display: flex;
    justify-content: flex-end;
}
.el-container {
    /* position: relative; */
    height: 100vh;
}

.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}
.el-header .hd {
    font-size: 2.4rem;
}

.circle {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    /* border: 1px solid #99FF66; */
    /* background: #99FF66; */
}

.el-menu-item {
    font-size: 1.5rem;
    padding: 0 30px;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: transparent;
}

.el-main {
    /* min-height: 800px; */
    overflow:unset;
}

.el-footer {
    color: #fff;
    text-align: center;
    font-size: 1.357rem;
    line-height: 60px;
    margin-top: 30px;
    background-color: rgba(0, 0, 0, 0.3);
}

</style>