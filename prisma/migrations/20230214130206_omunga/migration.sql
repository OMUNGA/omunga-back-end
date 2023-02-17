-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followers" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "userTofollowID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "followers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "focialNetworks" (
    "socialnetworkID" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "focialNetworks_pkey" PRIMARY KEY ("socialnetworkID")
);

-- CreateTable
CREATE TABLE "posts" (
    "postID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN DEFAULT false,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("postID")
);

-- CreateTable
CREATE TABLE "comments" (
    "commentID" TEXT NOT NULL,
    "postID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("commentID")
);

-- CreateTable
CREATE TABLE "postlikes" (
    "postlikeID" TEXT NOT NULL,
    "postID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "postlikes_pkey" PRIMARY KEY ("postlikeID")
);

-- CreateTable
CREATE TABLE "commentLikes" (
    "commentlikeID" TEXT NOT NULL,
    "CommentID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "commentLikes_pkey" PRIMARY KEY ("commentlikeID")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "focialNetworks_userID_key" ON "focialNetworks"("userID");

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_userTofollowID_fkey" FOREIGN KEY ("userTofollowID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "postlikes" ADD CONSTRAINT "postlikes_postID_fkey" FOREIGN KEY ("postID") REFERENCES "posts"("postID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postlikes" ADD CONSTRAINT "postlikes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentLikes" ADD CONSTRAINT "commentLikes_CommentID_fkey" FOREIGN KEY ("CommentID") REFERENCES "comments"("commentID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentLikes" ADD CONSTRAINT "commentLikes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
