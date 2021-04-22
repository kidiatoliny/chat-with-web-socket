import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from 'uuid'
import { User } from "./User"

@Entity('messages')
class Message {
  @PrimaryColumn()
  id: string

  @Column()
  admin_id: string

  @Column()
  text: string

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User

  @Column()
  user_id: string

  @CreateDateColumn()
  created_at: string

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }


}

export { Message }