ALTER TABLE "package" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "package" ALTER COLUMN "apartment_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "condominium" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "apartment" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "apartment" ALTER COLUMN "tower_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "doorman" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "doorman" ALTER COLUMN "condominium_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "receiver" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "receiver" ALTER COLUMN "condominium_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "resident" ALTER COLUMN "apartment_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "condominium_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "tower" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "tower" ALTER COLUMN "condominium_id" SET DATA TYPE text;