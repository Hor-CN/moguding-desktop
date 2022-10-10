import Dexie from 'dexie'

export const db = new Dexie('DataBase')
db.version(1).stores({
  // 隐藏的自增主键，用户ID，蘑菇钉号码，头像,手机号，密码，昵称，性别,用户类型,token,学校名称，院系，专业，班级,学号
  user: '++,userId,moguNo,headImg,phone,password,nikeName,gender,userType,token,schoolName,depName,majorName,className,studentNumber'
})
