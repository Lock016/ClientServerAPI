import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sellers')
export class SellerEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 50 })
    company: string;

    @Column({ length: 200 })
    logo: string;

}
