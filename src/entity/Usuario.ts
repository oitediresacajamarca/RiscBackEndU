import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Usuarios_Risc{
    @PrimaryGeneratedColumn({ type: "int" })
    id_usuarios_risc: number;
    @Column({type: "varchar", length: 8, nullable: false})
    dni: string;
    @Column({type: "varchar", length: 16, nullable: false})
    password: string;
    @Column({type: "varchar", length: 200, nullable: false})
    email: string;
    @Column({type: "varchar", length: 200, nullable: false})
    apellido_paterno: string;
    @Column({type: "varchar", length: 200, nullable: false})
    apellido_materno: string;
    @Column({type: "varchar", length: 200, nullable: false})
    nombres: string;
    @Column({type: "varchar", length: 200, nullable: false})
    tipo_ambito: string;
    @Column({type: "varchar", length: 200, nullable: false})
    descripcion_ambito: string;
}