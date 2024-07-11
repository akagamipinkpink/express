/*
  Warnings:

  - Added the required column `sampul` to the `buku` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buku` ADD COLUMN `sampul` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;
