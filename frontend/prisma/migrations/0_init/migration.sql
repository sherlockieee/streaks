-- CreateEnum
CREATE TYPE "HabitProgressStatus" AS ENUM ('SUCCESS', 'NOT_DONE_YET', 'FAIL_FREEZE', 'FAIL_CONSECUTIVE_DAY_OFFS');

-- CreateTable
CREATE TABLE "habits" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "freeze_limit" INTEGER NOT NULL DEFAULT 2,
    "minimum_time" INTEGER NOT NULL DEFAULT 1,
    "require_evidence" BOOLEAN NOT NULL DEFAULT true,
    "allow_streak_freeze" BOOLEAN NOT NULL DEFAULT true,
    "consecutive_days_off_allowed" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitProgress" (
    "id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL,
    "minutes" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "last_completed_date" TIMESTAMP(3),
    "current_streak_count" INTEGER NOT NULL DEFAULT 0,
    "status" "HabitProgressStatus" NOT NULL DEFAULT 'NOT_DONE_YET',

    CONSTRAINT "HabitProgress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HabitProgress" ADD CONSTRAINT "HabitProgress_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

