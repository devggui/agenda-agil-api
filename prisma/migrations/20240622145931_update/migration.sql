/*
  Warnings:

  - Added the required column `address` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cellphone` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "cellphone" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "neighborhood" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
