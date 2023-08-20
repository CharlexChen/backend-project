import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user', // 表名
})
export class User {
  @PrimaryGeneratedColumn() // 自增主键
  id: number;

  @Column({
    type: 'varchar',
    name: 'username',
    nullable: false,
    comment: '用户名',
    length: 50,
  })
  username: string | null;

  @Column({
    type: 'varchar',
    name: 'email',
    nullable: false,
    comment: '邮箱',
    length: 50,
  })
  email: string | null;

  @Column({
    type: 'varchar',
    name: 'phone',
    nullable: false,
    comment: '手机号',
    length: 30,
  })
  phone: string | null;

  @Column({
    type: 'varchar',
    name: 'avatar',
    nullable: false,
    comment: '头像URL',
    length: 100,
  })
  avatar: string | null;

  @Column({
    type: 'varchar',
    name: 'gender',
    nullable: false,
    comment: '性别',
    length: 30,
  })
  gender: number | null;

  @Column({
    type: 'varchar',
    name: 'password',
    nullable: false,
    comment: '加密后密码',
    length: 200,
  })
  password: string | null;

  @Column({
    type: 'varchar',
    name: 'last_login_appid',
    nullable: true,
    comment: '最后登陆应用ID',
    length: 100,
  })
  lastLoginAppid: string | null;

  @Column({
    type: 'datetime',
    name: 'last_login_time',
    nullable: true,
    comment: '最后登陆时间',
  })
  lastLoginTime: Date | null;

  @Column({
    type: 'datetime',
    name: 'create_time',
    nullable: false,
    comment: '创建时间',
  })
  createTime: Date | null;

  @Column({
    type: 'datetime',
    name: 'update_time',
    nullable: false,
    comment: '更新时间',
  })
  updateTime: Date | null;

  @Column({
    type: 'datetime',
    name: 'delete_time',
    nullable: true,
    comment: '删除时间',
  })
  deleteTime: Date | null;

  @Column({
    type: 'tinyint',
    name: 'deleted',
    comment: '是否逻辑删除0否1是',
    default: () => 0,
  })
  deleted: number;

  @Column({
    type: 'tinyint',
    name: 'status',
    comment: '状态1有效0无效',
    default: () => 0,
  })
  status: number;
}
