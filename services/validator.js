// TODO 正则表达式匹配用户id 和密码 返回bool值
// 传进的参数值是否是字符串

// user_id【8位数字】
export function is_userID(user_id) {

}

// password【6-18位，数字+大小写字母】
export function is_password(password) {

}

// course_id 大于0的数字
export function is_courseID(course_id) {

}

// student_id 【8位数字】
export function is_studentID(student_id) {
  return is_userID(student_id);
}