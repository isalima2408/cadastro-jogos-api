import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table
export class Jogo extends Model {
    @Column({ primaryKey: true, type: DataType.BIGINT, allowNull: false, unique: true })

    @Column({ type: DataType.STRING(100), allowNull: false })
    name: string

    @Column({ type: DataType.STRING(100), allowNull: false })
    category: string
    
    @Column({ type: DataType.INTEGER, allowNull: false })
    price: number

    @Column({ type: DataType.DATE, allowNull: false })
    createdAt: string

    @Column({ type: DataType.DATE, allowNull: true })
    updatedAt: string
}
