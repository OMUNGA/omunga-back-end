/*
  Warnings:

  - The primary key for the `Followers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Following` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Followers" DROP CONSTRAINT "Followers_pkey",
ADD CONSTRAINT "Followers_pkey" PRIMARY KEY ("followersID");

-- AlterTable
ALTER TABLE "Following" DROP CONSTRAINT "Following_pkey",
ADD CONSTRAINT "Following_pkey" PRIMARY KEY ("followingID");
