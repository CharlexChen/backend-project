import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'admin', // 表名
})
export class Admin {
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
    name: 'password',
    nullable: false,
    comment: '加密密码',
    length: 255,
  })
  password: string | null;

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
    name: 'status',
    comment: '状态1有效0无效',
    default: () => "'1'",
  })
  status: number;
  @Column({
    type: 'int',
    name: 'user_id',
    comment: '关联用户表ID',
    nullable: false,
  })
  userId: number;
}
