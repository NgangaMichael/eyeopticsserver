/*
  Warnings:

  - You are about to drop the column `brand` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `coating` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `itemType` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `prescription` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `stock` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Stock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceKsh` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceUsd` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` DROP COLUMN `brand`,
    DROP COLUMN `coating`,
    DROP COLUMN `color`,
    DROP COLUMN `itemType`,
    DROP COLUMN `material`,
    DROP COLUMN `model`,
    DROP COLUMN `prescription`,
    DROP COLUMN `price`,
    DROP COLUMN `quantity`,
    DROP COLUMN `size`,
    ADD COLUMN `appPrice` DECIMAL(10, 2) NULL,
    ADD COLUMN `bought` DATETIME(3) NULL,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `costKsh` DECIMAL(10, 2) NULL,
    ADD COLUMN `costUsd` DECIMAL(10, 2) NULL,
    ADD COLUMN `etr` DATETIME(3) NULL,
    ADD COLUMN `fob` DECIMAL(10, 2) NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NULL,
    ADD COLUMN `loading` DECIMAL(10, 2) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `notes` VARCHAR(191) NULL,
    ADD COLUMN `prevCostPb` DECIMAL(10, 2) NULL,
    ADD COLUMN `priceKsh` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `priceUsd` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `profitPerBale` DECIMAL(10, 2) NULL,
    ADD COLUMN `qty` INTEGER NOT NULL,
    ADD COLUMN `sold` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `supplier` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Stock_code_key` ON `Stock`(`code`);
