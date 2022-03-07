import helloWorld from "./hello-world";
// import imgSrc from "./assets/test.png";
import "./index.css";
import "./style.less";
// import _ from "lodash";
import "./async-module.js";

helloWorld();

// const img = document.createElement("img");
// img.src = imgSrc;
// document.body.appendChild(img);

// document.body.classList.add("hello");

// console.log(_.join(["a", "b", "c"], " "));

const button = document.createElement("button");
button.textContent = "点击+";
button.addEventListener("click", () => {
  //按需加载 优化用！  1.webpackPrefetch 预加载  网络空闲才会加载 更优秀 2.webpackPreload 类似于懒加载
  import(/* webpackChunkName:'Math',webpackPrefetch:true */ "./math.js").then(
    ({ add }) => {
      console.log(add(4, 5));
    }
  );
});

document.body.appendChild(button);
