CREATE TYPE "public"."package_status" AS ENUM('DELIVERED', 'PENDING_PICKUP');--> statement-breakpoint
CREATE TABLE "apartment" (
	"id" serial PRIMARY KEY NOT NULL,
	"tower_id" integer NOT NULL,
	"number" varchar(10) NOT NULL,
	"floor" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "condominium" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"address" varchar(200) NOT NULL,
	"subscription_status" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "doorman" (
	"id" serial PRIMARY KEY NOT NULL,
	"condominium_id" integer NOT NULL,
	"name" varchar(100) NOT NULL,
	"shift" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "package" (
	"id" serial PRIMARY KEY NOT NULL,
	"apartment_id" integer NOT NULL,
	"doorman_id" integer NOT NULL,
	"recipient" varchar(150) NOT NULL,
	"confirmation_code" varchar(50) NOT NULL,
	"status" "package_status" DEFAULT 'PENDING_PICKUP' NOT NULL,
	"delivery_date" timestamp DEFAULT now(),
	"pickup_date" timestamp
);
--> statement-breakpoint
CREATE TABLE "resident" (
	"id" serial PRIMARY KEY NOT NULL,
	"apartment_id" integer NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(150) NOT NULL,
	"whatsapp" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "subscription" (
	"id" serial PRIMARY KEY NOT NULL,
	"condominium_id" integer NOT NULL,
	"stripe_subscription_id" varchar(200) NOT NULL,
	"plan" varchar(50) NOT NULL,
	"status" varchar(50) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date
);
--> statement-breakpoint
CREATE TABLE "tower" (
	"id" serial PRIMARY KEY NOT NULL,
	"condominium_id" integer NOT NULL,
	"name" varchar(100) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "apartment" ADD CONSTRAINT "apartment_tower_id_tower_id_fk" FOREIGN KEY ("tower_id") REFERENCES "public"."tower"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "doorman" ADD CONSTRAINT "doorman_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package" ADD CONSTRAINT "package_apartment_id_apartment_id_fk" FOREIGN KEY ("apartment_id") REFERENCES "public"."apartment"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "package" ADD CONSTRAINT "package_doorman_id_doorman_id_fk" FOREIGN KEY ("doorman_id") REFERENCES "public"."doorman"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resident" ADD CONSTRAINT "resident_apartment_id_apartment_id_fk" FOREIGN KEY ("apartment_id") REFERENCES "public"."apartment"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tower" ADD CONSTRAINT "tower_condominium_id_condominium_id_fk" FOREIGN KEY ("condominium_id") REFERENCES "public"."condominium"("id") ON DELETE no action ON UPDATE no action;