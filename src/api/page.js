import http from "./http";

// 上传头像
export function upload(url, data, addConfig) {
  return http.post(url, data, { needToken: true, ...addConfig });
}
