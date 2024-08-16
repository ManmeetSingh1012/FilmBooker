/*
  Warnings:

  - You are about to drop the column `location_id` on the `theater` table. All the data in the column will be lost.
  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city_id` to the `Theater` table without a default value. This is not possible if the table is not empty.
  - Added the required column `theater_location` to the `Theater` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `theater` DROP FOREIGN KEY `Theater_location_id_fkey`;

-- AlterTable
ALTER TABLE `theater` DROP COLUMN `location_id`,
    ADD COLUMN `city_id` INTEGER NOT NULL,
    ADD COLUMN `theater_location` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `location`;

-- CreateTable
CREATE TABLE `City` (
    `city_id` INTEGER NOT NULL AUTO_INCREMENT,
    `city_name` VARCHAR(191) NOT NULL,
    `zip_code` INTEGER NOT NULL,

    UNIQUE INDEX `City_city_name_key`(`city_name`),
    PRIMARY KEY (`city_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Theater` ADD CONSTRAINT `Theater_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `City`(`city_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
