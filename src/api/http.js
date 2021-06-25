import axios from "axios";
import { Toast } from "vant";
import store from "@/store";

class Service {
  constructor() {
    this.baseURL = ""; // 设置api地址
    this.timeout = 60 * 1000; // 设置超时时间
  }
  setInterceptor(instance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        const token = store.getters.token;
        const needToken =
          config.needToken || (config.params && config.params.needToken);
        /**
         * 有token
         * 自定义配置里需要传睇token
         * 在请求头里携带上token
         * post的自定义参数在config里
         * get的自定义参数在config.params里
         */
        if (token && needToken) {
          // ['Authorization','third-session'] 自定义token键名
          config.headers["token"] = "";
        }
        return config;
      },
      (error) => {
        console.log("request Error", error);
        Toast.fail("请求失败：" + error);
        return Promise.reject(error);
      }
    );
    // 返回拦截
    instance.interceptors.response.use(
      async (response) => {
        if (response.status === 200) {
          // code为0则正常处理
          await new Promise((resolve) => setTimeout(resolve, 500)); // 延迟一下
          return Promise.resolve(response);
        } else {
          // 其他情况一律全局错误处理
          Toast.fail(response.data.msg);
          // code为60001、60002 身份验证失败
          if (response.data.code === 60001 || response.data.code === 60002) {
            store.dispatch("user/logout"); // 退出登录操作、清除token
          }
          return Promise.reject(response);
        }
      },
      (error) => {
        console.log("response Error" + error);
        // 根据返回固定格式，提取出错误信息
        const message =
          (error &&
            error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message;
        Toast.fail(message);
        return Promise.reject(error);
      }
    );
  }
  /**
   * @description: POST请求
   * @param {string} url 请求路径
   * @param {object} data 请求参数
   * @param {object} addConfig 自定义配置
   * @return:
   */
  post(url, data = {}, addConfig) {
    const instance = axios.create();
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      method: "POST",
      url,
      data,
      ...addConfig,
    };
    this.setInterceptor(instance);
    return instance(config);
  }

  /**
   * @description: GET请求
   * @param {string} url 请求路径
   * @param {object} params 请求参数
   * @param {object} addConfig 自定义配置
   * @return:
   */
  get(url, params = {}, addConfig) {
    const instance = axios.create();
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      method: "GET",
      url,
      params,
      ...addConfig,
    };
    this.setInterceptor(instance);
    return instance(config);
  }

  /**
   * @description: PUT请求
   * @param {string} url 请求路径
   * @param {object} data 请求参数
   * @param {object} addConfig 自定义配置
   * @return:
   */
  put(url, data = {}, addConfig) {
    const instance = axios.create();
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      method: "PUT",
      url,
      data,
      ...addConfig,
    };
    this.setInterceptor(instance);
    return instance(config);
  }

  /**
   * @description: DELETE请求
   * @param {string} url 请求路径
   * @param {object} data 请求参数
   * @param {object} addConfig 自定义配置
   * @return:
   */
  delete(url, data = {}, addConfig) {
    const instance = axios.create();
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      method: "DELETE",
      url,
      data,
      ...addConfig,
    };
    this.setInterceptor(instance);
    return instance(config);
  }
}

export default new Service();
