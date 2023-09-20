import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSchema1693454676042 implements MigrationInterface {
    name = 'CreateSchema1693454676042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`displayName\` varchar(255) NOT NULL, \`userName\` varchar(255) NOT NULL, \`emailAddress\` varchar(255) NOT NULL, \`saltHash\` varchar(255) NULL, UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` (\`userName\`), UNIQUE INDEX \`IDX_eea9ba2f6e1bb8cb89c4e672f6\` (\`emailAddress\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recipe\` (\`id\` varchar(36) NOT NULL, \`order\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`step\` (\`id\` varchar(36) NOT NULL, \`order\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`recipeID\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` varchar(36) NOT NULL, \`order\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`stepID\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`unit\` (\`id\` varchar(36) NOT NULL, \`description\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_6a7fd34acda861fd1720bb2c1e\` (\`description\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingredient\` (\`id\` varchar(36) NOT NULL, \`quantity\` int NOT NULL, \`unitID\` varchar(36) NULL, \`taskID\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recipe_user\` (\`recipeID\` varchar(36) NOT NULL, \`userID\` varchar(36) NOT NULL, INDEX \`IDX_ab217d0df57e8e155dea280871\` (\`recipeID\`), INDEX \`IDX_3d898d4f8039140278d92d93dc\` (\`userID\`), PRIMARY KEY (\`recipeID\`, \`userID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`step\` ADD CONSTRAINT \`FK_a3337294589b2e4d294eed50c3b\` FOREIGN KEY (\`recipeID\`) REFERENCES \`recipe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_09c4bfdb05d80ec4c0773fd0e3f\` FOREIGN KEY (\`stepID\`) REFERENCES \`step\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ingredient\` ADD CONSTRAINT \`FK_0b53c2989e544c746203539a958\` FOREIGN KEY (\`unitID\`) REFERENCES \`unit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ingredient\` ADD CONSTRAINT \`FK_91cf138d24ef2acf924210258b3\` FOREIGN KEY (\`taskID\`) REFERENCES \`task\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`recipe_user\` ADD CONSTRAINT \`FK_ab217d0df57e8e155dea2808711\` FOREIGN KEY (\`recipeID\`) REFERENCES \`recipe\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`recipe_user\` ADD CONSTRAINT \`FK_3d898d4f8039140278d92d93dcc\` FOREIGN KEY (\`userID\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`recipe_user\` DROP FOREIGN KEY \`FK_3d898d4f8039140278d92d93dcc\``);
        await queryRunner.query(`ALTER TABLE \`recipe_user\` DROP FOREIGN KEY \`FK_ab217d0df57e8e155dea2808711\``);
        await queryRunner.query(`ALTER TABLE \`ingredient\` DROP FOREIGN KEY \`FK_91cf138d24ef2acf924210258b3\``);
        await queryRunner.query(`ALTER TABLE \`ingredient\` DROP FOREIGN KEY \`FK_0b53c2989e544c746203539a958\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_09c4bfdb05d80ec4c0773fd0e3f\``);
        await queryRunner.query(`ALTER TABLE \`step\` DROP FOREIGN KEY \`FK_a3337294589b2e4d294eed50c3b\``);
        await queryRunner.query(`DROP INDEX \`IDX_3d898d4f8039140278d92d93dc\` ON \`recipe_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_ab217d0df57e8e155dea280871\` ON \`recipe_user\``);
        await queryRunner.query(`DROP TABLE \`recipe_user\``);
        await queryRunner.query(`DROP TABLE \`ingredient\``);
        await queryRunner.query(`DROP INDEX \`IDX_6a7fd34acda861fd1720bb2c1e\` ON \`unit\``);
        await queryRunner.query(`DROP TABLE \`unit\``);
        await queryRunner.query(`DROP TABLE \`task\``);
        await queryRunner.query(`DROP TABLE \`step\``);
        await queryRunner.query(`DROP TABLE \`recipe\``);
        await queryRunner.query(`DROP INDEX \`IDX_eea9ba2f6e1bb8cb89c4e672f6\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
