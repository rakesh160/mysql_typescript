import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Manager {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    subscribed: string;

}