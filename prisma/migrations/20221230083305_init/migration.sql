-- CreateTable
CREATE TABLE "User" (
    "userID" TEXT NOT NULL,
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "SocialNetwork" (
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

    CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY ("socialnetworkID")
);

-- CreateTable
CREATE TABLE "Following" (
    "userfollowID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "followingID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Following_pkey" PRIMARY KEY ("userfollowID")
);

-- CreateTable
CREATE TABLE "Followers" (
    "userfollowID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "followersID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Followers_pkey" PRIMARY KEY ("userfollowID")
);

-- CreateTable
CREATE TABLE "Post" (
    "postID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN DEFAULT false,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postID")
);

-- CreateTable
CREATE TABLE "Comment" (
    "commentID" TEXT NOT NULL,
    "postID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentID")
);

-- CreateTable
CREATE TABLE "PostLike" (
    "postlikeID" TEXT NOT NULL,
    "postID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PostLike_pkey" PRIMARY KEY ("postlikeID")
);

-- CreateTable
CREATE TABLE "CommentLike" (
    "commentlikeID" TEXT NOT NULL,
    "CommentID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CommentLike_pkey" PRIMARY KEY ("commentlikeID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SocialNetwork_userID_key" ON "SocialNetwork"("userID");

-- AddForeignKey
ALTER TABLE "SocialNetwork" ADD CONSTRAINT "SocialNetwork_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Following" ADD CONSTRAINT "Following_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Followers" ADD CONSTRAINT "Followers_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("postID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostLike" ADD CONSTRAINT "PostLike_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("postID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostLike" ADD CONSTRAINT "PostLike_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentLike" ADD CONSTRAINT "CommentLike_CommentID_fkey" FOREIGN KEY ("CommentID") REFERENCES "Comment"("commentID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentLike" ADD CONSTRAINT "CommentLike_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
