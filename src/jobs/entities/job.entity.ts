import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { JobType } from '../jobs.enum';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  salary: number;

  @Column()
  location: string;

  @Column({
    type: 'enum',
    enum: JobType,
    default: JobType.ONSITE,
  })
  jobType: string;

  @ManyToOne(() => User, (user) => user.id)
  createdBy: User;
}