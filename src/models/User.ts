import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, ManyToMany, OneToOne, OneToMany } from "typeorm"
import {Role} from "./Role"
import { Professor } from "./Professor";
import { Student } from "./Student";


@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({name:"first_name"})
    firstName!: string;

    @Column({name:"last_name"})
    lastName!:string;

    @Column({name:"email"})
    email!:string;

    @Column({name:"phone"})
    phone!:number;

    @Column({name:"password", select:false})
    password!:string;

    @Column({name:"is_active"})
    isActive!:boolean;

    //Relacion {0..n}--{1} con Roles
    @ManyToOne(()=>Role,(role)=>role.user)
    @JoinColumn({name:"role_id"})
    role!:Role;

    // //Relation User {1}--{1} Professor
    // @OneToOne(()=>Professor,(professor)=>professor.user)
    // @JoinColumn({name:"professor_id"})
    // professor!:Professor

    // //Relation User {1}--{1} Student
    // @OneToOne(()=>Student,(student)=>student.user)
    // @JoinColumn({name:"student_id"})
    // student!:Student

}