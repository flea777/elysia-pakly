ALTER TABLE "receiver" DROP CONSTRAINT "receiver_condominium_id_condominium_id_fk";
--> statement-breakpoint
ALTER TABLE "package" ALTER COLUMN "doorman_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "receiver" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "receiver" ADD CONSTRAINT "receiver_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE set null ON UPDATE cascade;