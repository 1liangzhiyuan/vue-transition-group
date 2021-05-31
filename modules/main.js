// 引入vue
import Vue from 'vue';
// 引入样式
import './demo.scss';

new Vue({
    // 视图
    el: '#app',
    // 数据
    data: {
        arr: Array(100).fill(1).map((item, index) => ({ id: index, value: index % 10 }))
    },
    // 方法
    methods: {
        // 打乱顺序
        random() {
            this.arr.sort(() => Math.random() < 0.5 ? 1 : -1);
        }
    }
})