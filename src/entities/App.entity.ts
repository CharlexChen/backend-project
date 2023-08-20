import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'app', // 表名
})
export class App {
  @PrimaryGeneratedColumn() // 自增主键
  id: number;

  @Column({
    type: 'varchar',
    name: 'app_name',
    nullable: false,
    comment: '应用名称',
    length: 100,
  })
  appName: string | null;

  @Column({
    type: 'varchar',
    name: 'app_logo',
    nullable: false,
    comment: 'LOGO链接',
    length: 255,
  })
  appLogo: string | null;

  @Column({
    type: 'text',
    name: 'description',
    nullable: false,
    comment: '描述',
  })
  description: string | null;

  @Column({
    type: 'varchar',
    name: 'appid',
    nullable: false,
    comment: '应用ID',
    length: 100,
  })
  appid: string | null;

  @Column({
    type: 'varchar',
    name: 'secret',
    nullable: false,
    comment: '应用secret',
    length: 200,
  })
  secret: string | null;

  @Column({
    type: 'varchar',
    name: 'login_callback',
    nullable: false,
    comment: '登录回调URL',
    length: 200,
  })
  loginCallback: string | null;

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
    default: () => 0,
  })
  status: number;
}
