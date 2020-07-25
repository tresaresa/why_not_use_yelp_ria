const userId = '';

//用export default 暴露出去,供其他vue文件使用
export default {
  userId,
  setUserId(userId) {
    this.userId = userId
  },
  getUserId() {
    return this.userId
  }
}
