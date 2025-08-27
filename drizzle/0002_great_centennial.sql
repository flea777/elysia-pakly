ALTER TABLE "package" DROP CONSTRAINT "package_apartment_id_apartment_id_fk";
--> statement-breakpoint
ALTER TABLE "package" DROP CONSTRAINT "package_doorman_id_doorman_id_fk";
--> statement-breakpoint
ALTER TABLE "apartment" DROP CONSTRAINT "apartment_tower_id_tower_id_fk";
--> statement-breakpoint
ALTER TABLE "doorman" DROP CONSTRAINT "doorman_condominium_id_condominium_id_fk";
--> statement-breakpoint
ALTER TABLE "receiver" DROP CONSTRAINT "receiver_condominium_id_condominium_id_fk";
--> statement-breakpoint
ALTER TABLE "resident" DROP CONSTRAINT "resident_apartment_id_apartment_id_fk";
--> statement-breakpoint
ALTER TABLE "subscription" DROP CONSTRAINT "subscription_condominium_id_condominium_id_fk";
--> statement-breakpoint
ALTER TABLE "tower" DROP CONSTRAINT "tower_condominium_id_condominium_id_fk";
--> statement-breakpoint
ALTER TABLE "package" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "condominium" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "apartment" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "doorman" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "receiver" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "resident" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "subscription" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "tower" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "package" ADD CONSTRAINT "package_apartment_id_apartment_id_fk" FOREIGN KEY ("apartment_id") REFERENCES "public"."apartment"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "package" ADD CONSTRAINT "package_doorman_id_doorman_id_fk" FOREIGN KEY ("doorman_id") REFERENCES "public"."doorman"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "apartment" ADD CONSTRAINT "apartment_tower_id_tower_id_fk" FOREIGN KEY ("tower_id") REFERENCES "public"."tower"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "doorman" ADD CONSTRAINT "doorman_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "receiver" ADD CONSTRAINT "receiver_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "resident" ADD CONSTRAINT "resident_apartment_id_apartment_id_fk" FOREIGN KEY ("apartment_id") REFERENCES "public"."apartment"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "tower" ADD CONSTRAINT "tower_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE cascade ON UPDATE cascade;