/*
  Warnings:

  - Added the required column `kategori` to the `buku` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `buku` ADD COLUMN `kategori` VARCHAR(191) NOT NULL;
