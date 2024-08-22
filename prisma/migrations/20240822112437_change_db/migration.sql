-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MODERATOR', 'VERIFIED', 'PREMIUM', 'MEMBER');

-- CreateTable
CREATE TABLE "users" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "username" STRING NOT NULL,
    "email" STRING NOT NULL,
    "phone" STRING,
    "password" STRING NOT NULL,
    "bio" STRING,
    "photo" STRING,
    "cover" STRING,
    "address" STRING,
    "socialMedia" STRING[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOL NOT NULL DEFAULT false,
    "role" "UserRole" NOT NULL DEFAULT 'MEMBER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followers" (
    "id" STRING NOT NULL,
    "userTofollowID" STRING NOT NULL,
    "userID" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "followers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "focialNetworks" (
    "socialnetworkID" STRING NOT NULL,
    "facebook" STRING NOT NULL,
    "twitter" STRING NOT NULL,
    "medium" STRING NOT NULL,
    "linkedin" STRING NOT NULL,
    "instagram" STRING NOT NULL,
    "userID" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "focialNetworks_pkey" PRIMARY KEY ("socialnetworkID")
);

-- CreateTable
CREATE TABLE "posts" (
    "postID" STRING NOT NULL,
    "title" STRING NOT NULL,
    "content" STRING NOT NULL,
    "cover" STRING NOT NULL,
    "tags" STRING[],
    "published" BOOL DEFAULT false,
    "userID" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "description" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("postID")
);

-- CreateTable
CREATE TABLE "comments" (
    "commentID" STRING NOT NULL,
    "postID" STRING NOT NULL,
    "userID" STRING NOT NULL,
    "content" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "comments_pkey" PRIMARY KEY ("commentID")
);

-- CreateTable
CREATE TABLE "commentReplies" (
    "id" STRING NOT NULL,
    "commentID" STRING NOT NULL,
    "userID" STRING NOT NULL,
    "content" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "commentReplies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postlikes" (
    "postlikeID" STRING NOT NULL,
    "postID" STRING NOT NULL,
    "userID" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "postlikes_pkey" PRIMARY KEY ("postlikeID")
);

-- CreateTable
CREATE TABLE "commentLikes" (
    "commentlikeID" STRING NOT NULL,
    "CommentID" STRING NOT NULL,
    "userID" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "commentLikes_pkey" PRIMARY KEY ("commentlikeID")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "focialNetworks_userID_key" ON "focialNetworks"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "focialNetworks" ADD CONSTRAINT "focialNetworks_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_postID_fkey" FOREIGN KEY ("postID") REFERENCES "posts"("postID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReplies" ADD CONSTRAINT "commentReplies_commentID_fkey" FOREIGN KEY ("commentID") REFERENCES "comments"("commentID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentReplies" ADD CONSTRAINT "commentReplies_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postlikes" ADD CONSTRAINT "postlikes_postID_fkey" FOREIGN KEY ("postID") REFERENCES "posts"("postID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postlikes" ADD CONSTRAINT "postlikes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentLikes" ADD CONSTRAINT "commentLikes_CommentID_fkey" FOREIGN KEY ("CommentID") REFERENCES "comments"("commentID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentLikes" ADD CONSTRAINT "commentLikes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
