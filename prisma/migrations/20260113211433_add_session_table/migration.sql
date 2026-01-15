-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" TIMESTAMP(3),
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchemaDefinition" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "ownerType" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "lastAudited" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SchemaDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SchemaDefinition_shop_ownerType_key_key" ON "SchemaDefinition"("shop", "ownerType", "key");
