-- CreateTable
CREATE TABLE `Location` (
    `location_id` INTEGER NOT NULL AUTO_INCREMENT,
    `location_name` VARCHAR(191) NOT NULL,
    `zip_code` INTEGER NOT NULL,

    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Theater` (
    `theater_id` INTEGER NOT NULL AUTO_INCREMENT,
    `theater_name` VARCHAR(191) NOT NULL,
    `total_screen` INTEGER NOT NULL,
    `location_id` INTEGER NOT NULL,

    PRIMARY KEY (`theater_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Screen` (
    `screen_id` INTEGER NOT NULL AUTO_INCREMENT,
    `screen_name` VARCHAR(191) NOT NULL,
    `theater_id` INTEGER NOT NULL,
    `total_seats` INTEGER NOT NULL,

    PRIMARY KEY (`screen_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tier` (
    `tier_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tier_name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `screen_id` INTEGER NOT NULL,
    `seat_start_range` VARCHAR(191) NOT NULL,
    `seat_end_range` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tier_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ScreenShowTiming` (
    `screen_show_id` INTEGER NOT NULL AUTO_INCREMENT,
    `screen_id` INTEGER NOT NULL,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,
    `movie_id` INTEGER NOT NULL,

    PRIMARY KEY (`screen_show_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `movie_id` INTEGER NOT NULL AUTO_INCREMENT,
    `movie_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`movie_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Theater` ADD CONSTRAINT `Theater_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `Location`(`location_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Screen` ADD CONSTRAINT `Screen_theater_id_fkey` FOREIGN KEY (`theater_id`) REFERENCES `Theater`(`theater_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tier` ADD CONSTRAINT `Tier_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `Screen`(`screen_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ScreenShowTiming` ADD CONSTRAINT `ScreenShowTiming_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `Screen`(`screen_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ScreenShowTiming` ADD CONSTRAINT `ScreenShowTiming_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `Movie`(`movie_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
