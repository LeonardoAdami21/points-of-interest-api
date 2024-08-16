-- CreateTable
CREATE TABLE "Points" (
    "id" SERIAL NOT NULL,
    "namePoi" TEXT NOT NULL,
    "coordernateX" INTEGER NOT NULL,
    "coordenateY" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Points_pkey" PRIMARY KEY ("id")
);
