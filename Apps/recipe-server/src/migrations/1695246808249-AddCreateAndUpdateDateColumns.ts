import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCreateAndUpdateDateColumns1695246808249 implements MigrationInterface {
    name = 'AddCreateAndUpdateDateColumns1695246808249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`recipe\` ADD \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`recipe\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`step\` ADD \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`step\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`unit\` ADD \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`unit\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`ingredient\` ADD \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`ingredient\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingredient\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`ingredient\` DROP COLUMN \`createDate\``);
        await queryRunner.query(`ALTER TABLE \`unit\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`unit\` DROP COLUMN \`createDate\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`createDate\``);
        await queryRunner.query(`ALTER TABLE \`step\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`step\` DROP COLUMN \`createDate\``);
        await queryRunner.query(`ALTER TABLE \`recipe\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`recipe\` DROP COLUMN \`createDate\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createDate\``);
    }

}
