import { Modal } from "antd";

export function checkValidationFile(file: File) {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  // 그냥 !file 하면 안되는 건가?
  if (file.size > 20 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다.(png, jpeg 만 가능)",
    });
    return false;
  }
  return true;
}
