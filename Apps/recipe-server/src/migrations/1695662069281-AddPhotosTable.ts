import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhotosTable1695662069281 implements MigrationInterface {
    name = 'AddPhotosTable1695662069281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`photo\` (\`id\` varchar(36) NOT NULL, \`url\` varchar(255) NOT NULL, \`userID\` varchar(36) NULL, \`recipeID\` varchar(36) NULL, \`stepID\` varchar(36) NULL, \`taskID\` varchar(36) NULL, \`ingredientID\` varchar(36) NULL, UNIQUE INDEX \`REL_a9c9bc24e2e86be57343705eee\` (\`userID\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_a9c9bc24e2e86be57343705eee6\` FOREIGN KEY (\`userID\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_c1d1f8974576e896826716c75e2\` FOREIGN KEY (\`recipeID\`) REFERENCES \`recipe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_83bf029dc52514bee19532db11d\` FOREIGN KEY (\`stepID\`) REFERENCES \`step\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_2059664c7baad31368c264767fe\` FOREIGN KEY (\`taskID\`) REFERENCES \`task\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_d1f5cfe652edc82c2bcc93a71c0\` FOREIGN KEY (\`ingredientID\`) REFERENCES \`ingredient\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_d1f5cfe652edc82c2bcc93a71c0\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_2059664c7baad31368c264767fe\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_83bf029dc52514bee19532db11d\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_c1d1f8974576e896826716c75e2\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_a9c9bc24e2e86be57343705eee6\``);
        await queryRunner.query(`DROP INDEX \`REL_a9c9bc24e2e86be57343705eee\` ON \`photo\``);
        await queryRunner.query(`DROP TABLE \`photo\``);
    }

}
