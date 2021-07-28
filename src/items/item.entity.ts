import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    description: string;

    @Column()
    price: number;

    @Column({ length: 200 })
    image: string;

}
