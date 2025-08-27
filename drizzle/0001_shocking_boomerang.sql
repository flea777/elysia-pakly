CREATE TYPE "public"."shift_enum" AS ENUM('DAY', 'NIGHT');--> statement-breakpoint
CREATE TABLE "receiver" (
	"id" serial PRIMARY KEY NOT NULL,
	"condominium_id" integer NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "apartment" ALTER COLUMN "number" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "condominium" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "condominium" ALTER COLUMN "address" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "condominium" ALTER COLUMN "subscription_status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "doorman" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "doorman" ALTER COLUMN "shift" SET DATA TYPE "public"."shift_enum" USING "shift"::"public"."shift_enum";--> statement-breakpoint
ALTER TABLE "package" ALTER COLUMN "recipient" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "package" ALTER COLUMN "confirmation_code" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "resident" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "resident" ALTER COLUMN "whatsapp" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "stripe_subscription_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "plan" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "start_date" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "end_date" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "tower" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "condominium" ADD COLUMN "condominium_number" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "doorman" ADD COLUMN "created_at" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "receiver" ADD CONSTRAINT "receiver_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resident" DROP COLUMN "email";