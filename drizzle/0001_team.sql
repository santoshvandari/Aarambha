CREATE TABLE "team_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"position" text NOT NULL,
	"bio" text NOT NULL,
	"photo" text,
	"linkedin" text,
	"twitter" text,
	"sort_order" integer DEFAULT 0 NOT NULL
);
