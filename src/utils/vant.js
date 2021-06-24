import Vue from "vue";
import {
  Toast,
  List,
  Search,
  Button,
  Icon,
  Badge,
  Popup,
  Image as VanImage,
  Stepper,
  Swipe,
  SwipeItem,
  ImagePreview,
  Form,
  Field,
  RadioGroup,
  Radio,
  NavBar,
  Uploader,
  Tab,
  Tabs,
  AddressList,
  AddressEdit,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  Card,
  Tag,
  Dialog,
  CountDown,
} from "vant";
import "vant/lib/index.less";
import "vant/lib/icon/local.css";

// 全局设置Toast loading属性
Toast.setDefaultOptions("loading", {
  forbidClick: true, // 是否禁止背景点击
  overlay: true, // 是否显示背景遮罩层
  className: "globe_loading", // 设置隐藏属性 客户不想看loading 说心塞🙄️
  duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
});

Toast.allowMultiple(); // 允许同时存在多个 Toast

Vue.use(Toast);
Vue.use(List);
Vue.use(Search);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Badge);
Vue.use(Popup);
Vue.use(VanImage);
Vue.use(Stepper);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(ImagePreview);
Vue.use(Form);
Vue.use(Field);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(NavBar);
Vue.use(Uploader);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Dialog);
Vue.use(CountDown);
