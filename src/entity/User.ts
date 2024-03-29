import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    commiittee: string;

}
